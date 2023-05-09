import cors from "cors";
import express from "express";

import api from "./api";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "*" }));

app.use("/", api);

export default app;
