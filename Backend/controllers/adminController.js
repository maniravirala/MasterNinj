const Student = require('../models/studentModel');
const createError = require('../utils/appError');

const getAdmins = async (req, res) => {
    try{
        const admins = await Student.find({role: 'admin'});
        res.json(admins);
    } catch(err){
        res.status(500).json({message: err.message});
    }
};

module.exports = { 
    getAdmins
};