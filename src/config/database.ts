import mongoose from 'mongoose'
import * as logger from '../config/logger'

let db: typeof mongoose = null;

export async function initDb() {
    db = await mongoose.connect(process.env.MONGO_URI ? process.env.MONGO_URI : 'mongodb://localhost:27017/sharkSightings', {
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