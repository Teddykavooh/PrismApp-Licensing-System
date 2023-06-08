const express = require('express');
const path = require('path');
const app = express();

// add global middleware for serving static files from our express app
app.use(express.static(path.join(__dirname, 'public')));

// register our routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

// bind express app to port
app.listen(1234);
