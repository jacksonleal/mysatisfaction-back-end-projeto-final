import express from 'express';
import userRoute from './users'

const router = express.Router();

router.use('/users', userRoute);
router.get('/', (req, res) => res.send('Hello World!'));

export default router;