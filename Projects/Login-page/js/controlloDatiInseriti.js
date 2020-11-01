/*
    Controllo i dati inseriti per l'username
*/

function checkUsername() {
    var username = elUsername.value;
    if(username === "") {
        messageUsername.className = "warning";
        messageUsername.textContent = "Empty space";
    } else {
        messageUsername.textContent = "";
    }
}

/*
    Controllo i dati inseriti per la password
*/

function checkPassword() {
    var password = elPassword.value;
    if(password === "") {
        messagePassword.className = "warning";
        messagePassword.textContent = "Empty space";
    } else {
        messagePassword.textContent = "";
    }
}


var elUsername = document.getElementById("username");
var messageUsername = document.getElementById("feedbackUsername");

var elPassword = document.getElementById("password");
var messagePassword = document.getElementById("feedbackPassword");

elUsername.addEventListener("blur", checkUsername, false);

elPassword.addEventListener("blur", checkPassword, false);