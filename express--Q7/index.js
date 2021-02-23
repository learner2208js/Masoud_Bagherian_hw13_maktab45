const express = require('express');
const path = require('path');

const app = express();

const movieApiRouter = require('./routes/apiRoutes/movieApiRoutes');
const movieRouter = require('./routes/movieRoutes');
const aboutRouter = require('./routes/aboutRoutes');
const contactRouter = require('./routes/contactRoutes');
const productsRouter = require('./routes/productsRoutes');
const servicesRouter = require('./routes/servicesRoutes');
app.use('/assets', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public/assets', req.url));
});

app.use('/api/v1/movies', movieApiRouter);
app.use('/movies', movieRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/services', servicesRouter);
app.use('/products', productsRouter);
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
