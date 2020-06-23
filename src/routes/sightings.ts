import express from 'express';

import * as logger from '../config/logger'
import SightingService from '../services/sightings'

const router = express.Router();
const service = new SightingService();

router.get('/sightings', async (req, res, next) => {
    await service.getAllSightings().then(sightings => {
        res.status(200).send(sightings)
    }).catch(err => {
        res.status(400).send(err)
    });
})

router.get('/sightings/:id', async (req, res, next) => {
    await service.getSighting(req.params.id).then(sighting => {
        res.status(200).send(sighting);
    })
})

router.post('/sightings', async (req, res, next) => {
    await service.createSighting(req.body).then(() => res.sendStatus(200)).catch(err => {
        logger.error(err)
        res.status(400).send(err)
    });
})

router.put('/sightings/:id', async (req, res, next) => {
    await service.updateSighting(req.params.id, req.body).then(() => res.sendStatus(200)).catch(err => {
        logger.error(err)
        res.status(400).send(err)
    })
})

export default router;