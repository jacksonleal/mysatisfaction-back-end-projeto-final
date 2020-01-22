"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("../controllers/users"));

var _login = _interopRequireDefault(require("../models/login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const loginController = new _users.default(_login.default);
router.get('/:email/:password', (req, res) => loginController.getByEmailPass(req, res));
var _default = router;
exports.default = _default;