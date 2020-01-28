"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _favaliacao = _interopRequireDefault(require("../controllers/favaliacao"));

var _favaliacao2 = _interopRequireDefault(require("../models/favaliacao"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const favaliacaoController = new _favaliacao.default(_favaliacao2.default);
router.get('/', (req, res) => favaliacaoController.get(req, res));
router.post('/', (req, res) => favaliacaoController.createFavaliacao(req, res));
router.get('/:id', (req, res) => favaliacaoController.getById(req, res));
router.get('/title/:title', (req, res) => favaliacaoController.getByTitle(req, res));
router.post('/:title/:stars', (req, res) => favaliacaoController.create(req, res));
router.put('/:id', (req, res) => favaliacaoController.update(req, res));
router.delete('/:id', (req, res) => favaliacaoController.remove(req, res));
var _default = router;
exports.default = _default;