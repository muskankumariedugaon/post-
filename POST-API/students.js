const express = require('express');
const router = express.Router();

// POST /students
// JSON example: { "name": "Neha", "rollNumber": 12, "course": "B.Sc." }
router.post('/', (req, res) => {
  const { name, rollNumber, course } = req.body;
  if (!name || rollNumber == null || !course) {
    return res.status(400).json({ success: false, message: 'name, rollNumber, and course are required.' });
  }
  res.status(201).json({ success: true, message: 'Student added successfully.', student: { name, rollNumber, course } });
});

module.exports = router;
