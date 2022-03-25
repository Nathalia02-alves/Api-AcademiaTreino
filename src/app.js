import express from "express";
import treinosController from "./controller/treinosController.js"
import database from "./database/sqlite-db.js";

const app = express();
app.use(express.json());

treinosController(app, database)

export default app;