// models/student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    age: {
        type: Number,
    },
    courses: [{
        type: String
    }],
    role: {
        type: String,
        enum: ['student', 'admin'],
        default: 'student'
    },
    resetPasswordToken: {
        type: String
    },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
