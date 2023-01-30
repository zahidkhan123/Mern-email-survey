const mongoose = require('mongoose');
const keys = require('../config/keys');

const uri = keys.mongooseURI
mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
  });
module.exports={
    connection
}
