const mongoose = require('mongoose');
const UnLoader = require('../../model/master/UnLoader');


const addUnLoader = async (req, res) => {
  try {

    const { unLoaderId, unLoaderName, unLoader, queueLength, materialGroup } = req.body;
    if (!unLoaderId || !unLoaderName || !unLoader || !queueLength || !materialGroup) {
      return res.status(400).json({
        status: 400,
        message: "All Fields Required !!"
      })
    }
    const unLoaders = new UnLoader({
      unLoaderId,
      unLoaderName,
      unLoader,
      queueLength,
      materialGroup
    });

    const savedUnLoader = await unLoaders.save();
    res.status(201).json({
      status: 201,
      message: "UnLoader Added Successfully!",
      unLoaderData: savedUnLoader
    })
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: err.message
    })
  }
}

const getAllUnLoader = async (req, res) => {
  try {

    const getAllUnLoader = await UnLoader.find().populate('materialGroup');
    res.status(200).json({
      status: 200,
      unloaderData: getAllUnLoader
    })

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}

const deleteUnLoader = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUnLoader = await UnLoader.findByIdAndDelete(id);
    if (!deleteUnLoader) {
      return res.status(400).json({
        status: 400,
        message: "All Fields Required!!"
      })
    }
    res.status(200).json({
      status: 200,
      message: "UnLoader Deleted Successfully!"
    })

  } catch (err) {
    return res.atatus(500).json({
      status: 500,
      error: err.message
    })
  }
}

module.exports = {
  addUnLoader,
  getAllUnLoader,
  deleteUnLoader
}