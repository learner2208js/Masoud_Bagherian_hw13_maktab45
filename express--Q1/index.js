const express = require('express');

const app = express();

const showHomePage = (req, res) => {
  res.status(200).send('<h1>hello world!</h1>');
};

app.route('/').get(showHomePage);

app.listen(3000, () => {
  console.log('App running on port 3000');
});
