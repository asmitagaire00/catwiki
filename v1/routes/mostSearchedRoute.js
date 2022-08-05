const express = require("express");
const router = express.Router();

const mostSearchedController = require("../../controllers/mostSearchedController");

router.post("/", mostSearchedController.postMostSearchedItem);
router.get("/", mostSearchedController.getMostSearchedItem);

module.exports = router;
