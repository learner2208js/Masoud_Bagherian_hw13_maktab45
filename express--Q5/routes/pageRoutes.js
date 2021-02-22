const express = require('express');
const path = require('path');
const router = express.Router();
router.get('/:page', (req, res, next) => {
  if (+req.params.page > 5) {
    return res.status(404).send('<h1>page not found</h1>');
  }
  next();
});
router.get('/1', (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, './../public/pages/index1.html'));
});

router.get('/2', (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, './../public/pages/index2.html'));
});
router.get('/3', (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, './../public/pages/index3.html'));
});
router.get('/4', (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, './../public/pages/index4.html'));
});
router.get('/5', (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, './../public/pages/index5.html'));
});

module.exports = router;
