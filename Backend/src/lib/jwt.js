require("dotenv").config();
const secret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    secret,
    { expiresIn: "1h" }
  );
};

module.exports = {
  generateToken,
};
