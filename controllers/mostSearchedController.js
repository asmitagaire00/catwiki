const mostSearchedService = require("../services/mostSearchedService");

const postMostSearchedItem = async (req, res) => {
  const { body } = req;
  const newCatItem = {
    catItem: body.id,
  };
  try {
    const catItem = await mostSearchedService.postMostSearchedItem(newCatItem);
    res.status(200).send({ status: "ok", data: catItem });
  } catch (error) {
    res.status(500).send({ status: "Failed", data: { error: 500 } });
  }
};

const getMostSearchedItem = async (req, res) => {
  try {
    const mostSearchedItems = await mostSearchedService.getMostSearchedItem();
    console.log("most searched data", mostSearchedItems);
    res.status(200).send({ status: "ok", data: mostSearchedItems });
  } catch (error) {
    res.status(500).send({ status: "failed", data: { error: 500 } });
  }
};

module.exports = { postMostSearchedItem, getMostSearchedItem };
