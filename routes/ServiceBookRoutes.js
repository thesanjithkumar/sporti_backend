const express = require('express');
const { submitForm, getBookingByApplicationNo, deleteBooking, updateBooking } = require('../controllers/serviceBookController');
const router = express.Router();

router.post('/submitForm', submitForm);
router.get('/getBooking/:applicationNo', getBookingByApplicationNo);
router.delete('/deleteBooking/:applicationNo', deleteBooking);
router.put('/updateBooking/:applicationNo', updateBooking);



module.exports = router;
