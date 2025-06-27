const Uom = require('../../model/master/Uom');
const mongoose = require('mongoose');

const addUom = async (req, res) => {
  try {
    const { uomName, uomCode, tonnage, noOfBagsPerTon } = req.body;
    if (!uomName || !uomCode || !tonnage || !noOfBagsPerTon) {
      return res.status(400).json({
        message: "All Fields Required!!"
      })
    }
    const uom = new Uom({
      _id: new mongoose.Types.ObjectId(),
      uomName,
      uomCode,
      tonnage,
      noOfBagsPerTon
    });

    const savedUom = await uom.save();
    res.status(201).json({
      status: 201,
      message: "UOM Created Sucessfully",
      uomData: savedUom
    })

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}


const getAllUom = async (req, res) => {
  try {

    const allUom = await Uom.find();
    res.status(200).json({
      status: 200,
      count: allUom.length,
      uom: allUom
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

const updateUOM = async (req, res) => {
  try {
    const { id } = req.params;
    const updateDto = req.body;
    const updateUOM = await Uom.findByIdAndUpdate(
      id,
      updateDto,
      { new: true }
    );

    if (!updateUOM) {
      return res.status(404).json({
        status: 404,
        message: "UOM Not Found!!"
      })
    }
    res.status(200).json({
      status: 200,
      message: "UOM Updated Successfully !!",
      updateData: updateUOM
    })

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

const deleteUOM = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteUOM = await Uom.findByIdAndDelete(id);

    if (!deleteUOM) {
      return res.status(404).json({
        message: "Uom Not Found !!"
      })
    }

    res.status(200).json({
      status: 200,
      message: "UOM Deleted !!"
    })


  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

module.exports = {
  addUom,
  getAllUom,
  updateUOM,
  deleteUOM
}