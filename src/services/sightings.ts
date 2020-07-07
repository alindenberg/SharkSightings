import SharkSightingModel from '../models/sightings'
import * as logger from '../config/logger';

export default class SightingService {
    async getAllSightings(req: any) {
        let filter: any = {
        }
        if (req.query.cities != null) {
            filter["sightingDetails.city"] = { $in: req.query.cities.split(";") }
        }
        if (req.query.sharkTypes != null) {
            filter["sharkDetails.type"] = { $in: req.query.sharkTypes.split(";") }
        }
        return SharkSightingModel.find(filter).exec();
    }
    async getSighting(id: string) {
        return SharkSightingModel.findById(id).exec();
    }
    async createSighting(requestBody: any, userId: String) {
        requestBody.author = userId
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
    async deleteSighting(id: string, userId: string) {
        return await SharkSightingModel.findById(id).then((doc: any) => {
            if (doc.author != userId) {
                throw new Error("Not allowed to delete a sighting you are not the author of.")
            } else {
                doc.remove();
            }
        }).catch(err => {
            logger.error(`Error occurred while deleting sighting ${id}. ${err.message}`)
            throw err;
        })
    }
}