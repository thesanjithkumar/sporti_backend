const express = require('express');
const router = express.Router();
const generateIDCard = require('../controllers/idCardController');

router.post('/generate', generateIDCard);

module.exports = router;
