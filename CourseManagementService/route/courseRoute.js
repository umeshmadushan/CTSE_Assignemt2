const express = require('express');
const router = express.Router();
const courseController = require('../Controller/courseController');

// Routes for CRUD operations
router.post('/', courseController.createCourse);
router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
