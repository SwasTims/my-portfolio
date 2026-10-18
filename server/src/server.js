const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

// Uncomment this once you have your MongoDB Atlas URI ready in .env
// connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.json({ message: "MERN Portfolio API is up and running..." });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});