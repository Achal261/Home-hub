const express = require('express');
const router = express.Router();
const User = require('../modelsofproduct/user');

// Get all users
router.get('/', (req, res) => {
    User.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});

// Create a new user
router.post('/', (req, res) => {
    const newUser = req.body;
    User.create(newUser, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ id: results.insertId, ...newUser });
    });
});

// Additional routes for updating and deleting users can be added here

module.exports = router;
