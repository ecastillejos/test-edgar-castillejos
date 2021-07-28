const { Router } = require("express");
const { getData } = require("../controllers/data.js");

const router = Router();

router.get("/", getData);

module.exports = router;
