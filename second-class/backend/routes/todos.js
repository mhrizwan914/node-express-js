// Import Server
const express = require("express");
const { read, readById, create, update, remove } = require("../controllers/todos");

// Create Route
const route = express.Router();

// Get & Post Request
route.get("/", read).post("/", create);
// Get By Id, Put & Delete Request
route.get("/:id", readById).put("/:id", update).delete("/", remove);

// Export Route
module.exports = route;