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

function postCatItem(id, name, url, description) {
  return fetch("http://localhost:3001/api/mostSearched", {
    method: "POST",
    body: JSON.stringify({
      id: id,
      name: name,
      url: url,
      description: description,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

function getMostSearch() {
  return fetch("http://localhost:3001/api/mostSearched")
    .then((response) => response.json())
    .catch((error) => console.log("couldnot fetch most searched item", error));
}

const catService = {
  addMostSearched,
  getAllCatBreeds,
  getItemImages,
  postCatItem,
  getMostSearch,
};

export default catService;
