const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

const { registerUser, loginUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    message: 'Protected route accessed',
    user: req.user
  });
});

module.exports = router;