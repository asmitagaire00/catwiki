const express = require("express");
const router = express.Router();

const catController = require("../../controllers/catController");

router.get("/", catController.getCatBreeds);
router.get("/:id", catController.getCatBreedItem);

module.exports = router;
