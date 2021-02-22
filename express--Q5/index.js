const express = require('express');
const path = require('path');
const pageRouter = require('./routes/pageRoutes');
const app = express();

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public/home.html'));
});

app.use('/page', pageRouter);

app.listen(3000, () => {
  console.log('App running on port 3000');
});
