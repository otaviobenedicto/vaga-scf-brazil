var data = require("./fakeData");

module.exports = function (req, res) {
  var name = res.locals.user.name;

  // Find user to be removed
  const indexUser = data.findIndex((item) => item.name === name);

  //   Check if user exists and remove it!
  if (indexUser < 0) {
    return res.status(404).send("User not found!");
  } else {
    try {
      data.splice(indexUser, 0);
      return res.status(200).send("success");
    } catch (error) {
      console.log(error);
      return res.status(400).send("Error to delete an user!");
    }
  }
};
