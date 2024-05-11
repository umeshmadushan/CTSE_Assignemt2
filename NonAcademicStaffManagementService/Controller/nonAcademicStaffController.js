// nonAcademicStaffController.js

const NonAcademicStaff = require("../models/nonAcademicStaffSchema");

exports.createNonAcademicStaff = async (req, res) => {
  try {
    const nonAcademicStaff = await NonAcademicStaff.create(req.body);
    res.status(201).json(nonAcademicStaff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllNonAcademicStaff = async (req, res) => {
  try {
    const nonAcademicStaff = await NonAcademicStaff.find();
    res.json(nonAcademicStaff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getNonAcademicStaffById = async (req, res) => {
  try {
    const nonAcademicStaff = await NonAcademicStaff.findById(req.params.id);
    if (!nonAcademicStaff) {
      return res.status(404).json({ message: "Non-academic staff not found" });
    }
    res.json(nonAcademicStaff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateNonAcademicStaff = async (req, res) => {
  try {
    const nonAcademicStaff = await NonAcademicStaff.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!nonAcademicStaff) {
      return res.status(404).json({ message: "Non-academic staff not found" });
    }
    res.json(nonAcademicStaff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteNonAcademicStaff = async (req, res) => {
  try {
    const nonAcademicStaff = await NonAcademicStaff.findByIdAndDelete(req.params.id);
    if (!nonAcademicStaff) {
      return res.status(404).json({ message: "Non-academic staff not found" });
    }
    res.json({ message: "Non-academic staff deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
