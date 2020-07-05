import express, { Request } from 'express';
import jwtCheck from '../config/auth'
import SightingService from '../services/sightings'

const router = express.Router();
const service = new SightingService();

router.get('/sightings', async (req, res, next) => {
    await service.getAllSightings(req)
        .then(sightings => res.status(200).send(sightings))
        .catch(err => {
            console.log("Error ", err)
            res.status(400).send(err)
        });
})

router.get('/sightings/:id', async (req, res, next) => {
    await service.getSighting(req.params.id)
        .then(sighting => res.status(200).send(sighting))
})

router.post('/sightings', async (req, res, next) => {
    await service.createSighting(req.body)
        .then((sighting) => res.status(200).send(sighting))
        .catch(err => res.status(400).send(err));
})

router.put('/sightings/:id', async (req, res, next) => {
    await service.updateSighting(req.params.id, req.body)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(400).send(err))
})

router.get("/api/external", jwtCheck, (_, res) => {
    res.send({ msg: "Access token validated." })
})

export default router;