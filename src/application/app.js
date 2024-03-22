import express from "express";
import cors from 'cors';
import { connectDatabase } from "./database.js";
import { apiPublic } from "../routes/api-public.js";
import { errorMiddleware } from "../middlewares/error-middleware.js";
import config from '../../configs/config.js';

connectDatabase();

export const app = express();
app.use(express.json());
app.use(cors());

app.use(apiPublic);

app.use(errorMiddleware)

app.listen(config.PORT, () => {
    console.log('Listening on port: ', config.PORT);
});