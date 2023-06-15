var data = require("./fakeData");

module.exports = function (req, res, next) {
  const { name, id } = req.query;

  const userSession =
    data.find((item) => item.name === name) ||
    data.find((item) => item.id === id);

  if (userSession) {
    res.locals.user = userSession;
  }

  if (userSession.job != "Desenvolvedor") {
    return res.status(403).send("Apenas desenvolvedores podem alterar dados!");
  }

  return next();
};
