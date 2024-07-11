// middlewares/auth.js

const jwt = require('jsonwebtoken');
const createError = require('../utils/appError');
const Student = require('../models/studentModel');

const verify = async(req, res, next) => {
    try {
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        } else if (req.cookies.token) {
            token = req.cookies.token;
        }

        if (!token) return next(new createError(401, 'You are not logged in'));

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const student = await Student.findById(decoded._id)
        if (!student) return next(new createError(401, 'Student not found'));

        req.student = student;

        next();

    } catch (err) {
        return next(new createError(401, err.message));
    }
};

module.exports = verify;
