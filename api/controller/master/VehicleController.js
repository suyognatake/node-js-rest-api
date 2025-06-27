const mongoose = require('mongoose');

const Vehicle = require('../../model/master/Vehicle');


const addVehicle = async (req, res) => {
  try {
    const {
      driverName,
      vehicleNumber,
      plantName,
      capacity,
      transporterCode,
      transporterName,
      rcIssueDate,
      vechicleManufacturedBy,
      manufacturedMonth,
      manufacturedyYear,
      selectedVehicleDedication,
      vehicleStatus,
      rfidFastTag,
      movementTag,
      vehicleType,
      permitNo,
      permitType,
      roadTaxRenewalDate,
      pucIssueDate,
      pucExpiryDate,
      fitnessExpiryDate,
      insuranceNo,
      insuranceCompanyName,
      insuranceIssueDate,
      insuranceExpiryDate,
      vehicleExpiryDate,
      nameTitle,
      name,
      middleName,
      surName,
      addressLine1,
      addressLine2,
      city,
      district,
      state,
      pincode,
      licenseNo,
      licenseExpiryDate,
      mobileNo,
      ownerImage
    } = req.body;

    if (
      !driverName || !vehicleNumber || !plantName || !capacity || !transporterCode ||
      !transporterName || !rcIssueDate || !vechicleManufacturedBy || !manufacturedMonth ||
      !manufacturedyYear || !selectedVehicleDedication || vehicleStatus === undefined ||
      !rfidFastTag || !movementTag || !vehicleType || !permitNo || !permitType ||
      !roadTaxRenewalDate || !pucIssueDate || !pucExpiryDate || !fitnessExpiryDate ||
      !insuranceNo || !insuranceCompanyName || !insuranceIssueDate || !insuranceExpiryDate ||
      !vehicleExpiryDate || !nameTitle || !name || !middleName || !surName || !addressLine1 ||
      !addressLine2 || !city || !district || !state || !pincode || !licenseNo ||
      !licenseExpiryDate || !mobileNo || !ownerImage
    ) {
      return res.status(400).json({
        status: 400,
        message: "All fields are required!"
      });
    }

    const vehicle = new Vehicle({
      driverName,
      vehicleNumber,
      plantName,
      capacity,
      transporterCode,
      transporterName,
      rcIssueDate,
      vechicleManufacturedBy,
      manufacturedMonth,
      manufacturedyYear,
      selectedVehicleDedication,
      vehicleStatus,
      rfidFastTag,
      movementTag,
      vehicleType,
      permitNo,
      permitType,
      roadTaxRenewalDate,
      pucIssueDate,
      pucExpiryDate,
      fitnessExpiryDate,
      insuranceNo,
      insuranceCompanyName,
      insuranceIssueDate,
      insuranceExpiryDate,
      vehicleExpiryDate,
      nameTitle,
      name,
      middleName,
      surName,
      addressLine1,
      addressLine2,
      city,
      district,
      state,
      pincode,
      licenseNo,
      licenseExpiryDate,
      mobileNo,
      ownerImage
    });
    const savedVehicle = await vehicle.save();
    res.status(201).json({
      status: 201,
      message: "Vehicle Added Successfully !!",
      vechicle: savedVehicle
    })
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    })
  }
}

const getAllVehicleData = async (req, res) => {
  try {
    const getAllVehicleData = await Vehicle.find();
    res.status(200).json({
      status: 200,
      vechicledata: getAllVehicleData
    })

  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    })
  }
}

const deleteVehicle = async (req, res) => {
  try {

    const { id } = req.params;

    const deleteVehicle = await Vehicle.findByIdAndDelete(id);
    if (!deleteVehicle) {
      return res.status(404).json({
        status: 404,
        message: "Vehicle Not Found !!"
      });
    }
    res.status(200).json({
      status: 200,
      message: "Vehicle Deleted Successfully !!"
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    })
  }
}

module.exports = {
  addVehicle,
  getAllVehicleData,
  deleteVehicle
}