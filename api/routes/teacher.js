const express = require('express');
const router = express.Router();
const Teacher = require('../model/teacher');
const mongoose = require('mongoose');




router.post('/addTeacher', async (req, res) => {
  try {
    const { name, email, phone, gender, department, age, salary } = req.body;

    const teacherExist = await Teacher.findOne({ name });

    if (teacherExist) {
      return res.status(400).json({
        message: "Teacher Alredy Existed!!"
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

    const teacher = new Teacher({
      _id: new mongoose.Types.ObjectId(),
      name,
      email,
      phone: Number(phone),
      gender,
      department,
      age,
      salary
    });

    const savedTeacher = await teacher.save();

    res.status(201).json({
      message: 'Teacher Created!',
      status: 201,
      createdTeacher: savedTeacher
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/getAllTeacher', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json({ teacherData: teachers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// router.get('/getAllTeacher', async (req, res) => {
//   try {
//     const teachers = await Teacher.find({
//       age: { $gte: 24 }
//     }).limit(1);
//     res.status(200).json({ teacherData: teachers });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });
router.get('/getAllTeacherGroupBy', async (req, res) => {
  try {
    const teachers = await Teacher.aggregate([{
      $group: {
        _id: "$department",
        totalSalary: { $sum: "$salary" },
        totalAvgSalary: { $avg: "$salary" }
      }
    }
    ]);
    res.status(200).json({ teacherData: teachers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;