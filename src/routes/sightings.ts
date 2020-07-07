import express from 'express';
import SightingService from '../services/sightings'

const router = express.Router();
const service = new SightingService();

router.get('/sightings', async (req, res, next) => {
    await service.getAllSightings(req)
        .then(sightings => res.status(200).send(sightings))
        .catch(err => res.status(400).send(err.message));
})

router.get('/sightings/:id', async (req, res, next) => {
    await service.getSighting(req.params.id)
        .then(sighting => res.status(200).send(sighting))
        .catch(err => res.status(400).send(err.message))
})

router.post('/sightings', async (req: any, res, next) => {
    await service.createSighting(req.body, req.user.sub)
        .then((sighting) => res.status(200).send(sighting))
        .catch(err => res.status(400).send(err.message));
})

router.put('/sightings/:id', async (req, res, next) => {
    await service.updateSighting(req.params.id, req.body)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(400).send(err.message))
})

router.delete('/sightings/:id', async (req: any, res, next) => {
    await service.deleteSighting(req.params.id, req.user.sub)
        .then(() => res.sendStatus(204))
        .catch(err => res.status(400).send(err.message))
})

router.get("/api/external", (req: any, res) => {
    console.log("Request auth", req.user)
    res.send({ msg: "Access token validated." })
})

export default router;