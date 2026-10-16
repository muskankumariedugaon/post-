const express = require('express');
const router = express.Router();

// POST /orders
// Thunder Client JSON example: { "customerName": "Riya", "item": "Notebook", "quantity": 2 }
router.post('/', (req, res) => {
  const { customerName, item, quantity } = req.body;
  if (!customerName || !item || quantity == null) {
    return res.status(400).json({ success: false, message: 'customerName, item, and quantity are required.' });
  }
  res.status(201).json({ success: true, message: 'Order created successfully.', order: { customerName, item, quantity } });
});

module.exports = router;
