const users = require('./../tools/downloadUsers');

const checkRequest = (req, res, next) => {
  if (!req.body['first_name']) {
    return res.status(400).json({
      status: 'bad request',
      message: 'request body should contain first_name property',
    });
  }
  next();
};
const CheckUserAvailable = (req, res) => {
  const user = users.find(
    (user) => user['first_name'] === req.body['first_name']
  );
  if (!user) {
    res.status(404).json({
      status: 'not found',
      message: 'there is not user with first_name you posted',
    });
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  }
};
module.exports = { checkRequest, CheckUserAvailable };
