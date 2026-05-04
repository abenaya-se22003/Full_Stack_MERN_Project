const express = require('express');
const Product = require('../models/Product');
const { protect,admin } = require('../middleware/authMiddleware');

const router = express.Router();


// @route POST /api/products
// @desc Create a new product
// @access Private (Admin only)

router.post('/', protect,admin, async (req, res) => { 
    try {
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            weight,
            sku
        } = req.body;

        const product = new Product({
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            weight,
            sku,
            user: req.user._id 
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// @ROUTE PUT /api/products/:id
// @DESC Update a product
// @ACCESS Private (Admin only)
router.put('/:id', protect,admin, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Update product fields
        Object.assign(product, req.body);
        const updatedProduct = await product.save();

        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

module.exports = router;