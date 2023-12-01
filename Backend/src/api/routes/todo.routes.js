const router = require("express").Router();
const { getAllTodo, getOneTodo } = require("../controllers/todo.controller");

router.get("/", getAllTodo);
router.get("/:id", getOneTodo);

module.exports = router;
