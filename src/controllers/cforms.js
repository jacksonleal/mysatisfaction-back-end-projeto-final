class CformsController {
  constructor(Cforms) {
    this.Cforms = Cforms;
  }

  async get(req, res) {
    try {
      const cforms = await this.Cforms.find({});
      res.send(cforms);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const {
      params: { id }
    } = req;

    try {
      const cforms = await this.Cforms.find({ _id: id });
      res.send(cforms);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async create(req, res) {
    const {
      params: { title, description }
    } = req;

    try {
      const cforms = await this.Cforms.find({
        title: title,
        description: description
      });
      res.send(cforms);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.Cforms.updateOne({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async remove(req, res) {
    try {
      await this.Cforms.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

}

export default CformsController;