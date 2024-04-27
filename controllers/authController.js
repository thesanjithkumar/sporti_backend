const bcrypt = require('bcryptjs');
const User = require('../models/User');

const register = async (req, res) => {
    try {
        const { username, password, name, email } = req.body;

        // Check if username already exists
        const existingUser = await User.findOne({ username }).exec();
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, password: hashedPassword, name, email });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = register;
