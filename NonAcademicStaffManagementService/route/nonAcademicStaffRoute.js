// nonAcademicStaffRoute.js

const express = require('express');
const router = express.Router();
const nonAcademicStaffController = require('../Controller/nonAcademicStaffController');

router.post('/', nonAcademicStaffController.createNonAcademicStaff);
router.get('/', nonAcademicStaffController.getAllNonAcademicStaff);
router.get('/:id', nonAcademicStaffController.getNonAcademicStaffById);
router.put('/:id', nonAcademicStaffController.updateNonAcademicStaff);
router.delete('/:id', nonAcademicStaffController.deleteNonAcademicStaff);

module.exports = router;
