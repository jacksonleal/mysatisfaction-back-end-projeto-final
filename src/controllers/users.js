class UsersController {
  constructor() {
  }

  async get() {
    try {
      //consulta usuário no banco de dados
      return 'usuario';
    } catch (err) {
      throw new Error(err);
    }
  }

  async getById(id) {
    try {
       //consulta usuário no banco de dados
      return 'usuario';
    } catch (err) {
      throw new Error(err);
    }
  }

  async create(userDTO) {
    try {
      // salva userDTO no banco de dados
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id, userDTO) {
    try {
      // alterar usuario com dados do userDTO no banco de dados
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(id) {
    try {
      // remove usuario do id
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = UsersController;
