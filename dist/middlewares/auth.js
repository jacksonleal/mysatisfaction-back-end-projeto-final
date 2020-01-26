"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//import jwt from 'jsonwebtoken';
//import config from 'config';
var _default = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return next();
  }

  ;
  jwt.verify(token, config.get('auth.key'), (err, decoded) => {
    req.decoded = decoded;
    next(err);
  });
};

exports.default = _default;