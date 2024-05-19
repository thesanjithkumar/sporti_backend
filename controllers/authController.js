const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModal');
const { secretKey } = require('../configuration');

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).send('User registered');
  } catch (error) {
    res.status(500).send('Error registering user');
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).send('Invalid email or password');
    }

    const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '1h' });
    res.json({ user: { email: user.email }, token });
  } catch (error) {
    res.status(500).send('Error logging in user');
  }
};

module.exports = { registerUser, loginUser };
