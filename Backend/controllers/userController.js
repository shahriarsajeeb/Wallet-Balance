const User = require("../models/user");
const UserDataModel = require("../models/UserDataModel");
const sendToken = require("../utils/jwtToken.js");

// Register a user
exports.register = async (req, res) => {
  try {
    const { name, email, password, PhoneNumber, ConfirmPassword } = req.body;
    const userExist = await User.findOne({ email });
    const userPhoneNumberExist = await User.findOne({ PhoneNumber });
    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "Email ALready Exists!!!" });
    } else if (userPhoneNumberExist) {
      return res
        .status(400)
        .json({ success: false, message: "Phone Number ALready Exists!!!" });
    } else if (password != ConfirmPassword) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Password doesn;t match with each other!!!",
        });
    } else {
      user = await User.create({
        name,
        email,
        password,
        PhoneNumber,
      })
     }
    res.status(200).json({
      success: true,
      message:"Register Successfully",
    })
    }
    catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Login a user
exports.loginUser = async (req, res, next) => {
  try {
    const { LoginEmail, LoginPassword } = req.body;
    const user = await User.findOne({ email: LoginEmail });
    if (user) {
      if (user.password == LoginPassword) {
        sendToken(user, 200, res);
      } else {
        res.status(400).send("Password doesn't match");
      }
    } else {
      res.status(400).send("User not Register");
    }
  } catch (error) {
    res.status(400).json({
      success:false,
      error:error.message
    });
  }
};

// get user information
exports.userInfo = async (req, res) => {
  const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      user,
    });
};

// logout user
exports.logoutUser = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Log out success",
  });
};

// user transections add
exports.userdata = async (req, res) => {
  const { TransationAmount, TransationTitle, TransationSelect,UserId } = req.body;
  userData = await UserDataModel.create({
    TransationAmount,
    TransationTitle,
    TransationSelect,
    UserId
  });
  res.status(200).json({
    success: true,
    userData,
  });
};

// user transations get
exports.transections = async (req, res) => {
  const userData = await UserDataModel.find();
  res.status(200).json({
    success: true,
    userData,
  });
}