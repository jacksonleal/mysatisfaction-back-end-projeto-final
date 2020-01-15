<<<<<<< HEAD
const mongoose = require('mongoose');
const config = require('./config')
mongoose.Promise = Promise;
const confiretion = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

exports.connect = () => mongoose.connect(config.MONGODB_URL, confiretion);
=======

async function connect () { 

}

module.exports = connect;
>>>>>>> 34ab948b6d0a98c063ec0aa1b6a5deb4d29422d9
