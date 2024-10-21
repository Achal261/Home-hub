const express = require('express');
const router = express.Router();
const Category = require('../modelsofproduct/category');

// Get all categories
router.get('/', (req, res) => {
    Category.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});

// Create a new category
router.post('/', (req, res) => {
    const newCategory = req.body;
    Category.create(newCategory, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ id: results.insertId, ...newCategory });
    });
});

// Additional routes for updating and deleting categories can be added here

module.exports = router;
