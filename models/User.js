const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  google_id: String,
  credits: {
    type: Number,
    default: 0,
  },
});

mongoose.model('users', userSchema);
