const User = require('../models/User');

const generateIDCard = async (req, res) => {
    try {
        const { userId } = req.body;

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate the ID card data
        const idCard = {
            name: user.name,
            // Add other fields as required
        };

        res.status(200).json({ idCard });
    } catch (error) {
        console.error('ID card generation error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
module.exports = generateIDCard
