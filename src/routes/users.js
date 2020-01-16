import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send([{
  nome: 'Default usuario',
  email: 'leal@leal.com',
  senha: '1234'
}]));

export default router;