const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));

// Routes Import
const user = require("./routes/UserRoute.js");
app.use("/api/v2",user);


// All Frontend connection
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'UserData/UserData.html'));
})

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, 'Admin/Admin.html'));
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'Login/Login.html'));
})

app.get("http://localhost:3000/api/v2/register", (req, res) => {
    res.sendFile(path.join(__dirname, 'Register/Register.html'));
})

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
