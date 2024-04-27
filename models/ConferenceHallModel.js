// models/Booking.js

const mongoose = require('mongoose');

const conferenceHallBookingSchema = new mongoose.Schema({
    user: { type: String, required: true }, // Change the type to String
    conferenceHall: { type: String, required: true },
    bookingType: { type: String, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true }
});

module.exports = mongoose.model('conferencehallbookings', conferenceHallBookingSchema);
