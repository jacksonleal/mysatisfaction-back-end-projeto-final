import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String
});
const User = mongoose.model('User', schema);

export default User;
