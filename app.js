const cors = require("cors");
const express = require("express");
const api = require("./api").default;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "*" }));

app.use("/", api);

exports.default = app;
