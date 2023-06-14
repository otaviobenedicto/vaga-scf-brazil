var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const fs = require("fs");
const FILE_PATH = "stats.json";

var teste1 = require("./teste1");
var teste2 = require("./teste2");
var teste3 = require("./teste3");
var teste4 = require("./teste4");
var teste5 = require("./teste5");

app.set("view engine", "jade");

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

// read 
function getRoute(req) {
  const route = req.route ? req.route.path : ""; // check if the handler exist
  const baseUrl = req.baseUrl ? req.baseUrl : ""; // adding the base url if the handler is a child of another handler

  return route ? `${baseUrl === "/" ? "" : baseUrl}${route}` : "unknown route";
}

// read json object from file
const readStats = () => {
  let result = {};
  try {
    result = JSON.parse(fs.readFileSync(FILE_PATH));
  } catch (err) {
    console.error(err);
  }
  return result;
};

// dump json object to file
const dumpStats = (stats) => {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(stats), { flag: "w+" });
  } catch (err) {
    console.error(err);
  }
};

app.use((req, res, next) => {
  res.on("finish", () => {
    const stats = readStats();
    const event = `${req.method} ${getRoute(req)} ${res.statusCode}`;
    stats[event] = stats[event] ? stats[event] + 1 : 1;
    dumpStats(stats);
  });
  next();
});

// Main Route
app.get("/", function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

// Routes

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);

app.post("/users", teste2);

app.delete("/users", teste3);

app.put("/users", teste4);

app.get("/users/access", teste5);

app.get("/stats/", (req, res) => {
  res.json(readStats());
});

// Server running
const port = 3000;
app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
