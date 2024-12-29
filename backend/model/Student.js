const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema ({
    sname:{
        type: String,
        required: true
    },
    regno:{
        type: String,
    },
    dept:{
        type: String,
    },
    year:{
        type: String,
    },
    pno:{
        type: String,
    },
})

module.exports = mongoose.model('Student', studentSchema)