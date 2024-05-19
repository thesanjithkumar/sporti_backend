const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const membershipRoutes = require('./routes/membershipRoutes');
const idCardRoutes = require('./routes/idCardRoutes');
const cors = require('cors')
const adminRoutes = require('./routes/adminRoutes');
const loginRoutes = require('./routes/loginRoutes');
// const ConferenceHallBookingRoutes = require('./routes/conferencehallRoutes');
const feedbackRoutes = require('./routes/feedBackroutes');
// const ConfrenceHallRouter = require('./routes/conferencehallRoutes');
const servicebookingRoutes = require('./routes/ServiceBookRoutes')
const crypto = require('crypto');
const authRoutes = require('./routes/authRoutes');
const { default: axios } = require('axios');

const app = express();

app.use(bodyParser.json());
app.use(cors())

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://bhaskarAntoty123:bhaskar3958@bhaskarantony.wagpkay.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB database');
});


// SMS API credentials
const API_SERVICE_KEY = '6f420626-1666-4f1a-b986-0cc8e20c3a77';
const SENDER_ID = 'POLMES';
const USERNAME = 'Mobile_1-POLMES';
const PASSWORD = 'POLMES@1234';

// Routes

app.use('/api/membership', membershipRoutes);
app.use('/api/id-card', idCardRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', authRoutes);
// app.use('/api/conferencehall', ConferenceHallBookingRoutes);
app.use('/api/feedback', feedbackRoutes);
// app.use('/api/confrenceHall', ConfrenceHallRouter);
app.use('/api', servicebookingRoutes);
// Endpoint to send SMS
app.post('/send-sms', async (req, res) => {
  const { mobileNumber, message } = req.body;

  try {
    const response = await axios.post('https://mock-sms-api-endpoint.com/send', {
      service_key: API_SERVICE_KEY,
      sender_id: SENDER_ID,
      username: USERNAME,
      password: PASSWORD,
      mobile: mobileNumber,
      message: message,
    });

    res.status(200).json({
      success: true,
      message: 'SMS sent successfully!',
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to send SMS',
      error: error.message,
    });
  }
});



const generateSecretKey = () => {
  return crypto.randomBytes(64).toString('hex');
};

console.log('key', generateSecretKey());


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
