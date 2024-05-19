// models/Booking.js

const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    conferenceHall: {
        type: String,
        required: true,
    },
    bookingType: {
        type: String,
        required: true,
    },
    checkIn: {
        type: Date,
        required: true,
    },
    checkOut: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'rejected'], // Add 'rejected' status
        default: 'pending',
    },
    rejectionReason: { // New field for rejection reason
        type: String,
        default: '',
    },
});

module.exports = mongoose.model('conferenceHallBooking', BookingSchema);
