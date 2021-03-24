const express = require("express");
const { protect } = require("../middleware/protect");

const {
  register,
  login,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  forgotPassword,
  resetPassword,
} = require("../controller/users");

const { getUserBooks } = require("../controller/books");

const router = express.Router();

//registerUser
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password").post(resetPassword);

router.use(protect);
//"/api/v1/users"
router.route("/").get(getUsers).post(createUser);
//getSingleUser
router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);
router.route("/:id/books").get(getUserBooks);

module.exports = router;
