const submit = document.getElementById("submit-button")
submit.addEventListener("click", validate_form)

function validate_username(username){
    
    var invalid_username = document.getElementById("invalid-username")

    if(username.length <= 0){
        invalid_username.innerHTML = "*username cannot be empty"
        invalid_username.style.opacity = 100
        return false
    }

    if(username.length > 20){
        invalid_username.innerHTML = "*username must be less than 20 chars"
        invalid_username.style.opacity = 100
        return false
    }

    invalid_username.style.opacity = 0
    return true
}

function check_pass(password){
    count_num = 0
    count_lower = 0

    for(i = 0; i < password.length; i++){
        if(isNaN(password[i]) == true){
            count_num++
        } else if(password[i] == password[i].toLowerCase()){
            count_lower++
        }
    }

    if(count_num >= 1 && count_lower >= 1){
        return true
    }

    return false
}

function validate_password(password){

    var invalid_password = document.getElementById("invalid-password")

    if(password.length <= 0){
        invalid_password.innerHTML = "*password cannot be empty"
        invalid_password.style.opacity = 100
        return false
    }

    if(password.length <= 8){
        invalid_password.innerHTML = "*password cannot be less than 8 chars"
        invalid_password.style.opacity = 100
        return false
    }

    if(check_pass(password) == false){
        invalid_password.innerHTML = "*password must contain atleast 1 lowercase and 1 number"
        invalid_password.style.opacity = 100
        return false
    }

    invalid_password.style.opacity = 0
    return true
}

function validate_email(email){
    var invalid_email = document.getElementById("invalid-email")

    if(!email.includes('@gmail.com') && !email.includes('@yahoo.com') && !email.includes('@outlook.com')){
        invalid_email.style.opacity = 100
        return false
    }

    invalid_email.style.opacity = 0
    return true
}

function validate_age(age){
    var invalid_age = document.getElementById("invalid-age")

    if(age < 12){
        invalid_age.style.opacity = 100
        return false
    }

    invalid_age.style.opacity = 0
    return true
}

function validate_terms(terms){
    var terms_txt = document.getElementById("terms-txt")

    if(!terms.checked){
        terms_txt.style.color = 'red'
        return false
    }

    terms_txt.style.color = 'white'
    return true
}

function validate_form(e){
    e.preventDefault()

    var get_username = document.getElementById("username").value
    var get_password = document.getElementById("password").value
    var get_email = document.getElementById("email").value
    var get_age = document.getElementById("age").value
    var get_terms = document.getElementById("terms")

    var check_user = validate_username(get_username)
    var check_pass = validate_password(get_password)
    var check_email = validate_email(get_email)
    var check_age = validate_age(get_age)
    var check_terms = validate_terms(get_terms)

    if(check_user == true && check_pass == true && check_email == true && check_age == true && check_terms == true){
        document.location.href = "login-page-index.html"
    }
}

function open_login_page(){
    document.location.href = "login-page-index.html"
}