function addMostSearched() {}

function getAllCatBreeds() {
  return fetch("http://localhost:3001/api/post")
    .then((response) => response.json())
    .catch((error) => console.log("could not fetch data", error));
}

function getItemImages(catItem) {
  return fetch(`http://localhost:3001/api/post/${catItem.id}`)
    .then((response) => response.json())
    .catch((error) => console.log("couldnot fetch given id images", error));
}

function postCatItem(id) {
  return fetch("http://localhost:3001/api/post", {
    method: "POST",
    body: JSON.stringify({ id: id }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  // .then((response) => response.json())
  // .catch((error) => console.log("couldnot fetch given id images", error));
}

const catService = {
  addMostSearched,
  getAllCatBreeds,
  getItemImages,
  postCatItem,
};

export default catService;
