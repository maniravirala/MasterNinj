// models/student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    courses: [{
        type: String
    }],
    role: {
        type: String,
        default: 'student'
    },
    resetPasswordToken: {
        type: String
    },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
