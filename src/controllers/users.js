class UsersController {
  constructor(user) {
    this.User = user;
  }

  async get() {
    try {
      //consulta usuário no banco de dados
      return await this.User.find({});
    } catch (err) {
      throw new Error(err);
    }
  }

  async getById(id) {
    try {
      return await this.User.find({_id: id});
      return 'usuario';
    } catch (err) {
      throw new Error(err);
    }
  }

  async create(userDTO) {
    try {
      const user = await new this.User(userDTO);
      user.save();
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
      return this.User.deleteOne({ _id: id });
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = UsersController;
