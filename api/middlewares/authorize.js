const jwt = require("jsonwebtoken");

//require environment variables
const {secret} = require("../Config/jwt.token");

function authorize(req, res, next){
    const authHeader = req.headers['auth-token'];
    if(authHeader == null) return res.status(401).send("Acess denied!");

    const acessToken = authHeader.split(' ')[1];
    //console.log("acessToken->" +acessToken);

    jwt.verify(acessToken, secret, (err, user) => {
        if(err) return res.sendStatus(403);
        console.log(user);
        
        next();
    });

    //console.log(acessToken);
}

module.exports = authorize;