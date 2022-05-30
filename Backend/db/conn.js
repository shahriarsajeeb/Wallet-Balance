const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect("mongodb://localhost:27017/test", {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }).then((data) =>{
         console.log(`mongodb is conncted with server: ${data.connection.host}`);
    })
}

module.exports = connectDatabase

