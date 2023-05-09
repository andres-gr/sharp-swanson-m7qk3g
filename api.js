import express from "express";

import { getController, postController } from "./controller";

const api = express.Router();

api.get("/", getController);

api.post("/", postController);

export default api;
