const router = require("express").Router();

//import controllers
const Authenticate  = require("../Controllers/Authentication.controller"); 

router.post("/register", Authenticate.register);

router.post("/login", Authenticate.login);



module.exports = router;