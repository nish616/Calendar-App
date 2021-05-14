//Database connection here
const mongoose = require("mongoose");

//require environment variables
const dbConfig = require("../Config/db.config");

module.exports = mongoose.connect("mongodb+srv://"+dbConfig.dbUser+":"+dbConfig.dbPassword+"@cluster0.mmpcr.mongodb.net/"+dbConfig.dbName+"?retryWrites=true&w=majority",
{ useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => {
    console.log("Database authenticated and connected");
})
.catch((err) => {
    if(err) throw err;
});