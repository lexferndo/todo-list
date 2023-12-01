const prisma = require("../../constants/prisma");

const findAll = async (params) => {
  const filterOptions = {
    where: {},
  };

  const { category } = params;
  if (category) {
    filterOptions.where.category_id = category;
  }

  const todo = await prisma.todo.findMany(filterOptions);
  return todo;
};

const findOne = async (pathParams) => {
  const { id } = pathParams;
  const todo = await prisma.todo.findUnique({
    where: {
      id: +id,
    },
  });
  return todo;
};

const create = async (params) => {
  let { title, body, due_date, reminder_at, category_id, user_id } = params;

  const todo = await prisma.todo.create({
    data: {
      title,
      body,
      due_date,
      reminder_at,
      category_id,
      user_id,
    },
  });

  return todo;
};

module.exports = {
  findAll,
  findOne,
  create,
};
