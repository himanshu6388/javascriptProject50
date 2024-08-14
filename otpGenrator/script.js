
function otpGenrator(length = 6){
    let characters = '0123456789';
    let otp = '';
    for(let i=0;i < length; i++){
        otp += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    document.getElementById('otp').innerText = otp;
}


