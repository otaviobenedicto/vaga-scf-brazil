var data = require("./fakeData");

// HTTP POST Method to add a new user in Fake Data
module.exports = function (req, res) {
  var { name, job } = req.body;

  if (!name) {
    return "Voce precisa inserir o name";
  }

  if (!job) {
    return "Voce precisa inserir o job";
  }

  var newUser = {
    name: name,
    job: job,
  };

  try {
    data.push({ ...newUser, id: data.length + 1 });
    res.status(201).send(data[data.length - 1]);
  } catch (error) {
    console.error(error);
    res.status(400).send("Falha ao adicionar o usuário!");
  }
};
