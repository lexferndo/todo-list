const prisma = require("../../constants/prisma");

const findAll = async (params) => {
  const filterOptions = {
    where: {},
  };

  const { category } = params;
  if (category) {
    filterOptions.where.category_id = category;
  }

  const todo = await prisma.category.findMany(filterOptions);
  return todo;
};

module.exports = {
  findAll,
};
