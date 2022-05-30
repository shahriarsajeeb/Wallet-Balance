const User = require("../models/user");

// Register a user
exports.register = async (req, res) => {
  try {
    const { name, email, password, PhoneNumber } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    user = await User.create({
      name,
      email,
      password,
      PhoneNumber,
    });
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Login a user
exports.loginUser = async (req, res, next) => {
    try {
        email = req.body.email
        password = req.body.password
        res.send("Data AA gya")
    } catch (error) {
        res.status(400).send(error)
  }
};
