const path = require('path');
const sendAboutPage = (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, './../public/pages/about.html'));
};

module.exports = { sendAboutPage };
