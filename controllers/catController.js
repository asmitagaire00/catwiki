const catService = require("../services/catService");

const getCatBreeds = async (req, res) => {
  try {
    const catBreeds = catService.getCatBreeds(req.params);
    const data = await catBreeds.then((catInfo) => {
      console.log("catInfo", catInfo);
      return catInfo;
    });

    res.status(200).send({ status: "ok", data: data });
  } catch (error) {}
};

module.exports = { getCatBreeds };
