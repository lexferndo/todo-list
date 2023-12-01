const CustomAPIError = require("../middleware/custom-error");
const { findAll, findOne } = require("../services/todo.services");

const getAllTodo = async (req, res, next) => {
  try {
    const data = await findAll(req.query);
    res.status(200).json({
      status: "200",
      message: "Get All Todo Successfully",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const getOneTodo = async (req, res, next) => {
  try {
    const data = await findOne(req.params);
    if (!data) {
      return next(new CustomAPIError("Data Not Found", 400));
    }

    res.status(200).json({
      status: "200",
      message: "Get Todo Successfully",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTodo,
  getOneTodo,
};
