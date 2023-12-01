const router = require("express").Router();

const crudCategory = require("./api/routes/category.routes");
const crudTodo = require("./api/routes/todo.routes");

router.use("/api/category", crudCategory);
router.use("/api/todo", crudTodo);

module.exports = router;
