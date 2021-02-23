const path = require('path');
const sendContactPage = (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, './../public/pages/contact.html'));
};

module.exports = { sendContactPage };
