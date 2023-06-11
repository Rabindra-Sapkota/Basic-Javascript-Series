function validate_form(){
    if (validate_name() && validate_user_dedication() && validate_continent() && validate_course() &&
        validate_phone() && validate_gender() && validate_email() && validate_password() ){
        alert("Form data validated.")
        return true
     }
     return false
}


function validate_name(){
    var user_name = document.getElementById("user_name").value
    var user_regex = /^[A-Za-z ]+$/;

    if ( !user_regex.test(user_name)){
        alert("Username should have only alphabet separated by space");
        document.getElementById("user_name").focus();
        return false;
    }
    return true;
}


function validate_email(){
    var email = document.getElementById("user_email").value;
    var email_regex = /^[a-z0-9]+@[a-z]+\.[a-z]{1,3}$/;
    if (!(email_regex.test(email))){
        alert ("Invalid Email");
        document.getElementById("user_email").focus();
        return false;
    }
    return true;

}


function validate_phone(){
    var phone = document.getElementById("user_phone").value;
    var phone_regex = /^9\d{9}$/;
 
    if (!phone_regex.test(phone)){
        alert("Invalid Phone Number. It should start with 9 and should be of 10 digit");
        document.getElementById("user_phone").focus();
        return false;
    }
    return true;
}


function validate_password(){
    var password = document.getElementById("user_password").value;
    password_regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[+=@#%$^*/-]).{8,}$/;
    if (!password_regex.test(password)){
        alert("Password Policy failed. Password should have lowercase, uppercase, digit, special character and atleast 8 character long")
        document.getElementById("user_password").focus();
        return false;
    }
    return true;
}


function validate_gender(){
    // Result will be array as radio is grouped by name
    var gender_array = document.login_form.gender;
    for (iterator=0;iterator<gender_array.length;iterator++){
        if (gender_array[iterator].checked){
            return true;
        }
    }
    alert("Please select the gender");
    return false;
}


function validate_course(){
    // Valid if one of the data is checked
    if (document.getElementById("python").checked || document.getElementById("aws").checked || 
    document.getElementById("js").checked){
        return true
    }else{
        alert ("Please check at least one of the courses");
    }
}


function validate_continent(){
    var continent = document.getElementById("user_continent").value;
    if (continent == ''){
        alert("Please select a continent from dropdown");
        document.getElementById("user_continent").focus();
        return false;
    }
    return true;
}


function validate_user_dedication(){
    var user_dedication = document.getElementById("user_dedication").value;
    var user_dedication_regex = /^[1-9]\d*$/;
    if (!user_dedication_regex.test(user_dedication)){
        alert("Dedication hour should be positive number");
        document.getElementById("user_dedication").focus();
        return false;
    }
    return true;
}
