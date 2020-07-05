import express from 'express';
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

router.post('/sightings', jwtCheck, async (req: any, res, next) => {
    await service.createSighting(req.body, req.user.sub)
        .then((sighting) => res.status(200).send(sighting))
        .catch(err => {
            console.log("Error ", err)
            res.status(400).send(err)
        });
})

router.put('/sightings/:id', async (req, res, next) => {
    await service.updateSighting(req.params.id, req.body)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(400).send(err))
})

// routers.delete('/sightings/:id', async (req, res, next) => {

// })

router.get("/api/external", jwtCheck, (req: any, res) => {
    console.log("Request auth", req.user)
    res.send({ msg: "Access token validated." })
})

export default router;