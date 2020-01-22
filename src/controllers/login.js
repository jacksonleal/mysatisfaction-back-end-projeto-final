class LoginController {
  constructor(Login) {
    this.Login = Login;
  }

  async validaLogin(req, res) {
    const {
      params: { email, password } } = req;

    try {
      const login = await this.Login.find({
        email: email,
        password: password
      });
      if (login)
        res.send('ok');
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

}

export default LoginController;