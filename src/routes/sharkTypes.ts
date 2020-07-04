import express from 'express';
import sharkTypes from '../data/sharkTypes.json'

const router = express.Router();

router.get('/sharkTypes', async (_, res, next) => {
  return res.status(200).send(sharkTypes.types);
})

export default router;