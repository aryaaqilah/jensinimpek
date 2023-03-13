const submit = document.getElementById("register-form-button");
submit.addEventListener("click", validate_form);

function validate_username(username){
    var alertInvalid = document.getElementById("username-invalid-alert");

    if(username.length == 0 || username.length > 20){
        alertInvalid.style.opacity = 100;
        return false;
    }

    alertInvalid.style.opacity = 0;
    return true;
}

function validate_password(password){
    var alertInvalid = document.getElementById("password-invalid-alert");

    if(password.length == 0 || password.length < 8){
        alertInvalid.style.opacity = 100;
        return false;
    }

    alertInvalid.style.opacity = 0;
    return true;
}

function validate_email(email){
    var is_valid = true;
    var alertInvalid = document.getElementById("email-invalid-alert");

    var symbol = email.indexOf("@");
    var dot = email.indexOf(".");
    if(symbol < 1) is_valid = false;
    if(dot == email.length - 1) is_valid = false;    

    if(is_valid == false){
        alertInvalid.style.opacity = 100;
        return false;
    }

    alertInvalid.style.opacity = 0;
    return true;
}

function validate_age(age){
    var alertInvalid = document.getElementById("age-invalid-alert");

    if(age < 13){
        alertInvalid.style.opacity = 100;
        return false;
    }
    
    alertInvalid.style.opacity = 0;
    return true;
}

function validate_agreement(agreement){
    var txt = document.getElementById("agreement-txt");

    if(!agreement.checked){
        txt.style.color = "red";
        txt.style.textDecoration = "underline";
        return false;
    }
    
    txt.style.color = "white";
    txt.style.textDecoration = "none";
    return true;
}

function validate_form(e){
    var username = document.getElementById("register-form-user");
    var password = document.getElementById("register-form-pass");
    var email = document.getElementById("register-form-email");
    var age = document.getElementById("register-form-age");
    var agreement = document.getElementById("register-form-agreement");

    e.preventDefault();
    var is_username = validate_username(username.value);
    var is_password = validate_password(password.value);
    var is_email = validate_email(email.value);
    var is_age = validate_age(age.value);
    var is_agreement = validate_agreement(agreement);

    if(is_username == true && is_password == true && is_email == true && is_age == true && is_agreement == true){
        alert("Success");
        document.location.href = "#";
    }
}