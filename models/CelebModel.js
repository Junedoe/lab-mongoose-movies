const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebSchema = new Schema({
    name: String,
    occupation: String,
    catchphrase: String
});

const CelebModel = mongoose.model('Home', CelebSchema);
module.exports = CelebModel;
