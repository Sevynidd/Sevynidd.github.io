window.onload = function() {
    getDarkMode(); 
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

function saveDarkmode(value) {
    value = value === "true"
    localStorage.setItem('darkmode', value);
}