const regexEmail= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
const regexPassword=/\d+/;

const validation = (userData)=> {
    const errors={};
    if (!regexEmail.test(userData.email)){
         errors.email='El email debe tener un formato de correo correcto'
    }
    if (!userData.email) {
        errors.email='debe ingresar un email';
    }
    if (userData.email.length >35) {
        errors.email='el email no debe tener más de 35 caracteres';
    }
    if (!regexPassword.test(userData.password)){
        errors.password='El password debe tener por lo menos un número';
    }    
    if (userData.password.length<6 || userData.password.length>10){
        errors.password='El password debe tener entre 6 y 10 caracteres';    
    }    
    return errors;     
}

export default validation;