const express = require("express");
const {
  register,
  loginUser,
  userdata,
  userInfo,
  logoutUser,
  transections,
} = require("../controllers/userController");
const {isAuthenticatedUser} = require("../utils/auth.js");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(loginUser);
router.route("/userdata").post(isAuthenticatedUser,userdata);
router.route("/user").get(isAuthenticatedUser,userInfo);
router.route("/logout").get(isAuthenticatedUser,logoutUser);
router.route("/transections").get(isAuthenticatedUser,transections);

module.exports = router;
