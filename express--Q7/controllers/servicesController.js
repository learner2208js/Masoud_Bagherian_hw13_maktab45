const path = require('path');
const sendServicesPage = (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, './../public/pages/services.html'));
};

module.exports = { sendServicesPage };
