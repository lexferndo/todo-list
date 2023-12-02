const prisma = require("../../lib/prisma");

const findAll = async (user_id) => {
  const todo = await prisma.todo.findMany({
    where: {
      user_id: user_id,
    },
  });
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

const update = async (pathParams, params) => {
  const { id } = pathParams;
  const { title, body, due_date, reminder_at, category_id } = params;

  const todo = await prisma.todo.update({
    where: {
      id: +id,
    },
    data: {
      title,
      body,
      due_date,
      reminder_at,
      category_id,
    },
  });
  return todo;
};

const destroy = async (pathParams) => {
  const { id } = pathParams;

  const todo = await prisma.todo.delete({
    where: {
      id: +id,
    },
  });

  return todo;
};

module.exports = {
  findAll,
  findOne,
  create,
  update,
  destroy,
};
