const express = require('express');
const upload = require('../middleware/uploadMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
const { registerUser, loginUser, uploadResume  } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    message: 'Protected route accessed',
    user: req.user
  });
});

router.post('/upload-resume', authMiddleware, upload.single('resume'), uploadResume);

module.exports = router;