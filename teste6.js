var data = require("./fakeData");

module.exports = function (req, res, next) {
  const { name, id } = req.query;

  const userSession = name
    ? data.find((item) => item.name == name)
    : data.find((item) => item.id == id);

  if (!userSession) {
    return res.status(403).send("User not found");
  }
  
  res.locals.user = userSession;

  // O usuário não pode alterar cargo de desenvolvedores
  if (userSession.job === "Desenvolvedor") {
    return res
      .status(403)
      .send("Você não tem permissão para modificar esse tipo de dado.");
  }

  return next();
};
