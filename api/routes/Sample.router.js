const router = require("express").Router();

//import authorize middleare
const authorize = require("../Middlewares/authorize");

router.get("/user/:id", authorize, (req,res) => {
    
    res.send("User");
});



module.exports = router;