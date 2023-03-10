//Buttons
const login_button = document.getElementById("ButtonLogin");
//Textfelder
var EmailEdit = document.getElementById("inputEmail");
var PasswortEdit = document.getElementById("inputPassword");

function LogIn() {
    var EmailEditInhalt = EmailEdit.value;
    var PasswortEditInhalt = PasswortEdit.value;

    if ((EmailEditInhalt == "admin@spdata.de") && (PasswortEditInhalt == "admin")) {
        sessionStorage.setItem("Benutzername", EmailEditInhalt.split("@")[0]);
        window.location.href = "/View/admin.html";
    } else if ((EmailEditInhalt == "benutzer@spdata.de") && (PasswortEditInhalt == "benutzer")) {
        sessionStorage.setItem("Benutzername", EmailEditInhalt.split("@")[0]);
        window.location.href = "/View/user.html";
    } else {
        const form = document.getElementById("container-error");
        if (form.innerHTML === "") {
            form.innerHTML += '<div class="alert alert-danger alert-dismissible fade show"><strong>Fehler!</strong> Die Anmeldedaten sind falsch. <button type="button" class="btn-close" data-bs-dismiss="alert"></button> </div>';  
        }
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

$(document).ready(function() {
    $("#password a").on('click', function(event) {
        event.preventDefault();
        if($('#password input').attr("type") == "text"){
            $('#password input').attr('type', 'password');
            $('#password i').addClass( "fa-eye-slash" );
            $('#password i').removeClass( "fa-eye" );
        }else if($('#password input').attr("type") == "password"){
            $('#password input').attr('type', 'text');
            $('#password i').removeClass( "fa-eye-slash" );
            $('#password i').addClass( "fa-eye" );
        }
    });
});
