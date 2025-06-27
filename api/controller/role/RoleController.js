const mongoose = require('mongoose');
const Role = require('../../model/role/role');


exports.addRole = async (req, res) => {
  try {
    const { roleName } = req.body;

    if (!roleName || roleName.trim() === "") {
      return res.status(400).json({
        message: "Role name is required!"
      })
    }

    const roleExist = await Role.findOne({ roleName: roleName.trim() });
    if (roleExist) {
      return res.status(400).json({
        message: "Role Already Exist !!"
      })
    }

    const role = new Role({
      roleName: roleName.trim()
    })
    const savedRole = await role.save();
    res.status(201).json({
      message: "Role Created Succesfully !!",
      roleData: savedRole
    })

  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
}