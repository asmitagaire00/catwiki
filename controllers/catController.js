const catService = require("../services/catService");

const getCatBreeds = async (req, res) => {
  try {
    const catBreeds = await catService.getCatBreeds();
    res.status(200).send({ status: "ok", data: catBreeds });
  } catch (e) {
    console.log("Error getCatBreeds: ", e);
    res.status(500).send();
  }
};

module.exports = { getCatBreeds };
