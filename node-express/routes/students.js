// Import Express Server
const express = require("express");
// Create Route
const route = express.Router();
// Get
route.get("/", (request, response) => {
    response.status(200).json({ message: "Get All Students" });
});
// Get By ID
route.get("/:id", (request, response) => {
    // Define ID
    const requestID = request.params.id;
    response.status(200).json({ message: `Students Get Successfully ID is: ${requestID}` });
});
// Post
route.post("/", (request, response) => {
    response.status(201).json({ message: "Student Created Successfully" });
});
// Put
route.put("/:id", (request, response) => {
    // Define ID
    const requestID = request.params.id;
    response.status(200).json({ message: `Students Updated Successfully ID : ${requestID}` });
});
// Delete
route.delete("/:id", (request, response) => {
    // Define ID
    const requestID = request.params.id;
    response.status(200).json({ message: `Students Deleted Successfully ID : ${requestID}` });
});

module.exports = route;