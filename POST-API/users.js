const express = require('express');
const router = express.Router();

// POST /users
// JSON example: { "name": "Aman", "email": "aman@example.com", "age": 21 }
router.post('/', (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || age == null) {
    return res.status(400).json({ success: false, message: 'name, email, and age are required.' });
  }
  res.status(201).json({ success: true, message: 'User created successfully.', user: { name, email, age } });
});

module.exports = router;
