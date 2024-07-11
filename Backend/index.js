const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Models
const Student = require('./models/studentModel');

// Route files
const authRoutes = require('./routes/authRoute');
const studentRoutes = require('./routes/studentRoute');

// Middleware
const verify = require('./middleware/authMiddleware');
const app = express();

// Load env 
dotenv.config();

// Connect to database
connectDB();

// Body parser
app.use(cookieParser());
app.use(express.json()); 
app.use(cors({
    origin: ['http://localhost:5173', 'https://masterninja.netlify.app'],
    credentials: true
}));

// Mount routers
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/students', verify, studentRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Student Dashboard API');
});

app.get('/protected', verify, (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Protected route',
    });
});

app.get('/public', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Public route',
    });
});


// Global error handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
