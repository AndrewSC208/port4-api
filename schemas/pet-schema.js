const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const PetSchema = new Schema({
  sender:   { type: String, required: true },
  email:    { type: String, required: true },
  subject:  { type: String, required: true },
  message:  { type: String, required: true },
  funFact:  { type: String },
});


module.exports = mongoose.model('Pet', PetSchema);
