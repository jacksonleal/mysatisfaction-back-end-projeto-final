"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = new _mongoose.default.Schema({
  title: {
    type: String,
    required: true
  },
  stars: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

const Favaliacao = _mongoose.default.model('favaliacao', schema);

var _default = Favaliacao;
exports.default = _default;