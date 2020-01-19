import express from 'express';
import welcomeRoute from './welcome';
import usersRoute from './users';
import cformsRoute from './cforms';

const router = express.Router();

router.use('/cforms', cformsRoute);
router.use('/welcome', welcomeRoute);
router.use('/users', usersRoute);
router.get('/', (req, res) => res.send('Hello World!'));

export default router;
