const CustomAPIError = require("../middleware/custom-error");
const bcrypt = require("bcrypt");
const { create, findAll, findOne } = require("../services/user.services");
const { generateToken } = require("../../lib/jwt");

const registerUser = async (req, res, next) => {
  try {
    const existingUser = await findAll(req.body);
    if (existingUser.length > 0) {
      return next(new CustomAPIError("Email / Username Already Exists", 400));
    }

    const data = await create(req.body);
    res.status(201).json({
      status: "201",
      message: "Register User Succesfully",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const existingUser = await findOne(req.body);
    if (!existingUser) {
      return next(new CustomAPIError("Invalid Username", 401));
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return next(new CustomAPIError("Invalid Password", 401));
    }

    const isValid = generateToken(existingUser);
    res.status(200).json({
      status: "200",
      message: "Login Successfully",
      data: isValid,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
