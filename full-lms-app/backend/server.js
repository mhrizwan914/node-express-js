// Create Express Server
const express = require("express");
// Custom Error Handler Middleware
const errorHandler = require("./middleware/errorHandler");
// Import Database Connection
const dbConnection = require("./configs/dbConnection");
// Import Cors
const cors = require("cors");
// // Config .env Variables
require("dotenv").config();
// Wrap Express Server in App
const app = express();
// Cors Middleware
app.use(cors());
// Create Server Port
const port = process.env.PORT || 3001;
// Request Response Middleware
app.use(express.json());
// Students Routes
app.use("/api/students", require("./routes/students"));
// Error Handling Middleware
app.use(errorHandler);
// Listen App for Port
app.listen(port, () => {
    dbConnection();
    console.log(`Server is runing on Port ${port}`);
});