const Booking = require('../models/ConferenceHallModel');
const User = require('../models/User');
// Create a new booking
const Book = async (req, res) => {
    try {
        const { username, conferenceHall, bookingType, checkIn, checkOut } = req.body;

        // Fetch user details by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create new booking with user ID
        const newBooking = await Booking.create({ user: user._id, conferenceHall, bookingType, checkIn, checkOut });

        res.status(201).json(newBooking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all bookings
const getAll = async (req, res) => {
    try {
        const allBookings = await Booking.find();
        res.status(200).json(allBookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all pending bookings
const pendingBookings =  async (req, res) => {
    try {
        const pendingBookings = await Booking.find({ status: 'pending' });
        res.status(200).json(pendingBookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Accept or reject a booking
const confirmBookings = async (req, res) => {
    try {
        const bookingId = req.params.id;
        const updatedBooking = await Booking.findByIdAndUpdate(bookingId, { status: 'confirmed' }, { new: true });
        res.status(200).json(updatedBooking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {Book, getAll, pendingBookings, confirmBookings}