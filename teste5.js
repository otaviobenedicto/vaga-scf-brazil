const json = require("./stats.json");

module.exports = function (req, res) {
  var name = req.query.name;

  if (!Object.keys(json).includes(name)) {
    return res.status(404).send("O usúario ainda não foi lido!");
  }

  res
    .status(200)
    .send(
      `O usúario ${name} foi lido ${json[name]} ${
        json[name] > 1 ? "vezes" : "vez"
      }.`
    );
};
