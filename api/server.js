const express = require("express");
const cors = require("cors");
require("dotenv").config();

//require Db connection
require("./db/db.Connection");

//import routes
const authRoute = require("./routes/Authentication.router");
const eventsRoute = require("./routes/Events.router");

const app = express();

//express middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Routes
app.use("/", authRoute);
app.use("/",eventsRoute);



app.listen(3000, console.log("Server up and running!"));