const mongoose = require("mongoose");

const newSchema = mongoose.Schema(
    {
        fname: {
            type: String,
            required: [true, "Please Add Your First Name"]
        },
        lname: {
            type: String,
        },
        email: {
            type: String,
            required: [true, "Please Add Your Valid Email Address"]
        },
        phone: {
            type: Number,
            required: [true, "Please Add Your Valid Phone Number"]
        },
        password: {
            type: String,
            required: [true, "Please Add Your Password"]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("student", newSchema);