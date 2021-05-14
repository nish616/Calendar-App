const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

//require Db connection
require("./db/db.Connection");

//import routes
const authRoute = require("./routes/Authentication.router");
const sampleRoute = require("./routes/Sample.router");

const app = express();

//express middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Routes
app.use("/", authRoute);
app.use("/",sampleRoute);


app.listen(3000, console.log("Server up and running!"));