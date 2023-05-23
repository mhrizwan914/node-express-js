// Create Express Server
const express = require("express");
// Configure .env
require("dotenv").config();
// Import Middleware For Error Handler
const error_handler = require("./middleware/error_handler");
// Import Student Route
const student_route = require("./routes/student");
// Import Teacher Route
const teacher_route = require("./routes/teacher");
// Import Institute Route
const institute_route = require("./routes/institute");
// Import Course Route
const course_route = require("./routes/course");

// Wrap Server in App
const app = express();
// Use Middleware For JSON
app.use(express.json());

// Configure Student Route
app.use("/api/students", student_route);
// Configure Teacher Route
app.use("/api/teachers", teacher_route);
// Configure Institute Route
app.use("/api/institutes", institute_route);
// Configure Course Route
app.use("/api/courses", course_route);

// Use Middleware For Error Handler
app.use(error_handler);

// Define Server Port
const port = process.env.PORT || 3000;

// Listening Server
app.listen(port, () => {
    console.log(`Server is Runing Port ${port}`);
});