const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const router = express.Router();
const protect = require('../middleware/authMiddleware');

// Helper function to get or create a cart
const getCart = async (userId, guestId) => {
    if (userId) {
        return await Cart.findOne({ user: userId });
    } else if (guestId) {
        return await Cart.findOne({ guestId });
    }
    return null;
};

// @route POST /api/cart
// @desc Add a product to the cart
router.post('/', async (req, res) => {
    const { productId, quantity, size, color, guestId, userId } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Determine if the user is logged in or guest
        let cart = await getCart(userId, guestId);

        if (cart) {
            // If the cart exists, check if the product with same size/color is already there
            const productIndex = cart.products.findIndex(
                (p) =>
                    p.productId.toString() === productId &&
                    p.size === size &&
                    p.color === color
            );

            if (productIndex > -1) {
                // If product exists, update the quantity
                cart.products[productIndex].quantity += quantity;
            } else {
                // If product is new to this cart, push it
                cart.products.push({
                    productId,
                    name: product.name,
                    image: product.images[0].url,
                    price: product.price,
                    size,
                    color,
                    quantity,
                });
            }

            // Recalculate total price
            cart.totalPrice = cart.products.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );

            await cart.save();
            return res.status(200).json(cart);
        } else {
            // Create a new cart for the guest or user
            const newCart = await Cart.create({
                user: userId ? userId : undefined,
                guestId: guestId ? guestId : "guest_" + new Date().getTime(),
                products: [{
                    productId,
                    name: product.name,
                    image: product.images[0].url,
                    price: product.price,
                    size,
                    color,
                    quantity,
                }],
                totalPrice: product.price * quantity,
            });

            return res.status(201).json(newCart);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// @route PUT /api/cart
// @desc Update product quantity in the cart for a guest or logged-in user
// @access Public
router.put("/", async (req, res) => {
  const { productId, quantity, size, color, guestId, userId } = req.body;

  try {
    let cart = await getCart(userId, guestId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color
    );

    if (productIndex > -1) {
      // update quantity
      if (quantity > 0) {
        cart.products[productIndex].quantity = quantity;
      } else {
        // Remove product if quantity is 0 or less
        cart.products.splice(productIndex, 1);
      }

      // Recalculate total price
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

//@route DELETE /api/cart
// @desc Clear the cart for a guest or logged-in user
// @access Public
router.delete("/", async (req, res) => {
    const {productId, size, color, guestId, userId} = req.body;
    try {
        let cart = await getCart(userId, guestId);
        if (!cart) return res.status(404).json({message: "Cart not found"});
       const productIndex = cart.products.findIndex(  
            (p) =>
                p.productId.toString() === productId &&
                p.size === size &&
                p.color === color
        );
        if (productIndex > -1) {
            cart.products.splice(productIndex, 1);
            cart.totalPrice = cart.products.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );
            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message: "Product not found in cart" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
});

 // @route GET /api/cart
// @desc Get the cart for a guest or logged-in user
// @access Public   
router.get("/", async (req, res) => {
    const { guestId, userId } = req.query;
    try {
        const cart = await getCart(userId, guestId);
        if(cart) {
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message: "Cart not found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
});

// @riute POST /api/cart/merge
// @desc Merge guest cart into user cart upon login
// @access Public
router.post("/merge", async (req, res) => {
    const {guestId} = req.body;

    try {
        const guestCart = await Cart.findOne({ guestId });
        const userCart = await Cart.findOne({ user: req.user._id });

        if (!guestCart) {
            return res.status(404).json({ message: "Guest cart not found" });
        }

        if (guestCart.products.length === 0) {
            return res.status(200).json(userCart);
        }

        if (userCart) {
            // Merge products from guest cart into user cart
            guestCart.products.forEach((guestProduct) => {
                const productIndex = userCart.products.findIndex(
                    (item) =>
                        item.productId.toString() === guestProduct.productId.toString() &&
                        item.size === guestProduct.size &&
                        item.color === guestProduct.color
                );
                if (productIndex > -1) {
                    // Update quantity if product exists in user cart
                    userCart.products[productIndex].quantity += guestProduct.quantity;
                } else {
                    // Add new product to user cart
                    userCart.products.push(guestProduct);
                }
            });

            userCart.totalPrice = userCart.products.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );
            await userCart.save();

            try {
                await Cart.findOneAndDelete({ guestId });
            } catch (error) {
                console.error("Error deleting guest cart:", error);
            }

            return res.status(200).json(userCart);
        } else {
            // If user cart doesn't exist, create a new one with guest cart products
            guestCart.user = req.user._id;
            guestCart.guestId = undefined;
            await guestCart.save();
            return res.status(200).json(guestCart);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;