// Create Express Server
const express = require("express");
const { read, readById, create, update, remove, searchWithPagination } = require("../controllers/students");
// Create Route
const route = express.Router();
// Get Method
route.get("/", read);
// Search With Pagination Method
route.get("/search", searchWithPagination);
// Get Method By ID
route.get("/:id", readById);
// Post Method
route.post("/", create);
// Put Method By ID
route.put("/:id", update);
// Delete Method By ID
route.delete("/:id", remove);

module.exports = route;