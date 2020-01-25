import express from 'express';
import UsersController from '../controllers/users';
import User from '../models/user';
import AuthService from '../services/auth';

const router = express.Router();
const usersController = new UsersController(User, AuthService);
router.get('/', (req, res) => usersController.get(req, res));
router.get('/:id', (req, res) => usersController.getById(req, res));
//router.get('/email/:email', (req, res) => usersController.getByEmail(req, res));
//router.get('/email/:email/:password', (req, res) => usersController.getByEmailPass(req, res));
//router.post('/:name/:email/:password/:role', (req, res) => usersController.createUser(req, res));
router.put('/:id', (req, res) => usersController.update(req, res));
router.delete('/:id', (req, res) => usersController.remove(req, res));
router.post('/authenticate', (req, res) => usersController.authenticate(req, res));
router.post('/', (req, res) => usersController.create(req, res));
export default router;
