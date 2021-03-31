const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let StudentSchema = new Schema({
    name: {type: String, require: true},
    regid: {type: Number, require: true},
    class: {type: String, require: true},
    gender: {type: String, require: true}

});

module.exports = mongoose.model('Student',StudentSchema);