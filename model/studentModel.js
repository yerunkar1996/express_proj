const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    Name : {type: String, required: true},
    Email : {type: String, required: true},
    Age : Number,
    MobileNo : Number,
    Place : String
})

module.exports = mongoose.model('students', studentSchema)