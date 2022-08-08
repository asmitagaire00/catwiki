const mostSearchedService = require("../services/mostSearchedService");

const getMostSearchedItem = async (req, res) => {
  try {
    const mostSearchedItems = await mostSearchedService.getMostSearchedItem();
    res.status(200).send({ status: "ok", data: mostSearchedItems });
  } catch (error) {
    res
      .status(500)
      .send({ status: "failed", data: { error: error?.message || error } });
  }
};

const postMostSearchedItem = async (req, res) => {
  const { body } = req;
  console.log(req.body);
  const newCatItem = {
    catItem: body.id,
    name: body.name,
    url: body.url,
    description: body.description,
    count: body.count,
  };
  try {
    const catItem = await mostSearchedService.postMostSearchedItem(newCatItem);
    res.status(200).send({ status: "ok", data: catItem });
  } catch (error) {
    res
      .status(500)
      .send({ status: "Failed", data: { error: error?.message || error } });
  }
};

module.exports = { postMostSearchedItem, getMostSearchedItem };
