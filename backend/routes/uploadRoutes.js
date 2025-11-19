const express = require('express');
const { uploadPhoto } = require('../controllers/uploadController');
const { protect } = require('../middleware/authMiddleware');
const fileUpload = require('express-fileupload');

const router = express.Router();

// Middleware to handle file uploads
router.use(fileUpload({ useTempFiles: true }));

// Protected route for photo upload
router.post('/upload', protect, uploadPhoto);

module.exports = router;