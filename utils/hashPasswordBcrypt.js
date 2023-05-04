const bcrypt=require("bcrypt")
//create a hash with bcrypt method in  bcrypt package
function hashPasswordbcrypt(password){
   const salt=bcrypt.genSaltSync(10);
   const hash=bcrypt.hashSync(password,salt);
   return hash
}
function verifyPasswordbcrypt(password,hashPassword){
    return bcrypt.compareSync(password,hashPassword)
 }
 module.exports={
    hashPasswordbcrypt,
    verifyPasswordbcrypt
 }