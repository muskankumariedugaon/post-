const express = require('express');
const router = express.Router();

// POST /employees
// JSON example: { "name": "Rahul", "role": "Developer", "salary": 30000 }
router.post('/', (req, res) => {
  const { name, role, salary } = req.body;
  if (!name || !role || salary == null) {
    return res.status(400).json({ success: false, message: 'name, role, and salary are required.' });
  }
  res.status(201).json({ success: true, message: 'Employee added successfully.', employee: { name, role, salary } });
});

module.exports = router;
