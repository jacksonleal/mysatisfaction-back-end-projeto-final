const express = require('express');
const WelcomeController = require('../controllers/welcome');
const Welcome = require('../models/welcome');

const router = express.Router();
const welcomeController = new WelcomeController(Welcome);
router.get('/', (req, res) => welcomeController.get(req, res));
router.get('/:id', (req, res) => welcomeController.getById(req, res));
router.post('/', (req, res) => welcomeController.create(req, res));
router.put('/:id', (req, res) => welcomeController.update(req, res));
router.delete('/:id', (req, res) => welcomeController.remove(req, res));

export default router;
