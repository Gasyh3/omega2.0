require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
