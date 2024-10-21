const db = require('../dbconnection'); // Assuming db.js exports your connection pool

class User {
    static getAll(callback) {
        db.query('SELECT * FROM users', callback);
    }

    static create(data, callback) {
        db.query('INSERT INTO users SET ?', data, callback);
    }

    // Additional methods for updating and deleting can be added here
}

module.exports = User;
