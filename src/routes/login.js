import express from 'express';
import LoginController from '../controllers/users';
import Login from '../models/user';

const router = express.Router();
const loginController = new LoginController(Login);

router.get('/:email/:password', (req, res) => loginController.getByUserPass(req, res));

export default router;