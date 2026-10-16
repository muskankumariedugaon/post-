const express = require('express');
const router = express.Router();

// POST /movies
// JSON example: { "title": "3 Idiots", "genre": "Comedy-Drama", "rating": 8.4 }
router.post('/', (req, res) => {
  const { title, genre, rating } = req.body;
  if (!title || !genre || rating == null) {
    return res.status(400).json({ success: false, message: 'title, genre, and rating are required.' });
  }
  res.status(201).json({ success: true, message: 'Movie added successfully.', movie: { title, genre, rating } });
});

module.exports = router;
