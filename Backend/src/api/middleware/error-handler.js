const CustomAPIError = require("./custom-error");

const errorHandler = (err, req, res, next) => {
  console.log("Error = ", err);
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  return res.status(500).json("Internal Server Error");
};

module.exports = errorHandler;
