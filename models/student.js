const  mongoose = require('mongoose');

// create schema
const studentSchema = mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    gender : String,
    location : String,
    photo : String
},
{
    timestamps : true
})

// module exports
module.exports = mongoose.model('student', studentSchema);