// 1. Import required packages
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./src/config/db');
const dotenv = require('dotenv');
const authRoutes = require('./src/routes/authRoutes');


// 2. Load environment variables
dotenv.config();

connectDB();

// 3. Create express app
const app = express();

// 4. Middleware
app.use(express.json()); // JSON data handle karega
app.use(cors()); // frontend ko connect hone dega

// 5. Test route
app.get('/', (req, res) => {
  res.send('API Running 🚀');
});

// 6. Port setup
const PORT = process.env.PORT || 5000;

// 7. Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use('/api/auth', authRoutes);