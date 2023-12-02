const router = require("express").Router();
const {
  getAllTodo,
  getOneTodo,
  newTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");
const {
  authenticateTokenMiddleware,
} = require("../middleware/authenticateToken");

router.get("/", authenticateTokenMiddleware, getAllTodo);
router.get("/:id", getOneTodo);
router.post("/", newTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
