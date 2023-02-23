const styles = getComputedStyle(document.body);
const highlightColor = styles.getPropertyValue("--highlight");
const dark_mode_button = document.getElementById("btn-darkmode");
var editorText;

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
    setDashboard();
}

for (let i = 0; i < Buttons.length; i++) {
    Buttons[i].addEventListener("click", function(event){   
        if ((Buttons[i] === Buttons[0]) && Buttons[i].style.background === ''){
            hideAllElements();
            setDashboard();
        } else if (Buttons[i] === Buttons[1] && Buttons[i].style.background === ''){
            hideAllElements();
            setTicketCreate();
        } else if (Buttons[i] === Buttons[2] && Buttons[i].style.background === ''){
            hideAllElements();
            setTickets();
        } 
        resetHighlight(); 
        Buttons[i].style.background = highlightColor;
    });
} 
function hideAllElements(){
    const container = document.getElementById("container");    
    if (container){
        document.body.removeChild(container);           
    }
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

document.body.addEventListener('click', function(event) {
    if (event.target.id === 'btn-save') {
      editorText = editor.value;
    }
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

    const container = document.createElement("div");
    container.setAttribute("class", "container");
    container.setAttribute("id", "container");

    const editorContainer = document.createElement("div");
    editorContainer.setAttribute("class", "editor-container");
    editorContainer.setAttribute("id", "editor-container");

    const editorTextarea = document.createElement("textarea");
    editorTextarea.setAttribute("id", "editor");
    editorTextarea.setAttribute("name", "editor");

    const buttoncontainer = document.createElement("div");
    buttoncontainer.setAttribute("class", "button-container");

    const saveButton = document.createElement("button");
    saveButton.setAttribute("class", "btn");
    saveButton.setAttribute("id", "btn-save");
    saveButton.textContent = "Speichern";
    
    document.body.appendChild(container);
   
    container.appendChild(editorContainer);
    editorContainer.appendChild(editorTextarea);
    editorContainer.appendChild(buttoncontainer);
    buttoncontainer.appendChild(saveButton);   

    const editor = Jodit.make("#editor", {
        saveHeightInStorage: true,
        allowResizeX: true,
        allowResizeY: true,
        resizer: true,
        height: 600,
        minHeight: 400,
        minWidth: 800,        
        maxHeight: 1000,
        maxWidth: 1500,
        saveSelectionOnBlur: true   
    });
    editor.focus();
}

function setTickets(){
//TODO: Ticketeinsicht erstellen
// Ansicht meiner Tickets
// Filterung einbauen z.b. nach Datum oder eine volltextsuche

}


