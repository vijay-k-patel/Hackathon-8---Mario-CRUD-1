const mongoose = require('mongoose');

//  Your code goes here
const marioSchema = new mongoose.Schema({
    name: String,
    weight: Number
});
const marioModel =  mongoose.model('marioChar', marioSchema);
module.exports = marioModel;