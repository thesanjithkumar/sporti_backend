// authController.js

const User = require('../models/User');

const submitApplication = async (req, res) => {
    try {
        const userId = req.params.id; // Get user ID from URL params
        const { name, officialNumber, email, officialAddress, residentialAddress, designation, unit, gender, kgidNo, workingStatus, dateOfBirth, bloodGroup, areaOfInterest, profilePhoto, policeId, requestLetter, isMembershipAgreed } = req.body;

        // Find the existing user by user ID
        const existingUser = await User.findById(userId);

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update the user with additional details
        existingUser.name = name;
        existingUser.officialNumber = officialNumber;
        existingUser.email = email;
        existingUser.officialAddress = officialAddress;
        existingUser.residentialAddress = residentialAddress;
        existingUser.designation = designation;
        existingUser.unit = unit;
        existingUser.gender = gender;
        existingUser.kgidNo = kgidNo;
        existingUser.workingStatus = workingStatus;
        existingUser.dateOfBirth = dateOfBirth;
        existingUser.bloodGroup = bloodGroup;
        existingUser.areaOfInterest = areaOfInterest;
        existingUser.profilePhoto = profilePhoto;
        existingUser.policeId = policeId;
        existingUser.requestLetter = requestLetter;
        existingUser.isMembershipAgreed = isMembershipAgreed;

        // Save the updated user
        await existingUser.save();

        res.status(200).json({ message: 'Membership application submitted successfully', userId });
    } catch (error) {
        console.error('Application submission error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getMember = async(req, res)=>{
    try {
        const memberId = req.params.id;
        const member = await User.findById(memberId);
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.status(200).json({ member });
    } catch (error) {
        console.error('Error fetching member:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {submitApplication, getMember};
