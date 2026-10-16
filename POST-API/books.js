const express = require('express');
const router = express.Router();

// POST /books
// JSON example: { "title": "Wings of Fire", "author": "A. P. J. Abdul Kalam", "publishedYear": 1999 }
router.post('/', (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || publishedYear == null) {
    return res.status(400).json({ success: false, message: 'title, author, and publishedYear are required.' });
  }
  res.status(201).json({ success: true, message: 'Book added successfully.', book: { title, author, publishedYear } });
});

module.exports = router;
