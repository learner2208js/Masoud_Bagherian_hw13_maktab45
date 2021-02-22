const express = require('express');
const path = require('path');
const app = express();

app.use('/assets', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public/assets', req.url));
});

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
