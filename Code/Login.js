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


//DarkMode und Icon entsprechend ändern - Listener und die Funktion
dark_mode_button.addEventListener("click", function(event){
    document.body.classList.toggle("dark_mode");
    changeIconDarkMode(dark_mode_icon);
    changeIconPasswordVisible(password_visible_icon);
});

function changeIconDarkMode(icon){
    if (icon.classList.contains("fa-moon")) {
        icon.classList.replace("fa-moon","fa-sun");
        icon.classList.toggle("fa-inverse");        
        saveDarkmode("true");
    } else if (icon.classList.contains("fa-sun")) {
        icon.classList.replace("fa-sun","fa-moon");     
        icon.classList.toggle("fa-inverse");      
        saveDarkmode("false");    
    }
}

function changeIconPasswordVisible(icon){
    icon.classList.toggle("fa-inverse");    
}

password_visible_button.addEventListener("click", function(event){
    var passwordFieldInput = document.getElementById("PasswortEditPasswort");
    event.preventDefault();
    if (passwordFieldInput.type === "password") {
        passwordFieldInput.type = "text";
        password_visible_icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        passwordFieldInput.type = "password";
        password_visible_icon.classList.replace("fa-eye-slash", "fa-eye");    
    }
});

password_reset.addEventListener("click", function(event){
    PopUp_Text("Bitte wende dich an den Administrator");
});

function saveDarkmode(value) {
    localStorage.setItem('darkmode', value);
    if (value) {
      document.body.classList.add('dark_mode');
    } else {
      document.body.classList.remove('dark_mode');
    }
  }
  
function getDarkMode() {
    const value = localStorage.getItem('darkmode');
    if (value === 'true') {
        document.body.classList.add('dark_mode');
        return true;
    } else {
        document.body.classList.remove('dark_mode');
        return false;
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
    var BenutzerEdit = document.getElementById("EditBenutzername");
    var PasswortEdit = document.getElementById("PasswortEditPasswort");
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


