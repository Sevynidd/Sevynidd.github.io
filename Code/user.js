const styles = getComputedStyle(document.body);
const highlightColor = styles.getPropertyValue("--highlight");
var editorText;


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
function saveTicket(){
    const catDD = document.getElementById("cat");
    const prioDD = document.getElementById("prio");
    const alleCB = document.getElementById("cb_alle");

    editorText = quill.getText(0);
    var catValue =  catDD.value;
    var prioValue = prioDD.value;
    var betrifftAlle = alleCB.checked;
    const date = Date();
    console.log(date, catValue, prioValue);
}

function cancelTicket(){
    const catDD = document.getElementById("cat");
    const prioDD = document.getElementById("prio");
    const alleCB = document.getElementById("cb_alle");

    quill.deleteText(0,quill.getLength());
    prioDD.tabIndex = 1;
    catDD.tabIndex = 1;
    alleCB.checked = false;
}

function resetHighlight() {
    for (var i = 0; i < Buttons.length; i++) {
        Buttons[i].style.background = '';
    }
}

document.body.addEventListener('click', function (event) {
    if (event.target.id === 'btn-submit') {
        saveTicket();
    }
});

document.body.addEventListener('click', function (event) {
    if (event.target.id === 'btn-cancel') {
        cancelTicket();
    }
});

function setDashboard() {
    //TODO: Dashboard setzen, heißt die aktuellen tickets und so 
 
    $("#content-container").load("/UserIncludes/Dashboard.php"); 
       
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

    $("#content-container").load("/UserIncludes/Tickets.php"); 

}

