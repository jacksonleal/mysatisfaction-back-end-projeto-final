import jwt from 'jsonwebtoken';
import config from 'config';
import bcrypt from 'bcrypt';

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
      params: { id }
    } = req;

    try {
      const Login = await this.Login.find({ _id: id });
      res.send(login);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getByEmailPass(req, res) {
    const {
      params: { email, password }
    } = req;

    try {
      const login = await this.Login.find({
        email: email,
        password: password
      });
      res.sendStatus(200);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async createLogin(req, res) {
    const { params: { email, password } } = req;
    //
    try {
      const login = new this.Login({
        email: email,
        password: password
      });
      await login.save();
      res.status(201).send(login);
    } catch (err) {
      res.status(422).send(err.message);
    }
    //
  }

}

export default LoginController;
