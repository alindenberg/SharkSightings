import SharkSightingModel from '../models/sightings'
import * as logger from '../config/logger';

export default class SightingService {
    async getAllSightings(page?: number, pageSize?: number) {
        return SharkSightingModel.find().exec();
    }
    async getSighting(id: string) {
        return SharkSightingModel.findById(id).exec();
    }
    async createSighting(requestBody: Body) {
        return await (new SharkSightingModel(requestBody)).save()
        .catch(err => {
            logger.error(`Error occured while creating sighting: ${err.message}`)
            throw err;
        })
    }
    async updateSighting(id: string, sighting: any) {
        await SharkSightingModel.findById(id).then(async doc => {
            doc = new SharkSightingModel(sighting)
            doc._id = id;
            doc.isNew = false
            await doc.save();
        })
        .then(() => logger.info(`Successfully updated sighting ${id}.`))
        .catch((err) => {
            logger.error(`Error occurred while updating sighting ${id}. ${err.message}`)
            throw err
        })
    }
}