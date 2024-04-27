const express = require('express');
const { Book, getAll, pendingBookings, confirmBookings } = require('../controllers/conferencehall');
const router = express.Router();

router.post('/book', Book);
router.get('/bookings', getAll);
router.get('/pending/bookings', pendingBookings);
router.get('/confirm/booking/:id', confirmBookings);

module.exports = router;
