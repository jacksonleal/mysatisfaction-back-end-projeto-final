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

  async create(req, res) {
    const cforms = new this.Cforms(req.body);
    try {
      await cforms.save();
      res.status(201).send(cforms);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

}

export default CformsController;