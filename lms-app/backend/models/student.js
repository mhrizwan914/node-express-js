// Import Mongoose
const mongoose = require("mongoose");

const student_schema = mongoose.Schema({
    fName: {
        type: String,
        required: [true, "Please Fill First Name"]
    },
    lName: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Please Fill Email Address"]
    },
    phone: {
        type: String,
        required: [true, "Please Fill Phone Number"]
    },
    password: {
        type: String,
        required: [true, "Please Fill Pasword"]
    }
});

module.exports = mongoose.model("student", student_schema);