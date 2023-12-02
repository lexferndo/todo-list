const CustomAPIError = require("../middleware/custom-error");
const {
  findAll,
  findOne,
  create,
  update,
  destroy,
} = require("../services/todo.services");

const getAllTodo = async (req, res, next) => {
  try {
    const data = await findAll(+req.userId);
    console.log("Controller", +req.userId);
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

const newTodo = async (req, res, next) => {
  try {
    const data = await create(req.body);
    res.status(201).json({
      status: "201",
      message: "Todo Created Succesfully",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const updateTodo = async (req, res, next) => {
  try {
    const searchTodo = await findOne(req.params);
    if (!searchTodo) {
      return next(new CustomAPIError("Data Not Found", 400));
    }

    const data = await update(req.params, req.body);
    res.status(200).json({
      status: "200",
      message: "Update Todo Successfully",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const searchTodo = await findOne(req.params);
    if (!searchTodo) {
      return next(new CustomAPIError("Data Not Found", 400));
    }

    const data = await destroy(req.params);
    res.status(200).json({
      status: "200",
      message: "Delete Todo Successfully",
    });
  } catch (error) {}
};

module.exports = {
  getAllTodo,
  getOneTodo,
  newTodo,
  updateTodo,
  deleteTodo,
};
