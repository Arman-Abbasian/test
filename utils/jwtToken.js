const jwt = require("jsonwebtoken");
const secret="ceec791ed2cdb28f6073af997d7469b8396f2d5ad2e4d1aad369f47ea6e5439a"
const jwtToken=(req,res,next)=>{
    const token=jwt.sign({id:"14785474",username:"ali4741"},secret,{expiresIn:"1h"});
    const verifyToken=jwt.verify(token,secret);
    const decodedData=jwt.decode(token)
    res.set('authorization',`bearer ${token}`)
    res.set('token', 'kjhdkf89q37453lajjfq23')
    res.status(200).json({
        status:res.statusCode,
        data:{
            token,
            verifyToken,
            decodedData
        }
    })
}
module.exports={jwtToken}
