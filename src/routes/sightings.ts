import express from 'express';
import jwtCheck from '../config/auth'
import SightingService from '../services/sightings'

const router = express.Router();
const service = new SightingService();

router.get('/sightings', async (req, res, next) => {
    await service.getAllSightings(req)
        .then(sightings => res.status(200).send(sightings))
        .catch(err => res.status(400).send(format_error(err)));
})

router.get('/sightings/:id', async (req, res, next) => {
    await service.getSighting(req.params.id)
        .then(sighting => res.status(200).send(sighting))
        .catch(err => res.status(400).send(format_error(err)))
})

router.post('/sightings', jwtCheck, async (req: any, res, next) => {
    await service.createSighting(req.body, req.user.sub)
        .then((sighting) => res.status(200).send(sighting))
        .catch(err => res.status(400).send(format_error(err)));
})

router.put('/sightings/:id', jwtCheck, async (req, res, next) => {
    await service.updateSighting(req.params.id, req.body)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(400).send(format_error(err)))
})

router.delete('/sightings/:id', jwtCheck, async (req: any, res, next) => {
    await service.deleteSighting(req.params.id, req.user.sub)
        .then(() => res.sendStatus(204))
        .catch(err => res.status(400).send(format_error(err)))
})

router.get("/api/external", (req: any, res) => {
    console.log("Request auth", req.user)
    res.send({ msg: "Access token validated." })
})

function format_error(err: Error) {
    return { error: err.message }
}
export default router;