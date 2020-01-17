import express from 'express';
import UsersController from '../controllers/users';
import User from '../models/user';

const router = express.Router();
const usersController = new UsersController(User);
router.get('/', (req, res) => usersController.get(req, res));

export default router;
