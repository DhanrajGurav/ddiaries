function generatorOTP(len){
    let otp = "";
    for(let i=0;i<len;i++){
        otp+=Math.floor(Math.random()*10).toString();
    }
    return otp;

}
console.log(generatorOTP(10))