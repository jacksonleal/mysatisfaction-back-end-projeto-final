const mongoose = require('mongoose');
const config = require('./config')
mongoose.Promise = Promise;
const confiretion = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

exports.connect = () => mongoose.connect(config.MONGODB_URL, confiretion);
