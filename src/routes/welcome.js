import express from 'express';
import WelcomeController from '../controllers/welcome';
import Welcome from '../models/welcome';

const router = express.Router();
const welcomeController = new WelcomeController(Welcome);
router.get('/', (req, res) => welcomeController.get(req, res));
router.get('/:id', (req, res) => welcomeController.getById(req, res));
router.post('/:name', (req, res) => welcomeController.setByName(req, res));
router.put('/:id', (req, res) => welcomeController.update(req, res));
router.delete('/:id', (req, res) => welcomeController.remove(req, res));

export default router;
