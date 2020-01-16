import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/usuarios', (req, res) => res.send([{
  nome: 'Default usuario',
  email: 'leal@leal.com',
  senha: '1234'
}]));

export default app;
