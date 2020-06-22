import Body from 'express'

import SharkSightingModel from '../models/sightings'
import * as logger from '../config/logger'

export default class SightingService {
    async getAllSightings(page?: number, pageSize?: number) {
        return SharkSightingModel.find({}).exec();
    }
    async createSighting(requestBody: any) {
        let sharkSighting = new SharkSightingModel(requestBody)
        await sharkSighting.save();
        // let sharkSighting = new SharkSightingModel({
        //     sightingDetails: null,
        //     sharkDetails: {
        //         type: "Great White", 
        //         size: 10,
        //         showedAggression: true
        //     },
        // });
        // logger.info("About to save sighting")
        // sharkSighting.save(function(err) {
        //     if(err) {
        //         logger.error(`Error saving shark sighting: ${err}`)
        //     }
        // });
        logger.info("Saved shark sighting");
    }
}