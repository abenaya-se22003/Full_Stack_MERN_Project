const express = require("express");
const User = require("../models/User");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route GET /api/admin/users
// @desc Get all users (Admin only)
// @access Private/Admin
router.get("/", protect, admin, async (req, res) => {
    try {
        // find all users in the database
        const users = await User.find({});
        
        // if successfully retrieved users, send them as JSON response
        res.json(users);
    } catch (error) {
        console.error("Admin Get Users Error:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

// @route POST /api/admin/users
// @desc Create a new user (Admin only)
// @access Private/Admin
router.post("/", protect, admin, async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        // Check if the email is already in use
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email is already in use" });
        }

        // Create a new user
        user = new User({ name, email, password,role: role || "customer",});
        await user.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Admin Create User Error:", error);
        res.status(500).json({ message: "Server Error" });
    }
});


module.exports = router;