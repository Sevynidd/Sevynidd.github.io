const styles = getComputedStyle(document.body);
const highlightColor = styles.getPropertyValue("--highlight");
const dark_mode_button = document.getElementById("btn-darkmode");
const saveButton = document.getElementById("btn-save");
const editor = Jodit.make("#editor", {
    saveHeightInStorage: true,
    height: 500,
    maxHeight: 800,
    maxWidth: 1000,
    autofocus: true,
    saveSelectionOnBlur: true   
});


//Liste der Buttons für funktionalitäten auf der Navbar, DarkmodeButton ausgeschlossen
var Buttons = [
    document.getElementById("btn-dashboard"),
    document.getElementById("btn-ticketCreate"),
    document.getElementById("btn-tickets")
];

var ButtonsText = [
    "Dashboard",
    "Ticket erstellen",
    "Tickets"
];

window.onload = function() {
    hideAllElements(); 
    getDarkMode();
    setButtonText();
    resetHighlight();
    Buttons[0].style.background = highlightColor;
    setDashboard();
}

for (let i = 0; i < Buttons.length; i++) {
    Buttons[i].addEventListener("click", function(event){  
        resetHighlight();  
        hideAllElements();   
        Buttons[i].style.background = highlightColor;
        if (Buttons[i] === Buttons[0]){
            setDashboard();
        } else if (Buttons[i] === Buttons[1]){
            setTicketCreate();
        } else if (Buttons[i] === Buttons[2]){
            setTickets();
        } 
    });
} 
function hideAllElements(){
    saveButton.style.visibility = "hidden";
    document.getElementById("editor-container").classList.add("hidden");
} 

function resetHighlight(){    
    for (var i = 0; i < Buttons.length; i++) {
        Buttons[i].style.background = '';
    } 
}

function setButtonText(){
    for (var i = 0; i < Buttons.length; i++) {
        Buttons[i].querySelector('#btn-text').textContent = ButtonsText[i];
    }
}

dark_mode_button.addEventListener("click", function(event){
    toggleDarkmode();
});

function setDashboard(){
//TODO: Dashboard setzen, heißt die aktuellen tickets und so
    
}

function setTicketCreate(){
//TODO: Ticket erstellung einrichten,
// ein großes Textfeld in dem gearbeitet werden kann mit allen standard formatierungsmöglichkeiten
// z.b. wie bei Vemas
// Eine Betreffzeile
// Speichern
// Abbrechen 

    
    if (document.getElementById("editor-container").classList.contains("hidden")){
        document.getElementById("editor-container").classList.toggle("hidden");
        
    }
    saveButton.style.visibility = "visible";


}

function setTickets(){
//TODO: Ticketeinsicht erstellen
// Ansicht meiner Tickets
// Filterung einbauen z.b. nach Datum oder eine volltextsuche

}


