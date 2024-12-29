const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let detailSchema = new Schema ({
    sname:{
        type: String,
        required: true
    },
    dob:{
        type: String,
    },
    pno:{
        type: String,
    },
    email:{
        type: String,
    },
    bg:{
        type: String,
    },
    fname:{
        type: String,
    },
    ocp:{
        type: String,
    },
    rel:{
        type: String,
    },
    caste:{
        type: String,
    },
    hscmark:{
        type: String,
    },
})

module.exports = mongoose.model('Detail', detailSchema)