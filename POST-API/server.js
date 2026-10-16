const express = require('express');
const app = express();
const PORT = 5000;

// Parse incoming JSON request bodies
app.use(express.json());

// Register all 10 POST API route modules
app.use('/orders', require('./orders'));
app.use('/users', require('./users'));
app.use('/products', require('./products'));
app.use('/students', require('./students'));
app.use('/employees', require('./employees'));
app.use('/books', require('./books'));
app.use('/movies', require('./movies'));
app.use('/courses', require('./courses'));
app.use('/cities', require('./cities'));
app.use('/weather', require('./weather'));

app.get('/', (req, res) => {
  res.send('POST-API practice server is running on port 5000.');
});

// Helpful JSON error response for malformed JSON or other errors
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(400).json({ success: false, message: 'Invalid request or JSON body.' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
