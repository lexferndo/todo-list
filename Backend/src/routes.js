const router = require("express").Router();

const crudCategory = require("./api/routes/category.routes");
const crudTodo = require("./api/routes/todo.routes");
const cudUser = require("./api/routes/user.routes");

router.use("/api/category", crudCategory);
router.use("/api/todo", crudTodo);
router.use("/api/user", cudUser);

module.exports = router;
