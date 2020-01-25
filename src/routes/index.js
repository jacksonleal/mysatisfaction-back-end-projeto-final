import express from 'express';
import welcomeRoute from './welcome';
import usersRoute from './users';
import cformsRoute from './cforms';
//import loginRoute from './login'

const router = express.Router();
//commit 
//router.use('/login', loginRoute);
router.use('/cforms', cformsRoute);
router.use('/welcome', welcomeRoute);
router.use('/users', usersRoute);
router.get('/', (req, res) => res.send('Equipe: Mysatisfaction: Joé Jackson; Ronan; Vanderlan'));

export default router;
