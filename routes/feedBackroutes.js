const express = require('express');
const router = express.Router();
const FormSubmission = require('../models/FeedBack');
const { postFeedback, getFeedback, deleteFeedback } = require('../controllers/feedback');

router.post('/', postFeedback)
router.get('/', getFeedback)
router.delete('/delete/:id', deleteFeedback)

module.exports = router;
