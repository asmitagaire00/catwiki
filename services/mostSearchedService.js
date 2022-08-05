const Post = require("../models/Post");

const getMostSearchedItem = async () => {
  try {
    const mostSearchedItems = await Post.find()
      .sort({ createdAt: -1 })
      .limit(10);
    return mostSearchedItems;
  } catch (error) {
    throw error;
  }
};

const postMostSearchedItem = async (newCatItem) => {
  const alreadyExitedItem = await Post.findOne({ catItem: newCatItem.catItem });
  if (alreadyExitedItem) {
    throw {
      status: 400,
      message: "given catItem already exist",
    };
  }
  try {
    const catItem = new Post(newCatItem);
    await catItem.save();
    return catItem;
  } catch (error) {
    throw error;
  }
};

module.exports = { postMostSearchedItem, getMostSearchedItem };
