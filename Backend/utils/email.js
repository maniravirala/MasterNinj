// utils/email.js

const nodemailer = require('nodemailer');
require('dotenv').config();


// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Function to send email
const sendEmail = async (options) => {
    try {
        // Define email options
        const mailOptions = {
            // from: process.env.EMAIL_USER, 
            from: '"MasterNinja" <test@email.com>',  // sender address
            to: options.email, // Recipient address
            subject: options.subject, // Subject line
            html: options.html // Email body
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log('Email sent successfully');
    } catch (err) {
        console.error('Error sending email:', err.message);
        throw new Error('Error sending email');
    }
};

module.exports = sendEmail;
