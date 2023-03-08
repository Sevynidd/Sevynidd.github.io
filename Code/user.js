const styles = getComputedStyle(document.body);
const highlightColor = styles.getPropertyValue("--highlight");
var editorText; 
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
function saveTicket() {
    const catDD = document.getElementById("cat");
    const prioDD = document.getElementById("prio");
    const alleCB = document.getElementById("cb_alle");
    const betreff = document.getElementById("betreff");

    editorText = quill.getText(0);
    var catValue =  catDD.value;
    var prioValue = prioDD.value;
    var betrifftAlle = alleCB.checked;
    var betreffText = betreff.value;
    const date = Date();
    console.log(date, catValue, prioValue, betrifftAlle, betreffText);

    resetValues();
    
    resetHighlight();
    setTickets();
    Buttons[2].style.background = highlightColor;
}

function resetValues() {
    const catDD = document.getElementById("cat");
    const prioDD = document.getElementById("prio");
    const alleCB = document.getElementById("cb_alle");
    const betreff = document.getElementById("betreff");


    quill.deleteText(0,quill.getLength());
    prioDD.tabIndex = 1;
    catDD.tabIndex = 1;
    alleCB.checked = false;
    betreff.value = "";
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
        resetValues();
    }
});

function setDashboard() {
    //TODO: Dashboard setzen, heißt die aktuellen tickets und so 
 
    $("#content-container").load("/UserIncludes/Dashboard.php"); 
       
}

function setTicketCreate() {

    $("#content-container").load("/UserIncludes/TicketCreate.php");    


}
  

function setTickets() {
    //TODO: Ticketeinsicht erstellen
    // Ansicht meiner Tickets
    // Filterung einbauen z.b. nach Datum oder eine volltextsuche

    $("#content-container").load("/UserIncludes/Tickets.php"); 

}

