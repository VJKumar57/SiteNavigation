const fs = require('fs');
const path = require('path');
const { hashPassword, checkPassword } = require('./auth');

const credentialsFilePath = path.join(__dirname, 'userCredentials.json');
let userCredentials = {};

// Load user credentials from JSON file
try {
    const data = fs.readFileSync(credentialsFilePath, 'utf-8');
    userCredentials = JSON.parse(data);
} catch (error) {
    // File doesn't exist or is empty, continue with an empty userCredentials object
}

function saveCredentialsToFile() {
    // Save user credentials to JSON file
    fs.writeFileSync(credentialsFilePath, JSON.stringify(userCredentials, null, 2), 'utf-8');
}

function registerUser(req, res) {
    const { username, password } = req.body;
    if (!userCredentials[username]) {
        const hashedPassword = hashPassword(password);
        userCredentials[username] = hashedPassword;
        saveCredentialsToFile();
        res.send('User registered successfully!');
    } else {
        res.status(400).send('Username already exists. Choose another.');
    }
}

function loginUser(req, res) {
    const { username, password } = req.body;
    if (userCredentials[username] && checkPassword(password, userCredentials[username])) {
        res.send('Login successful!');
        // Redirect to homepage or perform additional actions upon successful login
    } else {
        res.status(401).send('Invalid credentials.');
    }
}

module.exports = { registerUser, loginUser };
