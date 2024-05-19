const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    username: String,
    email: String,
    phoneNumber: String,
    sporti: String,
    checkIn: Date,
    checkOut: Date,
    serviceName: String,
    serviceType: String,
    applicationNo: String,
    paymentStatus: {
        type: String,
        default: 'Pending'
    }
});

module.exports = mongoose.model('serviceBooking', bookingSchema);
