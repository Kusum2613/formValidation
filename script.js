var nameError = document.querySelector('#name-error')
var phoneError = document.querySelector('#phone-error')
var emailError = document.querySelector('#email-error')
var messageError = document.querySelector('#message-error')
var submitError = document.querySelector('#submit-error')
function validateName(){
    var name =document.querySelector('#contact-name').value
    if (name.length===0){
        nameError.innerHTML="Name is required"
        return false
    }
    if(!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        nameError.innerHTML="write full Name "
        return false
    }
    nameError.innerHTML='<i class="fa-sharp fa-regular fa-circle-check"></i>';
    return true

}
function validatephone(){
    var phone=document.querySelector('#contact-phone').value
    if(phone.length===0){
        phoneError.innerHTML="please write phone nos"
        return false
    }if(phone.length===10){
    phoneError.innerHTML='<i class="fa-sharp fa-regular fa-circle-check"></i>';
    return true}
    if(phone.length>0 && phone.length<10){
        phoneError.innerHTML="please write valid phone nos"
    }
}
function validateEmail(){
    var email=document.querySelector('#contact-email').value
    if(email.length===0){
        emailError.innerHTML="please write mail"
        return false
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = "Enter a valid email address";
        return false;
    }
    emailError.innerHTML='<i class="fa-sharp fa-regular fa-circle-check"></i>';
    return true

}
function validateMsg(){
    var msg=document.querySelector("#contact-msg").value
    var messageError = document.querySelector("#message-error");
    var required =30
    left =required -msg.length
    if((required - msg.length)>0){
        messageError.innerHTML= left+"atlest 30 character required"
        return false
    }
    messageError.innerHTML='<i class="fa-sharp fa-regular fa-circle-check"></i>';
    return true

}
function  validateForm(){
    var submitError = document.querySelector('#submit-error');
    if(!validateName() || !validateEmail() || !validatephone() || !validateMsg()){
        submitError.style.display='block'
        submitError.innerHTML='please fix error to submit'
        
        setTimeout(function(){submitError.style.display='none';},3000);
        return false
    }
    submitError.style.display = 'none';
   alert("Form submitted successfully!");
   return true;
    
}