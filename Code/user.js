const styles = getComputedStyle(document.body);
const highlightColor = styles.getPropertyValue("--highlight");
const dark_mode_button = document.getElementById("btn-darkmode");
const saveButton = document.getElementById("btn-save");
const editor = Jodit.make("#editor", {
    iframe: true,
    saveHeightInStorage: true,
    height: 500, 
    maxHeight: 800,
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
    getDarkMode();
    setButtonText();
    resetHighlight();
    Buttons[0].style.background = highlightColor;
}

for (let i = 0; i < Buttons.length; i++) {
    Buttons[i].addEventListener("click", function(event){  
        resetHighlight();     
        Buttons[i].style.background = highlightColor;
 
    });
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
    editor.value;
})

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
}

function setTickets(){
//TODO: Ticketeinsicht erstellen
// Ansicht meiner Tickets
// Filterung einbauen z.b. nach Datum oder eine volltextsuche

}


