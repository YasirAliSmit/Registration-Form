const surname = document.getElementById('surname')
const firstName = document.getElementById('firstName')
const otherName = document.getElementById('otherName')
const gender = document.getElementsByClassName('gender')
const Nationality = document.getElementById('Nationality')
const Email = document.getElementById('Email')
const Password = document.getElementById('Password')
const CPassword = document.getElementById('CPassword')
const btn = document.getElementById('btn')
const btnOne = document.getElementById('btnOne')


const surnameReg = /^[a-z ,.'-]+$/i
const countryReg =/[a-zA-Z]{2,}/
const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const passwordReg =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

const checkData=()=>{
    if(surnameReg.test(surname.value)){
         if(surnameReg.test(firstName.value)){
            if(surnameReg.test(otherName.value)){
                if(countryReg.test(Nationality.value)){
                    if(emailReg.test(Email.value)){
                        if(passwordReg.test(Password.value)){
                            if(Password.value === CPassword.value){

                                swal("Good job!", " You Are Successfully Registered!", "success");
                            }else{
                                swal("Your Password Is Not Match Password ", "", "warning");    
                            }
                        }else{
                            swal("Your Password Is Not Correct Password Example :Testing193!", "", "warning");
                        }
                        
                    }else{
                        swal("Please Enter Your Email ", "", "warning");
                    }
                }else{
                    swal("Please Enter Your Nationality ", "", "warning");
                }
            }else{
                swal("Please Enter Your Other Name ", "", "warning");
            }
         }else{
            swal("Please Enter Your First Name ", "", "warning");
         }
    }else{
        swal("Please Enter Your Surname ", "", "warning");
    }   
}
const  fireFunt = () =>{
    
            location.reload()
        
    
}  




btnOne.addEventListener('click',fireFunt)