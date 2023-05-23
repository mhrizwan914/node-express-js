// Import Mongoose
const mongoose = require("mongoose");

const teacher_schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Fill Name"]
    },
    course: {
        type: String,
        required: [true, "Please Fill Course"]
    },
    contact: {
        type: String,
        required: [true, "Please Fill Phone Number or Email Address"]
    }
});

module.exports = mongoose.model("teacher", teacher_schema);