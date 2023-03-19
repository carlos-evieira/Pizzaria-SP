
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

const formRegister = document.getElementById('form-register')
const usernameRegister = document.getElementById('username-register')
const emailRegister = document.getElementById('email-register')
const passwordRegister = document.getElementById('password-register')

// console.log(localStorage.getItem('localStorage'))

formRegister.addEventListener('submit', (e)=>{
    e.preventDefault()
//     sessionStorage.setItem('sessionStorage', 'true')
//   localStorage.setItem('localStorage', 'true')
    checkInputs()
})


function checkInputs(){
    const usernameRegisterValue = usernameRegister.value.trim()
    const emailRegisterValue = emailRegister.value.trim()
    const passwordRegisterValue = passwordRegister.value.trim()

    if(usernameRegisterValue === ""){
        errorValidation(usernameRegister, "Este campo é obrigatório")
    }else{
        successValidation(usernameRegister)
    }

    if(emailRegisterValue === ""){
        errorValidation(emailRegister, "Este campo é obrigatório")
    }else if(!emailRegister.checkValidity()){
        errorValidation(emailRegister, "Este VALIDO")

    }
    else{
        successValidation(emailRegister)
    }

    if(passwordRegisterValue === ""){
        errorValidation(passwordRegister, "Este campo é obrigatório")
    }else if(passwordRegisterValue.length <6){
        errorValidation(passwordRegister, "A senha precisa ter mais de 6 dígitos")
    }
    else{
        successValidation(passwordRegister)
    }

    






    function errorValidation(input, message){
        const formControl = input.parentElement
        const small = formControl.querySelector('small')

        small.innerText= message

        formControl.className = 'form-control error'
    }

    function successValidation(input){
        const formControl = input.parentElement


        formControl.className = 'form-control success'
    }

    
}