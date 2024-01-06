const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Dummy user database (you should use a database in a real application)
const users = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    // Dummy validation (you may want to add more validation logic)
    if (!username || !password) {
        return res.json({ success: false, message: 'Invalid data' });
    }

    // Hash the password before storing it
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.json({ success: false, message: 'Error hashing password' });
        }

        // Store the user data (you should use a database in a real application)
        users.push({ username: username, password: hashedPassword });

        return res.json({ success: true, message: 'Sign up successful' });
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
