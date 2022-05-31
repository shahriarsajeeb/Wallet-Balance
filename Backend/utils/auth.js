const jwt = require("jsonwebtoken");
const User = require("../models/user");


exports.isAuthenticatedUser = async (req,res,next) =>{
    const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
        message:"Please Login for access this resource"
    });
  }

  const decodedData = jwt.verify(token, "fjgfjgdjfg2115215r");

  req.user = await User.findById(decodedData.id);

  next();
};

// Admin Roles
exports.authorizeRoles = (...roles) =>{
    return (req,res,next) =>{
        if(!roles.includes(req.user.role)){
          return res.status(401).json({
                message:"Only Admin can Access this resources"
          });
        };
        next();
    }
}