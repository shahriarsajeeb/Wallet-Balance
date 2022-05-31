const mongoose = require("mongoose");
const validator = require("validator");

const userDataSchema = new mongoose.Schema({
    TransationAmount: {
        type: String,
    },
    TransationTitle: {
        type: String,
    },
    TransationSelect: {
        type: String,
    },
    UserId: {
        type: String,
    },
});



module.exports = mongoose.model("UserDataModel", userDataSchema);
