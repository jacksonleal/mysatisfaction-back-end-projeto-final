"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.get('/', (req, res) => res.send('Hello World!'));
const PORT = 3000;
app.listen(PORT, () => {
  console.log('Servidor rodando na localhost: PORTA: 3000');
});