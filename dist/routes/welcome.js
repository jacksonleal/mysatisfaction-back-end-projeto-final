"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _welcome = _interopRequireDefault(require("../controllers/welcome"));

var _welcome2 = _interopRequireDefault(require("../models/welcome"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const welcomeController = new _welcome.default(_welcome2.default);
router.get('/', (req, res) => welcomeController.get(req, res));
router.get('/:id', (req, res) => welcomeController.getById(req, res));
router.post('/:name', (req, res) => welcomeController.setByName(req, res));
router.put('/:id', (req, res) => welcomeController.update(req, res));
router.delete('/:id', (req, res) => welcomeController.remove(req, res));
var _default = router;
exports.default = _default;