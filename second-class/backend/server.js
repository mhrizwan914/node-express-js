// Import Server
const express = require("express");

// Wrap Server in App
const app = express();

// Import .env Config
require("dotenv").config();

// Import Mongoose
const mongoose = require("mongoose");

// Middleware
app.use(express.json());

// Admin Route Request
app.use("/api/admin", require("./routes/admin"));

// Students Route Request
app.use("/api/students", require("./routes/students"));

// Teachers Route Request
app.use("/api/teachers", require("./routes/teachers"));

// Todos Route Request
app.use("/api/todos", require("./routes/todos"));

// Connect Mongose
mongoose.connect(process.env.CONNECTION_STRING).then(() => {
    // Listen Serve Port
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is Listening on Port ${port}`);
    });
    console.log("Database is Connected");
}).catch(() => {
    console.log("Database is not Connected");
})