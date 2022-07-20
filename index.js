const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

app.use(express.json());
app.use(cors());
app.use(helmet());

app.listen(3001, () => {
  console.log("server running successfully");
});
