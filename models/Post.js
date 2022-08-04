const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    catItem: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
