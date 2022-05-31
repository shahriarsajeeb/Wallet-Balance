const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));

// Routes Import
const user = require("./routes/UserRoute.js");
app.use("/api/v2",user);


// All Frontend connection
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/your html/UserData/UserData.html'));
// })

// app.get("http://localhost:3000/api/v2/admin", (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/your html/Admin/Admin.html'));
// })

// app.get("http://localhost:3000/api/v2/login", (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/your html/Login/Login.html'));
// })

// app.get("http://localhost:3000/api/v2/userdata", (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/your html/User/UserData.html'));
// })

// app.get("/register", (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/your html/Register/Register.html'));
// })


// app.post("/userdata", async (req, res) => {
//     try {
//         TransationAmount = req.body.TransationAmount
//         TransationTitle = req.body.TransationTitle
//         TransationSelect = req.body.TransationSelect
//         res.send(TransationSelect)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })


module.exports = app;
