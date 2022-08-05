const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

const v1CatRoute = require("./v1/routes/catRoute");
const v1MostSearchedRoute = require("./v1/routes/mostSearchedRoute");
const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error in connecting databases", err));

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/post", v1CatRoute);
app.use("/api/mostSearched", v1MostSearchedRoute);

app.listen(3001, () => {
  console.log("server running successfully");
});
