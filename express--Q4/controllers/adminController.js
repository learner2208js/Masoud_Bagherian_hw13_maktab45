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
