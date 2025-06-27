const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../model/auth/user');


require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All Fields Required!!"
      })
    }
    const user = await User.findOne({ email }).populate('role');
    if (!user) {
      return res.status(400).json({
        message: "Invalid Email!!"
      })
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role.roleName,
        phone: user.phone
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role.roleName,
        address: user.address
      }
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
}

exports.addUser = async (req, res) => {
  try {
    const { name, email, phone, password, address, roleId } = req.body;

    if (!name || !email || !phone || !password || !roleId) {
      return res.status(400).json({
        message: 'All Fields Required!!!'
      })
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        message: 'User Already Exist!! '
      })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      name,
      email,
      phone,
      address,
      role: roleId,
      password: hashedPassword
    })
    const savedUser = await newUser.save();
    res.status(201).json({
      message: 'User Created Succesfully!!',
      userData: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        phone: savedUser.phone,
        address: savedUser.address

      }
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

}