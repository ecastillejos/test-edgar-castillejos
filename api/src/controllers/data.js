const path = require("path");

function getData(req, res, next) {
  res.sendFile(path.join(__dirname, "../cities", "cities-json.json"));
}

module.exports = { getData };
