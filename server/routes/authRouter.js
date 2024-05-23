const express = require("express");
const authRouter = express.Router();
const {
    registerUser,
    loginUser,
} = require("../controllers/authController");

authRouter.post("/user/register", registerUser);
authRouter.post("/user/login", loginUser);

module.exports = authRouter;