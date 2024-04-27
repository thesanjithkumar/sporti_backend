// adminRoutes.js

const express = require('express');
const router = express.Router();
const { verifyMembership, getUserData } = require('../controllers/adminController');

// Route to verify membership status
router.put('/verify-membership', verifyMembership);
router.get('/get-user-data', getUserData);


module.exports = router;
