"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _welcome = _interopRequireDefault(require("./welcome"));

var _users = _interopRequireDefault(require("./users"));

var _cforms = _interopRequireDefault(require("./cforms"));

var _login = _interopRequireDefault(require("./login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); //router.use('/login', loginRoute);


router.use('/cforms', _cforms.default);
router.use('/welcome', _welcome.default);
router.use('/users', _users.default);
router.get('/', (req, res) => res.send('by: jackson leal'));
var _default = router;
exports.default = _default;