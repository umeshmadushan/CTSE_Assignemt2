const express = require("express");
const router = express.Router();
const studentController = require("../Controller/studentController");

// Routes for CRUD operations
router.post("/create", studentController.createStudent);
router.get("/get", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
