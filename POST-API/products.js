const express = require('express');
const router = express.Router();

// POST /products
// JSON example: { "name": "Mouse", "price": 499, "stock": 20 }
router.post('/', (req, res) => {
  const { name, price, stock } = req.body;
  if (!name || price == null || stock == null) {
    return res.status(400).json({ success: false, message: 'name, price, and stock are required.' });
  }
  res.status(201).json({ success: true, message: 'Product created successfully.', product: { name, price, stock } });
});

module.exports = router;
