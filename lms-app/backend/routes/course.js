// Create Express Server
const express = require("express");
const { readAll, readById, create, update, remove } = require("../controllers/course");

// Create Routes
const router = express.Router();

router.get("/", readAll);
router.get("/:id", readById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;