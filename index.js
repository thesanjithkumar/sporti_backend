const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const membershipRoutes = require('./routes/membershipRoutes');
const idCardRoutes = require('./routes/idCardRoutes');
const cors = require('cors')
const adminRoutes = require('./routes/adminRoutes');
const loginRoutes = require('./routes/loginRoutes');
const ConferenceHallBookingRoutes = require('./routes/conferencehallRoutes');

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

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/membership', membershipRoutes);
app.use('/api/id-card', idCardRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', loginRoutes);
app.use('/api/conferencehall', ConferenceHallBookingRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
