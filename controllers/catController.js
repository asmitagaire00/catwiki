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

const getCatBreedItem = async (req, res) => {
  try {
    const catItemDetails = await catService.getCatBreedItem(req.params);
    res.status(200).send({ status: "ok", data: catItemDetails });
  } catch (error) {
    res.status(500).send({ status: "Failed", data: { error: 500 } });
  }
};

const postCatBreedItem = async (req, res) => {
  const { body } = req;
  const newCatItem = {
    catItem: body.id,
  };
  try {
    const catItem = await catService.postCatBreedItem(newCatItem);
    res.status(200).send({ status: "ok", data: catItem });
  } catch (error) {
    res.status(500).send({ status: "Failed", data: { error: 500 } });
  }
};

module.exports = { getCatBreeds, getCatBreedItem, postCatBreedItem };
