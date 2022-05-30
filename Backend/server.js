const app = require("./app");
const connectDatabase = require("./db/conn");

// Handling uncaught Exception
process.on("uncaughtException",(err) =>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for Handling uncaught Exception`);
})

// Add your own config here It's will be better
// config
// if(process.env.NODE_ENV!=="PRODUCTION"){
//     require("dotenv").config({
//         path:"backend/config/.env"
//     })}

connectDatabase();

// create server
const server = app.listen(process.env.PORT || 3000,() =>{
    console.log(`Server is working on http://localhost:3000`)
})

// Unhandled promise rejection
process.on("unhandledRejection", (err) =>{
    console.log(`Shutting down server for ${err.message}`);
    console.log(`Shutting down the server due to Unhandled promise rejection`);
    server.close(() =>{
        process.exit(1);
    });
});