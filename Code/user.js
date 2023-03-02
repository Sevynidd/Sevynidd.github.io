const styles = getComputedStyle(document.body);
const highlightColor = styles.getPropertyValue("--highlight");
var editorText, betreffText;

//Liste der Buttons für funktionalitäten auf der Navbar, DarkmodeButton ausgeschlossen
var Buttons = [
    document.getElementById("btn-dashboard"),
    document.getElementById("btn-ticketCreate"),
    document.getElementById("btn-tickets")
];

window.onload = function () {
    resetHighlight();
    Buttons[0].style.background = highlightColor;
    setDashboard();
}

for (let i = 0; i < Buttons.length; i++) {
    Buttons[i].addEventListener("click", function (event) {
        if ((Buttons[i] === Buttons[0]) && Buttons[i].style.background === '') {
            setDashboard();
        } else if (Buttons[i] === Buttons[1] && Buttons[i].style.background === '') {
            setTicketCreate();
        } else if (Buttons[i] === Buttons[2] && Buttons[i].style.background === '') {
            setTickets();
        }
        resetHighlight();
        Buttons[i].style.background = highlightColor;
    });
}


function resetHighlight() {
    for (var i = 0; i < Buttons.length; i++) {
        Buttons[i].style.background = '';
    }
}

document.body.addEventListener('click', function (event) {
    if (event.target.id === 'btn-save') {
        editorText = editor.value;
        betreffText = betreffFeld.value;
    }
});

function createPriorityDropDown() {  
    const priorityDD = document.createElement("select");
    priorityDD.setAttribute("id", "prio");
    priorityDD.setAttribute("class", "prio");
    
    const options = ["Niedrig", "Mittel", "Hoch"];
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.text = option;
        priorityDD.appendChild(opt);
    });
    
    const priorityDDContainer = document.createElement("div");
    priorityDDContainer.setAttribute("class", "prio-container");
    priorityDDContainer.setAttribute("id", "prio-container");
    priorityDDContainer.appendChild(priorityDD);
    
    return priorityDDContainer;
}

function setDashboard() {
    //TODO: Dashboard setzen, heißt die aktuellen tickets und so 
    $(function(){
        $("#content-container").load("/UserIncludes/Dashboard.php"); 
    });   
}
function createHTMLElement(tagName, attributes = {}, textContent = '') {
    const element = document.createElement(tagName);
    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
    element.textContent = textContent;
    return element;
  }

function setTicketCreate() {
//TODO: Ticket erstellung einrichten,
// ein großes Textfeld in dem gearbeitet werden kann mit allen standard formatierungsmöglichkeiten
// z.b. wie bei Vemas
// Eine Betreffzeile
// Speichern
// Abbrechen
    $("#content-container").load("/UserIncludes/TicketCreate.php"); 
    
}
  

function setTickets() {
    //TODO: Ticketeinsicht erstellen
    // Ansicht meiner Tickets
    // Filterung einbauen z.b. nach Datum oder eine volltextsuche
$(function(){
    $("#content-container").load("/UserIncludes/Tickets.php"); 
});
}

