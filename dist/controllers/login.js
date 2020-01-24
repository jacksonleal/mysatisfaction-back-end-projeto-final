"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("config"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LoginController {
  constructor(Login) {
    this.Login = Login;
  }

  async get(req, res) {
    try {
      const login = await this.Login.find({});
      res.send(login);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const {
      params: {
        id
      }
    } = req;

    try {
      const Login = await this.Login.find({
        _id: id
      });
      res.send(login);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getByEmailPass(req, res) {
    const {
      params: {
        email,
        password
      }
    } = req;

    try {
      const login = await this.Login.find({
        email: email,
        password: password
      });
      res.send(login);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getByEmailPassPost(req, res) {
    const {
      params: {
        email,
        password
      }
    } = req;

    try {
      const login = await this.Login.find({
        email: email,
        password: password
      });
      if (params == login) res.status(200).send();
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async createLogin(req, res) {
    const {
      params: {
        email,
        password
      }
    } = req; //

    try {
      const login = new this.Login({
        email: email,
        password: password
      });
      await login.save();
      res.status(201).send(login);
    } catch (err) {
      res.status(422).send(err.message);
    } //

  }

}

var _default = LoginController;
exports.default = _default;