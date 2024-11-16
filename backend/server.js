const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { mockUsers } = require('./mockUsers');
const app = express();

// Load environment variables
require('dotenv').config();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Login Route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Check user credentials
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Simulate token generation
  const token = `fake-jwt-token-for-${user.email}`;
  res.json({ message: 'Login successful', token, user: { name: user.name, email: user.email } });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
