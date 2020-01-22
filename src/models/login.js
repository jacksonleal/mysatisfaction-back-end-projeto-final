import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Login = mongoose.model('login', schema);

export default Login;