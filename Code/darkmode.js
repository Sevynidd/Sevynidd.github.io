//Icons
var icons = [
    document.getElementById("btn-darkmode-icon"),
    document.getElementById("IconPasswordVisible"),
    document.getElementById("btn-dashboard"),
    document.getElementById("btn-ticketCreate"),
    document.getElementById("btn-tickets")
    
]

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

function toggleDarkmode(){
    // Icon des Darkmode-Button entsprechend ändern
    if (!document.body.classList.contains("dark_mode")){
        if (icons[0]){
            icons[0].classList.replace("fa-moon","fa-sun"); 
            saveDarkmode("true");   
        }
    }
    else {
        if (icons[0]){
            icons[0].classList.replace("fa-sun","fa-moon");
            saveDarkmode("false");  
        }
    }    
    document.body.classList.toggle("dark_mode")
    // Die Icons inversen sodass sie weiss sind wenn der Darkmode aktiv ist
    if (icons[0]){
        icons[0].classList.toggle("fa-inverse");
    }
    if (icons[1]){
        icons[1].classList.toggle("fa-inverse");   
    }  
    if (icons[2]){
        icons[2].classList.toggle("fa-inverse");
    }
    if (icons[3]){
        icons[3].classList.toggle("fa-inverse");   
    } 
    if (icons[4]){
        icons[4].classList.toggle("fa-inverse");   
    } 
}

function saveDarkmode(value) {
    localStorage.setItem('darkmode', value);
}