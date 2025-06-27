const mongoose = require('mongoose');
const User = require('../../model/auth/user');
const Transporter = require('../../model/master/Transporter');
const GeneratePassword = require('../../utils/Password');


const addTransporter = async (req, res) => {
  try {
    const {
      transporterName, transporterCode, address, mobileNo, emailId,
      panNumber, gstNumber, lrSequence, financialYear, validFrom, validTo
    } = req.body;
    const newPassword = GeneratePassword();
    if (!transporterName || !transporterCode || !address || !mobileNo || !emailId || !panNumber || !gstNumber
      || !lrSequence || !financialYear || !validFrom || !validTo) {
      return res.status(400).json({
        status: 400,
        message: "All Fields Required!!"
      });
    }
    let userName = '';
    if (emailId.includes("@")) {
      userName = emailId.split("@")[0];
    } else {
      return res.status(400).json({
        status: 400,
        message: "Invalid Email"
      });
    }
    const user = new User({
      name: userName,
      email: emailId,
      phone: mobileNo,
      address: address,
      password: newPassword,
      role: 'Transporter'
    });
    const existingUser = await User.findOne({
      $and: [{ email: emailId }, { phone: mobileNo }]
    });
    if (existingUser) {
      return res.status(400).json({
        status: 400,
        message: "Email or Mobile Number already registered."
      });
    }
    const savedUser = await user.save();
    if (!savedUser) {
      return res.status(500).json({
        status: 500,
        message: "User creation failed"
      });
    }
    const transporter = new Transporter({
      transporterName,
      transporterCode,
      address,
      mobileNo,
      emailId,
      panNumber,
      gstNumber,
      lrSequence,
      financialYear,
      validFrom,
      validTo
    });

    const savedTransporter = await transporter.save();
    res.status(201).json({
      status: 201,
      message: "Transporter  created successfully",
      transporter: savedTransporter,
      user: savedUser
    });

  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    });
  }
};

const getAllTransporter = async (req, res) => {
  try {
    const getAllTransporter = await Transporter.find();
    res.status(200).json({
      status: 200,
      transporter: getAllTransporter
    })

  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    })
  }
}

const updateTransporter = async (req, res) => {
  try {
    const { id } = req.params;
    const updateTransporter = req.body;
    const updateTrans = await Transporter.findByIdAndUpdate(id,
      updateTransporter,
      { new: true }
    );
    if (!updateTrans) {
      return res.status(404).json({
        status: 404,
        message: "Transporter Not Found !!"
      });
    }
    res.status(200).json({
      status: 200,
      message: "Transporter Updated Successfully !!"
    })

  } catch (err) {
    return res.status(500).json({
      status: 500,
      err: error.message
    })
  }
}

const deleteTransporter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTransporter = await Transporter.findByIdAndDelete(id);

    if (!deleteTransporter) {
      return res.status(404).json({
        status: 404,
        message: "Transporter Not Found"
      })
    }
    res.status(200).json({
      status: 200,
      message: "Transporter Deleted !!"
    })
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    })
  }
}

module.exports = {
  addTransporter,
  getAllTransporter,
  updateTransporter,
  deleteTransporter
};