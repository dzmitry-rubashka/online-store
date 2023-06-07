import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT;
const host = process.env.DB_HOST;

app.listen(port, () => console.log(`Listening on http://${host}:${port}`));
