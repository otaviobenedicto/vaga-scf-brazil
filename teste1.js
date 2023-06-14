var data = require("./fakeData");

const getUser = (req, res, next) => {
  // Request parameter to find
  var name = req.query.name;

  // Algorithm to match user
  const user = data.find((item) => item.name == name);

  // HTTP Response
  user ? res.status(200).send(user) : res.status(404).send("User not found!");

  next();
};

const getUsers = (_, res) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
