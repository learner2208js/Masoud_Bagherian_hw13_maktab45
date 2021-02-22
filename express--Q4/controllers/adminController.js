// const fs = require('fs');
// const path = require('path');
// let users;
// try {
//   users = JSON.parse(fs.readFileSync(path.join(__dirname, './../users.json')));
// } catch (error) {
//   console.log(error.message);
//   users = [];
// }
const users = require('./../tools/downloadUsers');

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: users.length ? 'success' : 'fail',
    users_count: users.length,
    data: {
      users,
    },
  });
};

module.exports = { getAllUsers };
