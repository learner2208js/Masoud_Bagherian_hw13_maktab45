const showName = (req, res) => {
  res.status(200).send(`page of user with name: ${req.params.name}`);
};
const showAllUsers = (req, res) => {
  res.status(200).send('this is user page');
};
const loginUser = (req, res) => {
  res.status(200).send('this is login page');
};
module.exports = { showName, showAllUsers, loginUser };
