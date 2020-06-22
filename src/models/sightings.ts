import mongoose from 'mongoose'
import { v4 as uuid } from 'uuid'

const Schema = mongoose.Schema;

const SharkDetailsSchema = new Schema({
    type: String,
    size: Number,
    showedAggression: { type: Boolean, required: true }
    // confidence: number
    // pictureLinks: string[]
})

const SharkSightingDetailsSchema = new Schema({
    city: String,
    date: String,
    time: String,
    crowdSize: Number,
    distanceFromShore: Number,
    additionalDetails: String
})

const SharkSightingSchema = new Schema({
    sightingDetails: { type: SharkSightingDetailsSchema, required: true },
    sharkDetails: { type: SharkDetailsSchema, required: true }
})

export default mongoose.model('SharkSighting', SharkSightingSchema)