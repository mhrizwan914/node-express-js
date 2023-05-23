// Import Mongoose
const mongoose = require("mongoose");

const institute_schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Fill Name"]
    },
    address: {
        type: String,
        required: [true, "Please Fill Address"]
    },
    contact: {
        type: String,
        required: [true, "Please Fill Phone Number or Email Address"]
    }
});

module.exports = mongoose.model("institute", institute_schema);