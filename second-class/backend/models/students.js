const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
});

const model = mongoose.model("students", studentsSchema);

module.exports = model;