const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const serverless = require("serverless-http");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const noteRoutes = require("./api/routes/notes");
const userRoutes = require("./api/routes/users");

mongoose
  .connect(
    "mongodb+srv://wojtas:" +
      process.env.MONGO_ATLAS_PW +
      "@hackaton.vgtr5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//headers control
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(cors());

///routs handling request
app.use("/notes", noteRoutes);
app.use("/users", userRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
module.exports.handler = serverless(app);
