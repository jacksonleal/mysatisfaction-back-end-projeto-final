"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("../controllers/users"));

var _user = _interopRequireDefault(require("../models/user"));

var _auth = _interopRequireDefault(require("../services/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const usersController = new _users.default(_user.default, _auth.default);
router.get('/', (req, res) => usersController.get(req, res));
router.get('/:id', (req, res) => usersController.getById(req, res));
router.get('/login/:email/:password', (req, res) => usersController.getByEmailPass(req, res));
router.get('/email/:email', (req, res) => usersController.getByEmail(req, res));
router.get('/login/:email', (req, res) => usersController.getByEmailLogin(req, res)); //router.get('/email/:email/:password', (req, res) => usersController.getByEmailPass(req, res));
//router.post('/:name/:email/:password/:role', (req, res) => usersController.createUser(req, res));

router.put('/:id', (req, res) => usersController.update(req, res));
router.delete('/:id', (req, res) => usersController.remove(req, res));
router.post('/authenticate', (req, res) => usersController.authenticate(req, res));
router.post('/', (req, res) => usersController.create(req, res));
var _default = router;
exports.default = _default;