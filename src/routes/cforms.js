import express from 'express';
import CformsController from '../controllers/cforms';
import Cforms from '../models/cforms';

const router = express.Router();
const cformsController = new CformsController(Cforms);
router.get('/', (req, res) => cformsController.get(req, res));
router.post('/', (req, res) => cformsController.create(req, res));

export default router;