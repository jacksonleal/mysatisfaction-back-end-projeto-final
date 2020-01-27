"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cforms = _interopRequireDefault(require("../controllers/cforms"));

var _cforms2 = _interopRequireDefault(require("../models/cforms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const cformsController = new _cforms.default(_cforms2.default);
router.get('/', (req, res) => cformsController.get(req, res));
router.post('/', (req, res) => cformsController.createCforms(req, res));
router.get('/:id', (req, res) => cformsController.getById(req, res));
router.get('/title/:title', (req, res) => cformsController.getByTitle(req, res));
router.post('/:title/:description', (req, res) => cformsController.create(req, res));
router.put('/:id', (req, res) => cformsController.update(req, res));
router.delete('/:id', (req, res) => cformsController.remove(req, res));
var _default = router;
exports.default = _default;