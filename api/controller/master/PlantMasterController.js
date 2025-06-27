const Plant = require('../../model/master/Plant');
const mongoose = require('mongoose');


const addPlant = async (req, res) => {
  try {
    const { plantName, plantId, tripSequence, plantDescription } = req.body;
    const plantExist = await Plant.findOne({ plantName });
    if (plantExist) {
      return res.status(400).json({
        message: "Plant Name Already Exists!!"
      })
    }
    if (!plantName || !plantId || !tripSequence || !plantDescription) {
      return res.status(400).json({
        message: "All Fields Required !!"
      })
    }

    const plant = new Plant({
      _id: new mongoose.Types.ObjectId(),
      plantName,
      plantId,
      tripSequence,
      plantDescription
    });

    const savedPlant = await plant.save();
    res.status(201).json({
      message: "Plant Save Successfully",
      plant: savedPlant
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

const getAllPlant = async (req, res) => {
  try {

    const getAllPlant = await Plant.find();
    res.status(200).json({
      status: 200,
      count: getAllPlant.length,
      plantData: getAllPlant
    })

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

const updatePlant = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedPlant = await Plant.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    if (!updatedPlant) {
      return res.status(404).json({
        status: 404,
        message: 'Plant not found'
      });
    }

    res.status(200).json({
      status: 200,
      message: 'Plant updated successfully',
      data: updatedPlant
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

const deletePlant = async (req, res) => {
  try {
    const { id } = req.params;

    const deletePlant = await Plant.findByIdAndDelete(id);
    if (!deletePlant) {
      return res.status(404).json({
        status: 404,
        message: "Plant Not Found"
      })
    }
    res.status(200).json({
      status: 200,
      message: "Plant Delete Succesfully"
    })

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

module.exports = {
  addPlant,
  getAllPlant,
  updatePlant,
  deletePlant
}