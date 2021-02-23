const path = require('path');
const sendProductsPage = (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, './../public/pages/products.html'));
};

module.exports = { sendProductsPage };
