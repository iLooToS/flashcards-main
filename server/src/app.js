const express = require("express");
const removeHeaders = require("../middleware/removeHeaders");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const app = express();

const indexRouter = require("../routes/index.routes");

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(removeHeaders);
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", indexRouter);

module.exports = app;
