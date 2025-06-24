const express = require("express");
const router = express.Router();
const { getEarthImages } = require("../controllers/earthController.js");

router.get("/", getEarthImages);

module.exports = router;
