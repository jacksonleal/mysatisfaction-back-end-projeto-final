// model de acordo com o banco de dados escolhido
const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

const User = mongoose.model('User', schema);


module.exports = User;
