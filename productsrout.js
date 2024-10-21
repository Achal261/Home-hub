// router/productsrout.js
const express = require('express');
const router = express.Router();
const Product = require('../modelsofproduct/product');

// Get all products
router.get('/', (req, res) => {
    Product.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});

// Create a new product
router.post('/', (req, res) => {
    const newProduct = req.body;
    Product.create(newProduct, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ id: results.insertId, ...newProduct });
    });
});

module.exports = router;
