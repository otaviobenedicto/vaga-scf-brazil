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
var teste6 = require("./teste6");

app.set("view engine", "jade");

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function getRoute(req) {
  const route = req.route ? req.route.path : "";
  const baseUrl = req.baseUrl ? req.baseUrl : "";

  return route ? `${baseUrl === "/" ? "" : baseUrl}${route}` : "unknown route";
}

const dumpStats = (stats) => {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(stats), {
      flag: "w+",
    });
  } catch (err) {
    console.error(err);
  }
};

// Middleware function to count requests and send to stats.json
app.use((req, res, next) => {
  res.on("finish", () => {
    if (getRoute(req) === "/user") {
      const stats = JSON.parse(fs.readFileSync(FILE_PATH));
      const event = `${decodeURI(req.originalUrl).split("=")[1]}`;
      stats[event] = stats[event] ? stats[event] + 1 : 1;
      dumpStats(stats);
    }
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

app.delete("/users", teste6, teste3);

app.put("/users", teste6, teste4);

app.get("/users/access", teste5);

// Server running
const port = 3000;
app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
