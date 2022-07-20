const catService = require("../services/catService");

const getCatBreeds = () => {
  try {
    const catBreeds = catService.getCatBreeds();
    res.status(200).send({ status: "ok", data: catBreeds });
  } catch (error) {}
};

module.exports = { getCatBreeds };
