const express = require('express');
const router = express.Router();

// POST /weather
// JSON example: { "city": "Chapra", "temperatureC": 30, "condition": "Sunny" }
router.post('/', (req, res) => {
  const { city, temperatureC, condition } = req.body;
  if (!city || temperatureC == null || !condition) {
    return res.status(400).json({ success: false, message: 'city, temperatureC, and condition are required.' });
  }
  res.status(201).json({ success: true, message: 'Weather record created successfully.', weather: { city, temperatureC, condition } });
});

module.exports = router;
