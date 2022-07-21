require("dotenv").config();

const api_key = process.env.API_KEY_CATWIKI;

const getCatBreeds = () => {
  try {
    const catBreeds = fetch(
      `https://api.thecatapi.com/v1/images/search?limit=15&api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((catInfo) => console.log(catInfo))
      .catch((error) => console.log("error occurred while fetching", error));
    return catBreeds;
  } catch (error) {
    throw error;
  }
};

module.exports = { getCatBreeds };
