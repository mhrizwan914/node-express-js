const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(connect.connection.name, "Database is Connected Successfully");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = dbConnection;