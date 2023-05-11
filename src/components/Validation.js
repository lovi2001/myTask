
const Validation = (values) => {
    let errors = {};
    
    if(!values.email){
        errors.email = "Email Required";
    }
    else if(values.email.length <= 4){
        errors.email = "Invalid Email"
    }

    if(!values.password){
        errors.password = "Password Required";
    }
    else if(values.password.length < 8){
        errors.password = "Password must be more than 8 values";
    }
    
    if((values.email!=='' && values.password!=='') && (Object.keys(errors).length===0)){
        alert("Login Successfully!");
    }
    return errors;
}
export default Validation;