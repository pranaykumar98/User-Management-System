const express = require("express");
const { createUser, getAllUsers, getUserById, updateUser, deleteUser, login } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const validateUser = require("../validations/validateUser");
const validateLogin = require("../validations/loginValidation");
const validateUserUpdate = require("../validations/validateUserUpdate");

const router = express.Router();

router.post("/users", validateUser, createUser);
router.get("/users", authMiddleware, getAllUsers);
router.get("/users/:id", authMiddleware, getUserById);
router.put("/users/:id", authMiddleware, validateUserUpdate , updateUser);
router.delete("/users/:id", authMiddleware, deleteUser);
router.post("/login", validateLogin, login);

module.exports = router;
