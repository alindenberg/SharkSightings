import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const SharkDetailsSchema = new Schema({
    type: { type: String, required: true },
    size: { type: Number, required: true },
    showedAggression: { type: Boolean, required: true }
})

const SharkSightingDetailsSchema = new Schema({
    city: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    crowdSize: { type: Number, required: false },
    distanceFromShore: { type: Number, required: true },
    additionalDetails: { type: String, required: false }
})

const SharkSightingSchema = new Schema({
    sightingDetails: { type: SharkSightingDetailsSchema, required: true },
    sharkDetails: { type: SharkDetailsSchema, required: true }
})

export default mongoose.model('SharkSighting', SharkSightingSchema)