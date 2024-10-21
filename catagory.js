const db = require('../dbconnection'); // Assuming db.js exports your connection pool

class Category {
    static getAll(callback) {
        db.query('SELECT * FROM categories', callback);
    }

    static create(data, callback) {
        db.query('INSERT INTO categories SET ?', data, callback);
    }

    // Additional methods for updating and deleting can be added here
}

module.exports = Category;
