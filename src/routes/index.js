import express from 'express';
import productsRoute from './users';

const router = express.Router();

router.use('/users', productsRoute);
router.get('/', (req, res) => res.send('Hello World!'));

export default router;
