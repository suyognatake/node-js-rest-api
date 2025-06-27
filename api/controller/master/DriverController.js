const mongoose = require('mongoose');

const Driver = require('../../model/master/Driver');

const addDriver = async (req, res) => {
  try {

    const { nameTitle, driverName, middleName, lastName, addressLine1, addressLine2, city,
      district, state, pinCode, licenseNo, licenseExpiryDate, mobileNumber
    } = req.body;
    const staffImage = req.file ? req.file.filename : null;

    if (!nameTitle || !driverName || !middleName || !lastName || !addressLine1 || !addressLine2
      || !city || !district || !state || !pinCode || !licenseNo || !licenseExpiryDate || !mobileNumber
      || !staffImage
    ) {
      return res.status(400).json({
        status: 400,
        message: "All Fields Required !!"
      })
    }

    const driver = new Driver({
      nameTitle,
      driverName,
      middleName,
      lastName,
      addressLine1,
      addressLine2,
      city,
      district,
      state,
      pinCode,
      licenseNo,
      licenseExpiryDate,
      mobileNumber,
      staffImage
    });

    const savedDriver = await driver.save();
    res.status(201).json({
      status: 201,
      message: "Driver Successfully Added !!",
      driverData: savedDriver
    })


  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    })
  }
}

const getAllDriver = async (req, res) => {
  try {

    const getAllDriver = await Driver.find();
    res.status(200).json({
      status: 200,
      driver: getAllDriver
    })

  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    })
  }
}

const updateDriver = async (req, res) => {
  try {
    const driverId = req.params.id;

    const {
      nameTitle, driverName, middleName, lastName, addressLine1, addressLine2,
      city, district, state, pinCode, licenseNo, licenseExpiryDate, mobileNumber
    } = req.body;

    const staffImage = req.file ? req.file.filename : undefined;

    const updateFields = {
      nameTitle,
      driverName,
      middleName,
      lastName,
      addressLine1,
      addressLine2,
      city,
      district,
      state,
      pinCode,
      licenseNo,
      licenseExpiryDate,
      mobileNumber
    };

    if (staffImage) {
      updateFields.staffImage = staffImage;
    }

    const updatedDriver = await Driver.findByIdAndUpdate(
      driverId,
      updateFields,
      { new: true, runValidators: true }
    );

    if (!updatedDriver) {
      return res.status(404).json({
        status: 404,
        message: "Driver not found"
      });
    }

    res.status(200).json({
      status: 200,
      message: "Driver updated successfully",
      driverData: updatedDriver
    });

  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err.message
    });
  }
};

const deleteDriver = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteDriver = await Driver.findByIdAndDelete(id);

    if (!deleteDriver) {
      return res.status(404).json({
        status: 404,
        message: "Driver Not Found !!"
      })
    }
    res.status(200).json({
      status: 200,
      message: "Driver Deleted!!"
    })

  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    })
  }
}


module.exports = {
  addDriver,
  getAllDriver,
  updateDriver,
  deleteDriver
}