const express = require('express');
const Product = require('../models/Product');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();


// @route POST /api/products
// @desc Create a new product
// @access Private (Admin only)