const express = require("express");
const bodyParser = require("body-parser");

const compression = require("compression");
const ejs = require("ejs");
const app = express();

//Router 

app.set("view engine", "ejs");
app.use("/", express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
// app.use(Router);

app.listen(8080, () => {
    console.log("Server listening on localhost:8080");
})