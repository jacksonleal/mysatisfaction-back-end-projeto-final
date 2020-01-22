import express from 'express';
import LoginController from '../controllers/login';
import Login from '../models/login';

const router = express.Router();
const loginController = new LoginController(Login);

router.get('/:email/:password', (req, res) => loginController.validaLogin(req, res));

export default router;