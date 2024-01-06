// auth.js
const bcrypt = require('bcrypt');

// Function to hash and salt a password
function hashPassword(password) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}

// Function to check if a provided password matches the stored hashed password
function checkPassword(inputPassword, storedHashedPassword) {
    return bcrypt.compareSync(inputPassword, storedHashedPassword);
}

module.exports = { hashPassword, checkPassword };
