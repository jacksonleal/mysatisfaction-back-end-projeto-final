const mongoose = require('mongoose');
const config = require('config');

const mongodbUrl = config.get('database.mongoMLABUrl');

const connect = () =>
  mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

export default {
  connect,
  connection: mongoose.connection
};
