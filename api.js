const express = require("express");

const controllers = require("./controller");

const api = express.Router();

api.get("/", controllers.getController);

api.post("/", controllers.postController);

exports.default = api;
