function checkPassword() {
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("confirm").value;
    var error = document.getElementById("error");

    if (password1 === '' || password2 === '') {
        error.textContent = "Please enter both passwords";
    }
    else if (password1 !== password2) {
        error.textContent = "Passwords do not match";
    }
    else {
        error.textContent = "";
    }
}