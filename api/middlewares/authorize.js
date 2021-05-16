const jwt = require("jsonwebtoken");

//require environment variables
const {secret} = require("../Config/jwt.token");

function authorize(req, res, next){
    const authHeader = req.headers['authorization'];
    if(authHeader == null) return res.status(401).send("Acess denied!");

    const acessToken = authHeader.split(' ')[1];
    //console.log("acessToken->" +acessToken);

    jwt.verify(acessToken, secret, (err, user) => {
        if(err) return res.sendStatus(403);
                
        res.locals.id = user.id;
        res.locals.name = user.name;
        res.locals.email = user.email;
        
        next();
    });

    //console.log(acessToken);
}

module.exports = authorize;