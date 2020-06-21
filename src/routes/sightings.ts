import express from 'express';
import { SharkSighting } from '../models/sightings'

const router = express.Router();

let sighting: SharkSighting = {
    id: "1234",
    sightingDetails: null,
    sharkDetails: {
        type: "Great White",
        size: 10,
        showedAggression: true
    },
};
let pagedSightingList: SharkSighting[] = [sighting];

router.get('/sightings', (req, res, next) => {
    res.status(200).send(pagedSightingList)
})

router.get('/sightings/:id', (req, res, next) => {
    // todo - everything
    res.status(200).send(sighting)
})

router.get('/sightings?city=:city', (req, res, next) => {

})

router.post('/sightings', (req, res, next) => {
    
})

router.put('/sightings:id', (req, res, next) => {
    // replace entire sighting object
})

export default router;