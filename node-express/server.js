// Import Express Server
const express = require("express");
// Import .env Configuration
require("dotenv").config();
// Wrape Express Server in App
const app = express();
// Request & Response JSON Middleware
app.use(express.json());
// Set Students
app.use("/api/students", require("./routes/students"));
// Define Server Port
const port = process.env.PORT || 3001;
// Listen Server
app.listen(port, () => {
    console.log(`Server is Runing Port ${port}`);
});