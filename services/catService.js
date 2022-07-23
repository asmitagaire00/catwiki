require("dotenv").config();
const fetch = require("node-fetch");

const api_key = process.env.API_KEY_CATWIKI;

const getCatBreeds = async (breedId) => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId.breedId}&api_key=${api_key}`
    );
    const catInfo = await response.json();
    return catInfo;
  } catch (error) {
    throw error;
  }
};

module.exports = { getCatBreeds };
