import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  stars: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

//fiz td sozinho by jack

const Favaliacao = mongoose.model('favaliacao', schema);

export default Favaliacao;