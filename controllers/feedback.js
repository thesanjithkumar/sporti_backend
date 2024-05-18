const FormSubmission = require('../models/FeedBack');

// POST request handler
const postFeedback = async (req, res) => {
  try {
    const formData = req.body;
    const newFormSubmission = new FormSubmission(formData);
    await newFormSubmission.save();
    console.log('Form data saved:', formData);
    res.status(201).json({ message: 'Form submitted successfully', formData });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Failed to submit form' });
  }
};

// GET request handler to retrieve all form submissions
const getFeedback = async (req, res) => {
  try {
    const formSubmissions = await FormSubmission.find();
    res.status(200).json(formSubmissions);
  } catch (error) {
    console.error('Error fetching form submissions:', error);
    res.status(500).json({ error: 'Failed to fetch form submissions' });
  }
};

// DELETE request handler to delete all form submissions
const deleteFeedback =async (req, res) => {
    try {
      const deletedFormSubmission = await FormSubmission.findByIdAndDelete(req.params.id);
      if (!deletedFormSubmission) {
        return res.status(404).json({ error: 'Form submission not found' });
      }
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting form submission:', error);
      res.status(500).json({ error: 'Failed to delete form submission' });
    }
  };

module.exports = {postFeedback, getFeedback, deleteFeedback};
