const getCatBreeds = () => {
  try {
    const catBreeds = fetch(
      "https://api.thecatapi.com/v1/images/search?breed_ids=beng"
    )
      .then((response) => response.json())
      .then((catInfo) => console.log(catInfo))
      .catch((error) => console.log("error occurred while fetching", error));
    return catBreeds;
  } catch (error) {
    throw error;
  }
};
