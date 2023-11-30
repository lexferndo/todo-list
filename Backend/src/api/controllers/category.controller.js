const CustomAPIError = require("../middleware/custom-error");
const {
  findAll,
  findOne,
  create,
  update,
  destroy,
} = require("../services/category.services");

const getAllCategory = async (req, res, next) => {
  try {
    const data = await findAll(req.query);
    res.status(200).json({
      status: "200",
      message: "Get All Category Succesffully",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const getOneCategory = async (req, res, next) => {
  try {
    const data = await findOne(req.params);
    if (!data) {
      next(new CustomAPIError(`Data Not Found`, 400));
    }

    res.status(200).json({
      status: "200",
      message: "Get Category Succesffully",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const newCategory = async (req, res, next) => {
  try {
    const existingCategory = await findAll(req.body);
    if (existingCategory.length > 0) {
      next(new CustomAPIError("Category Name Already Exists", 400));
    } else {
      const data = await create(req.body);
      res.status(201).json({
        status: "201",
        message: "Category Created Succesffully",
        data: data,
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const searchCategory = await findOne(req.params);
    const existingCategory = await findAll(req.body);
    if (!searchCategory) {
      next(new CustomAPIError(`Data Not Found`, 400));
    } else if (existingCategory.length > 0) {
      next(new CustomAPIError("Category Name Already Exists", 400));
    } else {
      const data = await update(req.params, req.body);
      res.status(200).json({
        status: "200",
        message: "Update Category Succesffully",
        data: data,
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const searchCategory = await findOne(req.params);
    if (!searchCategory) {
      next(new CustomAPIError(`Data Not Found`, 400));
    } else {
      const data = await destroy(req.params);
      res.status(200).json({
        status: "200",
        message: "Delete Category Succesffully",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategory,
  getOneCategory,
  newCategory,
  updateCategory,
  deleteCategory,
};
