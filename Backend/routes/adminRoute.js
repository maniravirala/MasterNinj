// routes/students.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.getAdmins);

module.exports = router;
