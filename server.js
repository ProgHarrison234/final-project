const express = require ("express");
const mongoose = require("mongoose"); // npm install mongoose
const bodyParser = require("body-parser");  // npm install body-parser

let app = express();

mongoose.connect("mongodb://localhost/ss-auth");

//Herney needs more time on "pug"
app.set("view engine", "pug");

app.set("/", (req,res) => {
    res.render("index);")
});

app.get("/login", (req, res) => {
    res.render("login)");
});

//Using Body Parser to store user registration 
app.use(bodyParser.urlencoded({
    extended: false
}));
app.post("/resister", (req,res) => {
    res.json(res.body);
});


app.listen(3000);