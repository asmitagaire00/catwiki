require("dotenv").config();
const fetch = require("node-fetch");

const api_key = process.env.API_KEY_CATWIKI;

const getCatBreeds = async () => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds?limit=20&page=0&api_key=${api_key}`
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

module.exports = { getCatBreeds };
