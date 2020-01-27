"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
      params: {
        id
      }
    } = req;

    try {
      const cforms = await this.Cforms.find({
        _id: id
      });
      res.send(cforms);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getByTitle(req, res) {
    const {
      params: {
        title
      }
    } = req;

    try {
      const cforms = await this.Cforms.find({
        title: title
      });
      const description = cforms[0].description;
      res.send(description);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async create(req, res) {
    const {
      params: {
        title,
        description
      }
    } = req; //

    try {
      const cforms = new this.Cforms({
        title: title,
        description: description
      });
      await cforms.save();
      res.status(201).send(cforms);
    } catch (err) {
      res.status(422).send(err.message);
    } //

  }

  async createCforms(req, res) {
    const cforms = new this.Cforms(req.body);

    try {
      await cforms.save();
      res.status(201).send(cforms);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async update(req, res) {
    try {
      await this.Cforms.updateOne({
        _id: req.params.id
      }, req.body);
      res.sendStatus(200);
    } catch (err) {
      res.status(422).send(err.message);
    }
  }

  async remove(req, res) {
    try {
      await this.Cforms.deleteOne({
        _id: req.params.id
      });
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

}

var _default = CformsController;
exports.default = _default;