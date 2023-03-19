
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})


// validação de formulário

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


// trazendo imagem 

const inputFile = document.getElementById('picture')
const pictureImage = document.querySelector('.picture-image')
const pictureTxt = `Escolha sua foto <br>
 <p style="text-align:center; font-size: 40px">\u{1F4F7}</p>`

pictureImage.innerHTML=pictureTxt

inputFile.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.addEventListener("load", function (e) {
        const readerTarget = e.target;
  
        const img = document.createElement("img");
        img.src = readerTarget.result;
        img.classList.add("picture-img");
        
        pictureImage.innerHTML = "";
        pictureImage.appendChild(img);
        img.style.maxWidth="100%";
      });
  
      reader.readAsDataURL(file);
    } else {
      pictureImage.innerHTML = pictureImageTxt;
    }
  });