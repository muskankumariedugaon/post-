const express = require('express');
const router = express.Router();

// POST /cities
// JSON example: { "name": "Chapra", "state": "Bihar", "population": 250000 }
router.post('/', (req, res) => {
  const { name, state, population } = req.body;
  if (!name || !state || population == null) {
    return res.status(400).json({ success: false, message: 'name, state, and population are required.' });
  }
  res.status(201).json({ success: true, message: 'City added successfully.', city: { name, state, population } });
});

module.exports = router;
