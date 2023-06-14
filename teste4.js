var data = require("./fakeData");

module.exports = function (req, res) {
  var id = req.query.id;
  var { job, name } = req.body;

  const index = data.findIndex((d) => d.id == id);

  if (job) {
    data[index].job = job;
  }

  if (name) {
    data[index].name = name;
  }

  return res.status(202).send(data[index]);
};
