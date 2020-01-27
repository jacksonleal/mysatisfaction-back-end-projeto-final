import express from 'express';
import CformsController from '../controllers/cforms';
import Cforms from '../models/cforms';

const router = express.Router();
const cformsController = new CformsController(Cforms);

router.get('/', (req, res) => cformsController.get(req, res));
router.post('/', (req, res) => cformsController.createCforms(req, res));
router.get('/:id', (req, res) => cformsController.getById(req, res));
router.get('/title/:title', (req, res) => cformsController.getByTitle(req, res));
router.post('/:title/:description', (req, res) => cformsController.create(req, res));
router.put('/:id', (req, res) => cformsController.update(req, res));
router.delete('/:id', (req, res) => cformsController.remove(req, res));


export default router;