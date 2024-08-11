// controllers/studentController.js
const Student = require('../models/studentModel');
const createError = require('../utils/appError');
const sendEmail = require('../utils/email');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createStudent = async (req, res, next) => {
    try {
        const studentExist = await Student.findOne({ email: req.body.email });
        if (studentExist) return next(new createError(403, 'Student already exists'));

        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        const newStudent = await Student.create({
            ...req.body,
            password: hashedPassword
        });

        const token = jwt.sign({ _id: newStudent._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        res.cookie('token', token, {
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
            secure: true,
            sameSite: 'None'
        });

        res.status(201).json({
            status: 'success',
            message: 'Registered successfully',
            token,
            user: {
                name: newStudent.name,
                email: newStudent.email,
            }
        });
    } catch (err) {
        return next(new createError(400, err.message));
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password, rememberMe } = req.body;

        const student = await Student.findOne({ email });
        if (!student) return next(new createError(401, 'User not found'));

        const isPasswordValid = await bcrypt.compare(password, student.password);
        if (!isPasswordValid) return next(new createError(401, 'Invalid password'));

        const token = jwt.sign({ _id: student._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        const COOKIE_EXPIRES = rememberMe ? process.env.COOKIE_EXPIRES_IN_REMEMBER_ME : process.env.COOKIE_EXPIRES_IN;

        res.cookie('token', token, {
            expires: new Date(Date.now() + COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            secure: true,
            sameSite: 'None'
        });

        res.status(200).json({
            status: 'success',
            message: 'Logged in successfully',
            token,
            user: {
                name: student.name,
                email: student.email
            }
        });
    } catch (err) {
        return next(new createError(400, err.message));
    }
}

exports.logout = async (req, res, next) => {
    res.clearCookie('token');
    res.status(200).json({
        status: 'success',
        message: 'Logged out successfully'
    });
}

exports.forgotPassword = async (req, res, next) => {
    try {
        const student = await Student.findOne({ email: req.body.email });
        if (!student) return next(new createError(404, 'User not found'));

        const token = jwt.sign({ _id: student._id }, process.env.JWT_SECRET, {
            expiresIn: '10m'
        });
        
        student.resetPasswordToken = token;
        await student.save();

        await sendEmail({email: student.email, subject: 'Reset Password', html: `<a href="${process.env.CLIENT_URL}/reset-password/${token}">Reset Password</a>`});
        
        res.status(200).json({
            status: 'success',
            message: 'Password reset link sent to your email'
        });
    }
    catch (err) {
        return next(new createError(400, err.message));
    }
}

exports.resetPassword = async (req, res, next) => {
    try {
        const { token } = req.params;
        const { password } = req.body;
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const student = await Student.findById(decoded._id);
        if (!student) return next(new createError(404, 'Token not valid'));
        
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        student.password = hashedPassword;
        student.resetPasswordToken = undefined;
        await student.save();
        
        res.status(200).json({
            status: 'success',
            message: 'Password reset successful'
        });
    }
    catch (err) {
        return next(new createError(400, err.message));
    }
}