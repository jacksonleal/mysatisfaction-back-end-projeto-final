"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _util = _interopRequireDefault(require("util"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hashAsync = _util.default.promisify(_bcrypt.default.hash);

const schema = new _mongoose.default.Schema({
  name: String,
  email: String,
  password: String,
  role: String
});
schema.pre('save', async function (next) {
  if (!this.password || !this.isModified('password')) {
    return next();
  }

  try {
    //const hashedPassword = await hashAsync(this.password, 10);
    this.password = this.password;
  } catch (error) {
    next(err);
  }
});
schema.set('toJSON', {
  transform: (doc, ret, options) => ({
    _id: ret._id,
    name: ret.name,
    email: ret.email,
    role: ret.role
  })
});

const User = _mongoose.default.model('User', schema);

var _default = User;
exports.default = _default;