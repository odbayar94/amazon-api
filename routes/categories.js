const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/protect");

const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/categories");

// const { getBooks } = require("../controller/books");
// /api/v1/categories/:id/books
// router.route("/:categoryId/books").get(getBooks);

const booksRouter = require("./books");
router.use("/:categoryId/books", booksRouter);

//"/api/v1/categories"
router.route("/").get(getCategories).post(protect, createCategory);

router
  .route("/:id")
  .get(getCategory)
  .put(protect, updateCategory)
  .delete(protect, deleteCategory);

module.exports = router;
