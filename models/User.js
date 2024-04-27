const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: String,
    officialNumber: String,
    email: String,
    officialAddress: String,
    residentialAddress: String,
    designation: String,
    unit: String,
    gender: String,
    kgidNo: String,
    workingStatus: String,
    dateOfBirth: Date,
    bloodGroup: String,
    areaOfInterest: String,
    profilePhoto: String,
    policeId: String,
    requestLetter: String,
    isMembershipAgreed: Boolean,
    isMembershipVerified: { type: Boolean, default: false },
    membershipPaymentConfirmed: { type: Boolean, default: false },
    applicationNumber: { type: String, unique: true }
});

module.exports = mongoose.model('User', userSchema);
