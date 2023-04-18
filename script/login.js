const loginButton = document.getElementById("login-button");
const user = document.getElementById("user");
const password = document.getElementById("password");

loginButton.addEventListener("click", ()=>{
    if (user.value == "Usuario Inicial" && password.value == "colegio12345") {
        location.href = "main.html";
    }
});