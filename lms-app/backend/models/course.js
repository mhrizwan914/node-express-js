// Import Mongoose
const mongoose = require("mongoose");

const course_schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Fill Name"]
    },
    duration: {
        type: String,
        required: [true, "Please Fill Duration"]
    },
    fees: {
        type: String,
        required: [true, "Please Fill Fees"]
    }
});

module.exports = mongoose.model("course", course_schema);