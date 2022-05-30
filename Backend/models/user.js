const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    // Name = req.body.Name
    // EmailAddress = req.body.EmailAddress
    // PhoneNumber = req.body.PhoneNumber
    // Password = req.body.Password
    // ConfirmPassword = req.body.ConfirmPassword
    // UserProfile = req.body.UserProfile
    name: {
        type: String,
        required:[true,"Please enter your Name"],
        minlength:[3,"Name will be at least 3 characters"], 
        maxlength:[20, "Name will can not big than 20 characters"]
    },
    email: {
       type:String,
       required:[true,"Please enter your email"],
       validate: [validator.isEmail,"Please enter a valid email"],
       unique: true,
    },
    PhoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    // UserImage: {
    //     data: Buffer,
    //     contentType: String
    // }
     
});



module.exports = mongoose.model("User", userSchema);
