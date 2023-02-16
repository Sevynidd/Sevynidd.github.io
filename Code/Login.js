//Buttons
const login_button = document.getElementById("ButtonLogin");
const password_reset = document.getElementById("passwortvergessen");
const password_visible_button = document.getElementById("btn-password-visible");
const dark_mode_button = document.getElementById("btn-darkmode");
//Icons
var dark_mode_icon = document.getElementById("btn-darkmode-icon");
var password_visible_icon = document.getElementById("IconPasswordVisible");
//PopUp
var PopUp = document.getElementById("PopUp");
//Textfelder
var BenutzerEdit = document.getElementById("EditBenutzername");
var PasswortEdit = document.getElementById("PasswortEditPasswort");

//DarkMode und Icon entsprechend ändern - Listener und die Funktion
dark_mode_button.addEventListener("click", function(event){
    toggleDarkmode();
});

function toggleDarkmode(){
    if (!document.body.classList.contains("dark_mode")){
        //Anschalten
        document.body.classList.toggle("dark_mode");
        dark_mode_icon.classList.replace("fa-moon","fa-sun");  
        dark_mode_icon.classList.toggle("fa-inverse");
        password_visible_icon.classList.toggle("fa-inverse");   
        saveDarkmode("true");
    } else {
        //Ausschalten
        document.body.classList.toggle("dark_mode")
        dark_mode_icon.classList.replace("fa-sun","fa-moon"); 
        dark_mode_icon.classList.toggle("fa-inverse");
        password_visible_icon.classList.toggle("fa-inverse");       
        saveDarkmode("false");    
    }
}
function togglePasswordVisibility(){
    var passwordFieldInput = document.getElementById("PasswortEditPasswort");
    if (passwordFieldInput.type === "password") {
        passwordFieldInput.type = "text";
        password_visible_icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        passwordFieldInput.type = "password";
        password_visible_icon.classList.replace("fa-eye-slash", "fa-eye");    
    }
}

password_visible_button.addEventListener("click", function(event){
    event.preventDefault();
    togglePasswordVisibility();
});

password_reset.addEventListener("click", function(event){
    PopUp_Text("Bitte wende dich an den Administrator");
});

function saveDarkmode(value) {
    value = value === "true"
    localStorage.setItem('darkmode', value);
}
  
function getDarkMode() {
    const value = localStorage.getItem('darkmode');
    if (value === 'true') {
        toggleDarkmode();
        return true;
    } else if (value === 'false') {
        return false;
    } else {
        return null;
    }
}
  
window.onload = function() {
    getDarkMode(); 
}

function PopUp_Text(text){
    PopUp.textContent = text;    
    if (PopUp.classList.contains("popupVisible")){
        PopUp.classList.toggle("popupVisible"); 
        PopUp.classList.toggle("popupVisible"); 
    } else{
        PopUp.classList.toggle("popupVisible"); 
    } 
}
function LogIn(){
    if ((BenutzerEdit.value == "admin@spdata.de") && (PasswortEdit.value == "admin")) {
        window.location.href = "/view/admin.html";
    } else if ((BenutzerEdit.value == "benutzer@spdata.de") && (PasswortEdit.value == "benutzer")){
        window.location.href = "/view/user.html"; 
    } else {
        PopUp_Text("Die Anmeldedaten sind falsch");
    }
}

login_button.addEventListener("click", function(event){
    event.preventDefault();
    LogIn();
});

BenutzerEdit.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        LogIn();
    }
});

PasswortEdit.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        LogIn();
    }
});
