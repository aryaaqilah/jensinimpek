const submit = document.getElementById("login-form-button");
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

function validate_form(e){
    e.preventDefault();
    var username = document.getElementById("login-form-user");
    var password = document.getElementById("login-form-pass");

    var is_username = validate_username(username.value);
    var is_password = validate_password(password.value);
    
    if(is_username == true && is_password == true){
        alert("Success");
        document.location.href = "#";
    }
}