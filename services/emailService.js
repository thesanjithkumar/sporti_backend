const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bhaskarbabucm6@gmail.com',
        pass: 'gnqgfyqufkzwrjwg'
    }
});

exports.sendConfirmationEmail = (formData) => {
    const mailOptions = {
        from: 'bhaskarbabucm6@gmail.com',
        to: formData.email,
        subject: 'Booking Confirmation',
        text: `Dear ${formData.username},\n\nYour booking with application number ${formData.applicationNo} has been confirmed.\n\nThank you for choosing our services.\n\nBest regards,\nYour Team`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};
