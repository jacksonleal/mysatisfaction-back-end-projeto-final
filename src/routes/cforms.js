const express = require('express');
const CformsController = require('../controllers/cforms');
const Cforms = require('../models/cforms');

const router = express.Router();
const cformsController = new CformsController(Cforms);

router.get('/', (req, res) => cformsController.get(req, res));
router.get('/:id', (req, res) => cformsController.getById(req, res));
router.post('/', (req, res) => cformsController.create(req, res));
router.put('/:id', (req, res) => cformsController.update(req, res));
router.delete('/:id', (req, res) => cformsController.remove(req, res));


export default router;