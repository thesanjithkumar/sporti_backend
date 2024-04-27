const express = require('express');
const router = express.Router();
const {submitApplication, getMember} = require('../controllers/membershipController');

router.post('/submit-application/:id', submitApplication);
router.get('/member/:id', getMember);

module.exports = router;
