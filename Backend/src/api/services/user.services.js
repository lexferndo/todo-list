const prisma = require("../../lib/prisma");
const bcrypt = require("bcrypt");

const findAll = async (params) => {
  const filterOptions = {
    where: {},
  };

  const { email } = params;
  if (email) {
    filterOptions.where.email = email;
  }

  const { username } = params;
  if (username) {
    filterOptions.where.username = username;
  }

  const user = await prisma.user.findMany(filterOptions);
  return user;
};

const findOne = async (params) => {
  const { username } = params;
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  return user;
};

const create = async (params) => {
  let { first_name, last_name, username, email, password, photo } = params;
  const hashPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      first_name,
      last_name,
      username,
      email,
      password: hashPassword,
      photo,
    },
  });

  return user;
};

module.exports = {
  findAll,
  findOne,
  create,
};
