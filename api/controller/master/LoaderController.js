const mongoose = require('mongoose');
const Loader = require('../../model/master/Loader');

const addLoader = async (req, res) => {
  try {
    const { loaderName, loaderId, loaderDescription, queueLength, packer } = req.body;

    if (!loaderName || !loaderId || !loaderDescription || !queueLength || !packer) {
      return res.status(400).json({
        status: 400,
        message: "All Fields Required"
      })
    }
    const loader = new Loader({
      loaderName,
      loaderId,
      loaderDescription,
      queueLength,
      packer
    });
    const saveLoader = await loader.save();
    res.atatus(201).json({
      status: 201,
      message: "Loader Added Successfully",
      loaderData: saveLoader
    })

  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    })
  }
}

const getAllLoader = async (req, res) => {
  try {
    const getAllLoader = await Loader.find().populate('packer');
    res.status(200).json({
      status: 200,
      loader: getAllLoader
    })
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

const updateLoader = async (req, res) => {
  try {

    const { id } = req.params;
    const loaderBody = req.body;
    const updateLoaderId = await Loader.findByIdAndUpdate(
      id,
      loaderBody,
      { new: true }
    )

    if (!updateLoaderId) {
      return res.status(404).json({
        status: 404,
        message: "Loader Not Found !!"
      })
    }
    res.status(200).json({
      status: 200,
      message: "Loader Updated Successfully !!"
    })

  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    })
  }
}

const deleteLoader = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteLoaderId = await Loader.findByIdAndDelete(id);
    if (!deleteLoaderId) {
      return res.status(404).json({
        status: 404,
        message: "Loader Not Found !!!"
      })
    }
    res.status(200).json({
      status: 200,
      message: "Loader Deleted Sucessfully !"
    })

  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    })
  }
}

module.exports = {
  addLoader,
  getAllLoader,
  updateLoader,
  deleteLoader
}