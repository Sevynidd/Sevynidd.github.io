const styles = getComputedStyle(document.body);
const highlightColor = styles.getPropertyValue("--highlight");
var editorText; 
var Buttons = [
    document.getElementById("btn-dashboard"),
    document.getElementById("btn-ticketCreate"),
    document.getElementById("btn-tickets")
];

window.onload = function () {
    if (sessionStorage.getItem("Benutzername") != "benutzer") {
        window.location.href = "/error.html";   
    }

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
    if (betreffText === "") {
        return;
    }
    
    var kategorie = document.getElementById("Kategorie");
    var prioritaet = document.getElementById("Prioritaet");
    var checkBoxVisible = document.getElementById("checkboxVisible");
    var betreff = document.getElementById("Betreff");

    editorText = quill.getText(0);
    var catValue =  kategorie.value;
    var prioValue = prioritaet.value;
    var betrifftAlle = checkBoxVisible.checked;
    var betreffText = betreff.value;
    const date = Date();
    console.log(date, catValue, prioValue, betrifftAlle, betreffText);


    resetValues();
    resetHighlight();
    setTickets();
    Buttons[2].style.background = highlightColor;
}

function resetValues() {
    var kategorie = document.getElementById("Kategorie");
    var prioritaet = document.getElementById("Prioritaet");
    var checkBoxVisible = document.getElementById("checkboxVisible");
    var betreff = document.getElementById("Betreff");

    quill.deleteText(0,quill.getLength());
    prioritaet.value = 1;
    kategorie.value = 1;
    checkBoxVisible.checked = false;
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
    $("#content-container").load("/UserIncludes/Dashboard.php");      
}

function setTicketCreate() {
    $("#content-container").load("/UserIncludes/TicketCreate.php");    
}
  

function setTickets() {
    $("#content-container").load("/UserIncludes/Tickets.php"); 
}

