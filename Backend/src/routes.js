const router = require("express").Router();

const crudCategory = require("./api/routes/category.routes");

router.use("/api/category", crudCategory);
router.use("/api/todo");

module.exports = router;
