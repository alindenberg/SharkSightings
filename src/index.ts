import dotenv from "dotenv"
import express from "express"

import winstonLogger, * as logger from './config/logger'
import { initDb } from './config/database'
import sightingsRouter from "./routes/sightings"

dotenv.config();
initDb();

const app = express();
const port = process.env.SERVER_PORT; // default port to listen

app.use(express.json())
app.use(winstonLogger);
app.use(sightingsRouter)

// start the Express server
app.listen( port, () => {
    logger.info(`server started at http://localhost:${ port }`);
} );