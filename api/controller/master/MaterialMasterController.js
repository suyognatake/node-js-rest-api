const mongoose = require('mongoose');
const Material = require('../../model/master/Material');


const addMaterial = async (req, res) => {
  try {
    const { materialCode, gradeCode, materialName, gradeDescription, brandCode, brandDescription, materialGroup,
      packDescription, packType, materialDescription, weightPerBags
    } = req.body;
    if (!materialCode || !gradeCode || !materialName || !gradeDescription || !brandCode || !brandDescription
      || !materialGroup || !packDescription || !packType || !materialDescription || !weightPerBags
    ) {
      return res.status(400).json({
        message: "All Fields are Required !!"
      })
    }

    const material = new Material({
      materialCode,
      gradeCode,
      materialName,
      gradeDescription,
      brandCode,
      brandDescription,
      materialGroup,
      packDescription,
      packType,
      materialDescription,
      weightPerBags

    });
    const savedMaterial = await material.save();
    res.status(201).json({
      status: 201,
      message: "Material Added !!",
      material: savedMaterial
    });


  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}


const getAllMaterial = async (req, res) => {
  try {
    const data = await Material.find();
    res.status(200).json({
      status: 200,
      material: data
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

const deleteMaterial = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteMaterial = await Material.findByIdAndDelete(id);
    if (!deleteMaterial) {
      return res.status(404).json({
        message: "Material Not Found !!!"
      })
    }
    res.status(200).json({
      message: "Material Delete !!"
    })

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

const updateMaterial = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBody = req.body;
    const updateData = await Material.findByIdAndUpdate(
      id,
      updateBody,
      { new: true }
    );

    if (!updateData) {
      return res.status(404).json({
        status: 404,
        message: "Material Not Found !!"
      })
    }

    res.status(200).json({
      status: 200,
      message: "Material Updated Successfully !!",
      data: updateData
    })

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

module.exports = {
  addMaterial,
  getAllMaterial,
  deleteMaterial,
  updateMaterial
}