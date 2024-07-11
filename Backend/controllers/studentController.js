// controllers/studentController.js
const Student = require('../models/studentModel');

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createStudent = async (req, res) => {
    const studentData = new Student({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        courses: req.body.courses
    });
    try {
        const studentExist = await Student.findOne({ email: req.body.email });
        if (studentExist) {
            return res.status(400).json({ message: 'Student already exists' });
        }
        const newStudent = await studentData.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getStudents,
    getStudentById,
    createStudent
};
