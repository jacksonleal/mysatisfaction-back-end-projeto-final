import express from 'express';
import welcomeRoute from './welcome';
import usersRoute from './users';

const router = express.Router();

router.use('/fhome', welcomeRoute);
router.use('/users', usersRoute);
router.get('/', (req, res) => res.send('Hello World!'));

export default router;
