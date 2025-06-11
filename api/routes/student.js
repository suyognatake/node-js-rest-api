const express = require('express');
const router = express.Router();
const Student = require('../model/student');
const mongoose = require('mongoose');


router.get('/getAllStudent', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ studentData: students });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/status/active', async (req, res) => {
  try {
    const students = await Student.aggregate([
      { $match: { status: false } }
    ])
    res.status(200).json({
      studentData: students
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ studentData: student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const studentId = await Student.findByIdAndDelete(req.params.id);
    if (!studentId) {
      return res.status(404).json({
        status: 404,
        message: 'Student not found !!'
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
})

router.post('addStudent', async (req, res) => {
  try {
    const { name, email, phone, gender } = req.body;

    const studentExist = await Student.findOne({ name });

    if (studentExist) {
      return res.status(400).json({
        message: "Student Alredy Existed!!"
      })
    }
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!phone || isNaN(phone)) {
      return res.status(400).json({ message: "Phone must be a valid number" });
    }

    const student = new Student({
      _id: new mongoose.Types.ObjectId(),
      name,
      email,
      phone: Number(phone),
      gender
    });

    const savedStudent = await student.save();

    res.status(201).json({
      message: 'Student Created!',
      status: 201,
      createdStudent: savedStudent
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
