class WelcomeController {
  constructor(Welcome) {
    this.Welcome = Welcome;
  }

  async get(req, res) {
    try {
      const welcome = await this.Welcome.find({});
      res.send(welcome);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const {
      params: { id }
    } = req;

    try {
      const welcome = await this.Welcome.find({ _id: id });
      res.send(welcome);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async create(req, res) {
    const welcome = new this.Welcome(req.body);
    try {
      await welcome.save();
      res.status(201).send(welcome);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.Welcome.updateOne({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async remove(req, res) {
    try {
      await this.Welcome.deleteOne({ _id: req.params.id });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

export default WelcomeController;
