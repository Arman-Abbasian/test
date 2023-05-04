const crypto=require("crypto");
//create a hash with pbkdf2 method in crypto package
function hashPasswordpbkdf2(password){
    const salt=crypto.randomBytes(16).toString("hex");
    const hash=crypto.pbkdf2Sync(password,salt,1000,64,"sha512").toString("hex");
    const newHash=`$2s.${salt}.${hash}`;
    return newHash
}
//create a hash with creareHash method in crypto package
function hashPasswordCreateHash(password){
    const hash=crypto.createHash("sha512",{encoding:"utf-8"}).update(password).digest("base64")
    const newHash=`$2s.${hash}.$2s`;
    return newHash
}
//create a hash with createHmac method in crypto package
function hashPasswordCreateHmac(password){
    const secret=crypto.randomBytes(16).toString("hex");
    const hash=crypto.createHmac("sha512",secret).update(password).digest("base64")
    const newHash=`$2s.${hash}.$2s`;
    return newHash
}
//verify hash with pbkdf2 method in crypto package
function verifyHashPasswordepbkdf2(password,hashPassword){
    
    const salt=hashPassword.split(".")[1];
     const hash=crypto.pbkdf2Sync(password,salt,1000,64,"sha512").toString("hex");
    const newHash=`$2s.${salt}.${hash}`;
    return(newHash==hashPassword)
    
}
//verify hash with createHash method in crypto package
function verifyHashPasswordcreateHash(password,hashPassword){
    const hash=crypto.createHash("sha512",{encoding:"utf-8"}).update(password).digest("base64")
    const newHash=`$2s.${hash}.$2s`;
    return(newHash==hashPassword)
}
//verify hash with createHmac method in crypto package
function verifyHashPasswordcreateHmac(password,hashPassword){
    const secret=crypto.randomBytes(16).toString("hex");
    const hash=crypto.createHmac("sha512",secret).update(password).digest("base64")
    const newHash=`$2s.${hash}.$2s`;
    console.log(newHash)
    console.log(hashPassword)
    return(newHash==hashPassword)
}
module.exports={
    hashPasswordpbkdf2,
    hashPasswordCreateHash,
    hashPasswordCreateHmac,
    verifyHashPasswordepbkdf2,
    verifyHashPasswordcreateHash,
    verifyHashPasswordcreateHmac
}