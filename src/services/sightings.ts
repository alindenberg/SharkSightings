import Body from 'express'

import SharkSightingModel from '../models/sightings'
import * as logger from '../config/logger'

export default class SightingService {
    async getAllSightings(page?: number, pageSize?: number) {
        return SharkSightingModel.find().exec();
    }
    async getSighting(id: string) {
        return SharkSightingModel.findById(id).exec();
    }
    async createSighting(requestBody: Body) {
        await (new SharkSightingModel(requestBody)).save();
    }
    async updateSighting(id: string, requestBody: Body) {
        let updatedSighting = new SharkSightingModel(requestBody);
        updatedSighting._id = id;
        updatedSighting.isNew = false;
        await updatedSighting.save();
    }
}