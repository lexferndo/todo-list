const prisma = require("../../constants/prisma");

const findAll = async (params) => {
  const filterOptions = {
    where: {},
  };

  const { name } = params;
  if (name) {
    filterOptions.where.name = name;
  }
  const categories = await prisma.category.findMany(filterOptions);
  return categories;
};

const findOne = async (pathParams) => {
  const { id } = pathParams;
  const categories = await prisma.category.findUnique({
    where: {
      id: +id,
    },
  });

  return categories;
};

const create = async (params) => {
  const { name } = params;
  const categories = prisma.category.create({
    data: {
      name,
    },
  });

  return categories;
};

const update = async (pathParams, params) => {
  const { id } = pathParams;
  const { name } = params;

  const categories = await prisma.category.update({
    where: {
      id: +id,
    },
    data: {
      name: name,
    },
  });
  return categories;
};

const destroy = async (pathParams) => {
  const { id } = pathParams;

  const categories = await prisma.category.delete({
    where: {
      id: +id,
    },
  });

  return categories;
};

module.exports = {
  findAll,
  findOne,
  create,
  update,
  destroy,
};
