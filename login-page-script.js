const submit = document.getElementById("submit-button")
submit.addEventListener("click", validate_form)


function validate_username(username){
    
    var invalid_username = document.getElementById("invalid-username")

    if(username.length <= 0 || username.length > 20){
        invalid_username.style.opacity = 100
        return false
    }

    invalid_username.style.opacity = 0
    return true
}

function validate_password(password){

    var invalid_password = document.getElementById("invalid-password")

    if(password.length < 8){
        invalid_password.style.opacity = 100
        return false
    }

    invalid_password.style.opacity = 0
    return true
}

function validate_form(e){
    e.preventDefault();
    
    var get_username = document.getElementById("username").value
    var get_password = document.getElementById("password").value

    var check_user = validate_username(get_username)
    var check_pass = validate_password(get_password)

    if(check_user == true && check_pass == true){
        document.location.href = "register-page-index.html"
    }
    
}

function open_home_page(){
    document.location.href = "#"
}