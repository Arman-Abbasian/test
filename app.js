const express=require("express");
const { hashPasswordpbkdf2, hashPasswordCreateHash, hashPasswordCreateHmac, verifyHashPasswordepbkdf2, verifyHashPasswordcreateHash, verifyHashPasswordcreateHmac } = require("./utils/hashPasswordCrypto");
const { hashPasswordbcrypt, verifyPasswordbcrypt } = require("./utils/hashPasswordBcrypt");
const app=express();
app.use("/crypto",(req,res,next)=>{
   const hashPassword1= hashPasswordpbkdf2("12345");
   const hashPassword2= hashPasswordCreateHash("12345");
   const hashPassword3= hashPasswordCreateHmac("12345");
   const verifyHashPassword1=verifyHashPasswordepbkdf2("12345",hashPassword1)
   const verifyHashPassword2=verifyHashPasswordcreateHash("12345",hashPassword2)
   const verifyHashPassword3=verifyHashPasswordcreateHmac("12345",hashPassword3)
   res.send(`
   pssword hash with pbkdf2sync mehtod: ${hashPassword1}\n
   pssword hash with createHash mehtod: ${hashPassword2}\n
   pssword hash with createHmac mehtod: ${hashPassword3}\n
   pssword verify with pbkdf2sync mehtod: ${verifyHashPassword1}\n
   pssword verify with createHash mehtod: ${verifyHashPassword2}\n
   pssword verify with createHmac mehtod: ${verifyHashPassword3}\n
   `)
});
app.use("/bcrypt",(req,res,next)=>{
    const hashPassword= hashPasswordbcrypt("12345");
    const verifyHashPassword=verifyPasswordbcrypt("12345",hashPassword)

    res.send(`
    pssword hash with bcrypt mehtod: ${hashPassword}\n
    pssword verify with bcrypt mehtod: ${verifyHashPassword}\n
    `)
 });
app.listen(3000,()=>{
    console.log("web server run on port 3000")
})