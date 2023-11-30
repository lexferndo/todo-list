const router = require("express").Router();

const {
  getAllCategory,
  getOneCategory,
  newCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");

router.get("/", getAllCategory);
router.get("/:id", getOneCategory);
router.post("/", newCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
