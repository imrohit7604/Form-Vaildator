const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmpassword=document.getElementById("confirmpassword");
const submitbutton=document.getElementById("submitbutton");
const form=document.getElementById("form");

//form submit listener
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(!checkRequired([username,email,password,confirmpassword]))
    {
    if( checkLength(username,3)&&
        checkMail(email)&&
        passwordValidator(password,7)&&
        confirmPasswordValidator(password,confirmpassword))
        alert("Submit Successfully")
    }
})

//check every input is empty or not 
const checkRequired=(inputArray)=>{
    let isRequired=false;
    inputArray.forEach(input=>{
        if(input.value.trim()===""){
            isRequired=true;
            vaild=false;
            showError(input,`${getFieldName(input)} is required `)
        }
        else
        showSuccess(input)
    })
    return isRequired  ;
}

//return field name with camel case
const getFieldName=(input)=>{
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

//set error border of input and set error
const showError=(input,message)=>{
    const formControl=input.parentElement;
    formControl.className="form-control error";
    const small=formControl.querySelector("small");
    small.innerText=message;
}

// set success border of input and set success
const showSuccess=(input)=>{
    const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check length of input
const checkLength=(input,min)=>{
    if(input.value.trim().length>=min){
        showSuccess(input)
        return true;
    }  
    else{
    showError(input,`${getFieldName(input)} must be atleast ${min} characters :(`)
    return false;
    }
}  

//check  vaild email
const checkMail=(input)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
      return true;
    } else {
      showError(input, 'Email is not valid');
      return false;
    }
}

//check password
const passwordValidator=(input,min)=>{
const paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
//if(paswd.test(input.value.trim())){
if(input.value.trim()>=min){
    showSuccess(input);
    return true;
}

else{
    showError(input,`${getFieldName(input)} must be  greater than ${min} charc :( `)
    return false;
}

//showError(input,`${getFieldName(input)} must between 7 to 15 characters which contain at least one numeric digit and a special character :( `)
}

//check confirm password is same as password
const confirmPasswordValidator=(passwordInput,confirmPasswordInput)=>{
    if(passwordInput.value.trim()===confirmPasswordInput.value.trim()){
        showSuccess(confirmPasswordInput);
        return true;
    }
    else{
        showError(confirmPasswordInput,`${getFieldName(confirmPasswordInput)} must be same as ${getFieldName(passwordInput)}`);
        return false;
    }
    

}