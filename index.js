// index.js
const express = require('express');
const app = express();
const port = 3000;

// Route sederhana pada root ("/") yang menampilkan pesan
app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to my simple Node.js service!');
});

// Route yang mengembalikan data JSON
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is a sample JSON response!', status: 'success' });
});

// Menjalankan server pada port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
