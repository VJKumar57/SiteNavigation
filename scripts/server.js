const express = require('express');
const bodyParser = require('body-parser');
const { registerUser, loginUser } = require('./userManagement');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// API endpoint for user registration
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    registerUser(username, password);
    res.send('User registered successfully!');
});

// API endpoint for user login
app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    loginUser(username, password);
    res.send('Login attempt processed.');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
