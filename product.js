// models/product.js
const db = require('../dbconnection'); // Assuming you export your pool from a db.js file

class Product {
    static getAll(callback) {
        db.query('SELECT * FROM products', callback);
    }

    static create(data, callback) {
        db.query('INSERT INTO products SET ?', data, callback);
    }
}

module.exports = Product;
