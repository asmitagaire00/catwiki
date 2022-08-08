const Post = require("../models/Post");

const getMostSearchedItem = async () => {
  try {
    const mostSearchedItems = await Post.find().sort({ count: -1 }).limit(10);
    return mostSearchedItems;
  } catch (error) {
    throw error;
  }
};

const postMostSearchedItem = async (newCatItem) => {
  const alreadyExitedItem = await Post.findOne({ catItem: newCatItem.catItem });
  if (alreadyExitedItem) {
    const updatedItemCount = await Post.findOneAndUpdate(
      { catItem: alreadyExitedItem.catItem },
      {
        count: (
          parseInt(alreadyExitedItem.count) + parseInt(newCatItem.count)
        ).toString(),
      },
      { upsert: false }
    );
    await Post.save();
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
