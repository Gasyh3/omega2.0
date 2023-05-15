require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

const database = require("./config/database");
const userRoute = require("./routes/user-route");
const categoryRoute = require("./routes/category-route");
const workRoute = require("./routes/work-route");
const marqueRoute = require("./routes/marque-route");
const portfolioRoute = require("./routes/portfolio-route");
const livredorRoute = require("./routes/livredor-route");
const postRoute = require("./routes/post-route");
const collectionponRoute = require("./routes/collectionpon-route");
const tatouageRoute = require("./routes/tatouage-route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/user", userRoute);
app.use("/api/category", categoryRoute);
app.use("/api/work", workRoute);
app.use("/api/marque", marqueRoute);
app.use("/api/portfolio", portfolioRoute);
app.use("/api/livredor", livredorRoute);
app.use("/api/post", postRoute);
app.use("/api/collectionpon", collectionponRoute);
app.use("/api/tatouage", tatouageRoute);

database.sync().then(() => console.log("database is ready to sync"));

module.exports = app;
