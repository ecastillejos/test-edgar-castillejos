const express = require("express");
const app = express();
const routes = require("./src/routes/index.js");

app.use("/", routes);

app.listen(3001, () => {
  console.log("listening at 3001");
});
