const mongoose = require('mongoose');
const config = require('./config')
mongoose.Promise = Promise;
const confiretion = {
  useNewUrlParser: true
}

module.connect = () => mongoose.connect(config.MONGODB_URL, confiretion);
