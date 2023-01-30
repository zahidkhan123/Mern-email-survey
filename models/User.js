const mongoose = require('mongoose');
const {Schema} = mongoose
   
const userSchema = new Schema({
    google_id: String  
})

mongoose.model('user',userSchema)