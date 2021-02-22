const fs = require('fs');
const path = require('path');
let users;
try {
  users = JSON.parse(fs.readFileSync(path.join(__dirname, './../users.json')));
} catch (error) {
  console.log(error.message);
  users = [];
}

module.exports = users;
