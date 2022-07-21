const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

const v1CatRoute = require("./v1/routes/catRoute");

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/post", v1CatRoute);

app.listen(3001, () => {
  console.log("server running successfully");
});
