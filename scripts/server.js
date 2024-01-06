import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

// Connect to MongoDB (replace the connection string with your MongoDB Atlas connection string)
mongoose.connect('mongodb+srv://vijaysmiles25:<yAjiv@cHase57!>@cluster0.0rpa78t.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

app.get('/', (_, res) => {
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

        // Store the user data in MongoDB
        const newUser = new User({ username: username, password: hashedPassword });
        newUser.save((err) => {
            if (err) {
                console.error('Error saving user:', err);
                return res.json({ success: false, message: 'Error saving user' });
            }

            return res.json({ success: true, message: 'Sign up successful' });
        });
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
