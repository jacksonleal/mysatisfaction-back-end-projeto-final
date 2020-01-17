import mongoose from 'mongoose';

const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/mysatisfactionDB';

const connect = () =>
  mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

export default {
  connect,
  connection: mongoose.connection
};
