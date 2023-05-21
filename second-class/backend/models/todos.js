const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

const model = mongoose.model("todos", schema);

exports.module = model;