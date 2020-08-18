const jwt = require("jsonwebtoken")
const authConfig = require("../config/auth.json");

module.exports =  (req,res,next) => {
    const { authorization } = req.headers;

    if(!authorization){
        res.status("401").send({erro: "você não colocou o token"})

    }

    const { Bearer, token } = authorization.split(" ");

    if(!token){
         res.status(401).send({erro: "token mal formatado"});

    }
    try{
    const retorno = jwt.verify(token, authConfig.secret);

    req.alunoId = retorno.alunoId;
    return next();
    }
    catch{
        res.status(401).send({erro: "token inválido"})
    }


    return null;



}