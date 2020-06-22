import mongoose from 'mongoose'
import * as logger from '../config/logger'

let db: mongoose.Connection = null;

export function initDb() {
    db = mongoose.createConnection(process.env.MONGO_URI ? process.env.MONGO_URI : 'localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    logger.info("Successfully created db connection.");
}

export function getDb() {
    if(db != null) {
        logger.error("Trying to initialize a db connection when one already exists.");
    }

}