const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/:pageIndex', (req, res) => {
  const pageIndex = req.params.pageIndex;
  if (+pageIndex > 5) {
    res.status(404).send('<h1>page not found</h1>');
  } else {
    res
      .status(200)
      .sendFile(
        path.join(__dirname, './../public/pages', `index${pageIndex}.html`)
      );
  }
});

module.exports = router;
