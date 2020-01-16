import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Servidor rodando na localhost: PORTA: 3000');
});