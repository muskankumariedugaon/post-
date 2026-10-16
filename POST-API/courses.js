const express = require('express');
const router = express.Router();

// POST /courses
// JSON example: { "courseName": "Node.js", "duration": "6 weeks", "fee": 2500 }
router.post('/', (req, res) => {
  const { courseName, duration, fee } = req.body;
  if (!courseName || !duration || fee == null) {
    return res.status(400).json({ success: false, message: 'courseName, duration, and fee are required.' });
  }
  res.status(201).json({ success: true, message: 'Course added successfully.', course: { courseName, duration, fee } });
});

module.exports = router;
