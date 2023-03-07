//Buttons
const login_button = document.getElementById("ButtonLogin");
const password_reset = document.getElementById("passwortvergessen");
//PopUp
var PopUp = document.getElementById("PopUp");
//Textfelder
var EmailEdit = document.getElementById("inputEmail");
var PasswortEdit = document.getElementById("inputPassword");

password_reset.addEventListener("click", function (event) {
    PopUp_Text("Bitte wende dich an den Administrator");
})

function PopUp_Text(text) {
    PopUp.textContent = text;
    PopUp.classList.toggle("popupVisible");
}
function LogIn() {
    if ((EmailEdit.value == "admin@spdata.de") && (PasswortEdit.value == "admin")) {
        window.location.href = "/View/admin.html";
    } else if ((EmailEdit.value == "benutzer@spdata.de") && (PasswortEdit.value == "benutzer")) {
        window.location.href = "/View/user.html";
    } else {
        PopUp_Text("Die Anmeldedaten sind falsch");
    }
}

login_button.addEventListener("click", function (event) {
    event.preventDefault();
    LogIn();
});

EmailEdit.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        LogIn();
    }
});

PasswortEdit.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        LogIn();
    }
});
