const { Router } = require("express");

const DataRouter = require("./data.js");

const router = Router();

router.use("/data", DataRouter);

module.exports = router;
