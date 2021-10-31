const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Successful DB Connection"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 4000, () =>
  console.log(
    `Server has been started: http://localhost:${
      process.env.PORT ? process.env.PORT : 4000
    }`
  )
);
