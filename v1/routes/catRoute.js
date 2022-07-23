const express = require("express");
const router = express.Router();

const catController = require("../../controllers/catController");

router.get("/:breedId", catController.getCatBreeds);

module.exports = router;
