const mongoose = require('mongoose');
const Packer = require('../../model/master/Packer');

const addPacker = async (req, res) => {
  try {
    const { packerCode, packerName, packerDescription, runningGrade, material, isMrp,
      isStatus
    } = req.body;

    if (!packerCode || !packerName || !packerDescription || !runningGrade || !material
      || !isMrp || !isStatus
    ) {
      return res.status(400).json({
        status: 400,
        message: "All Fields Required !!"
      })
    }

    const packer = new Packer({
      packerCode,
      packerName,
      packerDescription,
      runningGrade,
      material,
      isMrp,
      isStatus
    })
    const savedPacker = await packer.save();
    res.status(201).json({
      status: 201,
      message: "Packer Added Successfully",
      packerData: savedPacker
    })
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

const getAllPacker = async (req, res) => {
  try {
    const packers = await Packer.find().populate('material');
    res.status(200).json({
      status: 200,
      packerData: packers
    })

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

const updatePacker = async (req, res) => {
  try {

    const { id } = req.params;
    const updatePackerData = req.body;
    const updatePacker = await Packer.findByIdAndUpdate(id,
      updatePackerData,
      { new: true }
    );

    if (!updatePacker) {
      return res.status(404).json({
        status: 404,
        message: "Packer Found !!"
      })
    }
    res.status(200).json({
      status: 200,
      message: "Packer Updated !!",
      data: updatePacker
    })

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

const deletePacker = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePacker = await Packer.findByIdAndDelete(id);
    if (!deletePacker) {
      return res.status(404).json({
        status: 404,
        message: "Packer Not Found !!"
      });
    }
    res.status(200).json({
      status: 200,
      message: "Packer Deleted !"
    });

  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    })
  }
}

module.exports = {
  addPacker,
  getAllPacker,
  updatePacker,
  deletePacker
}