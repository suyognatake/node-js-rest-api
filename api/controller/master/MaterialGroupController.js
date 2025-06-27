const mongoose = require('mongoose');
const MaterialGroup = require('../../model/master/MaterialGroup');


const addMaterialGroup = async (req, res) => {
  try {
    const { materialGroupCode, materialGroupName, materialGroupDescription } = req.body;

    if (!materialGroupCode || !materialGroupName || !materialGroupDescription) {
      return res.status(400).json({
        status: 400,
        message: "All Fields Required!!"
      });
    }

    const materialGroups = new MaterialGroup({
      materialGroupCode,
      materialGroupName,
      materialGroupDescription
    });

    const savedMaterialGroup = await materialGroups.save();

    res.status(201).json({
      status: 201,
      message: "Material Group Added !!",
      data: savedMaterialGroup
    });

  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    });
  }
};
const getAllMaterialGroup = async (req, res) => {
  try {
    const getAllMaterialGroup = await MaterialGroup.find();

    res.status(200).json({
      status: 200,
      materialGroupsData: getAllMaterialGroup
    });

  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    });
  }
};

const updateMaterialGroup = async (req, res) => {
  try {

    const { id } = req.params;
    const updateData = req.body
    const updateeBody = await MaterialGroup.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    )
    if (!updateeBody) {
      return res.status(404).json({
        status: 404,
        message: "Material Group Not Found"
      })
    }
    res.status(200).json({
      status: 200,
      message: "Material Group Updated Successfully !!"
    })

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

const deleteMaterialGroup = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteData = await MaterialGroup.findByIdAndDelete(id);
    if (!deleteData) {
      return res.status(404).json({
        status: 404,
        message: "Material Group Not Found"
      })
    }
    res.status(200).json({
      status: 200,
      message: "Material Group Deleted!!"
    })

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

module.exports = {
  addMaterialGroup,
  getAllMaterialGroup,
  updateMaterialGroup,
  deleteMaterialGroup
};