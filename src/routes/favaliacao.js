import express from 'express';
import FavaliacaoController from '../controllers/favaliacao';
import Favaliacao from '../models/favaliacao';

const router = express.Router();
const favaliacaoController = new FavaliacaoController(Favaliacao);

router.get('/', (req, res) => favaliacaoController.get(req, res));
router.post('/', (req, res) => favaliacaoController.createFavaliacao(req, res));
router.get('/:id', (req, res) => favaliacaoController.getById(req, res));
router.get('/title/:title', (req, res) => favaliacaoController.getByTitle(req, res));
router.post('/:title/:stars', (req, res) => favaliacaoController.create(req, res));
router.put('/:id', (req, res) => favaliacaoController.update(req, res));
router.delete('/:id', (req, res) => favaliacaoController.remove(req, res));


export default router;