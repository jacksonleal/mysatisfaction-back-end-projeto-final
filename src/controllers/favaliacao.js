class FavaliacaoController {
  constructor(Favaliacao) {
    this.Favaliacao = Favaliacao;
  }

  async get(req, res) {
    try {
      const favaliacao = await this.Favaliacao.find({});
      res.send(favaliacao);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const {
      params: { id }
    } = req;

    try {
      const favaliacao = await this.Favaliacao.find({ _id: id });
      res.send(favaliacao);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getByTitle(req, res) {
    const {
      params: { title }
    } = req;

    try {
      const favaliacao = await this.Favaliacao.find({ title: title });
      const description = favaliacao[0].description;
      res.send(description);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async create(req, res) {
    const { params: { title, description } } = req;
    //
    try {
      const favaliacao = new this.Favaliacao({
        title: title,
        description: description
      });
      await favaliacao.save();
      res.status(201).send(favaliacao);
    } catch (err) {
      res.status(422).send(err.message);
    }
    //
  }

  async createFavaliacao(req, res) {
    const favaliacao = new this.Favaliacao(req.body);

    try {
      await favaliacao.save();
      res.status(201).send(favaliacao);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.Favaliacao.updateOne({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async remove(req, res) {
    try {
      await this.Favaliacao.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

}

export default FavaliacaoController;