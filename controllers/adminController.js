// adminController.js

const User = require('../models/User');

const verifyMembership = async (req, res) => {
    try {
        const { userId, isMembershipVerified } = req.body;
        const user = await User.findByIdAndUpdate(userId, { isMembershipVerified }, { new: true });
        res.status(200).json({ user });
    } catch (error) {
        console.error('Error verifying membership:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getUserData = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { verifyMembership, getUserData };
