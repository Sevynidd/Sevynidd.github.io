const styles = getComputedStyle(document.body);
const highlightColor = styles.getPropertyValue("--highlight");
var editorText, betrifftAlle, prioValue, catValue, betreffText;
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

function setDashboard() {
    $("#content-container").load("/UserIncludes/Dashboard.php");      
}


function setTicketCreate() {
    $("#content-container").load("/UserIncludes/TicketCreate.php");    
}

function saveTicket() {    
    var betreff = document.getElementById("Betreff");
    betreffText = betreff.value;
    if (betreffText === "") {
        return;
    }
    
    var kategorie = document.getElementById("Kategorie");
    var prioritaet = document.getElementById("Prioritaet");
    var checkBoxVisible = document.getElementById("checkboxVisible");
    

    editorText = quill.getText(0);
    catValue =  kategorie.value;
    prioValue = prioritaet.value;
    betrifftAlle = checkBoxVisible.checked;
    const date = Date();
    console.log(betreffText, prioValue, catValue, betrifftAlle, date);
 

    resetValues();
    const form = document.getElementById("container-info");
    if (form.innerHTML === "") {
        form.innerHTML += '<div class="alert alert-info alert-dismissible fade show"><strong>Info!</strong> Dein Ticket wurde erstellt. Du kannst es unter dem Reiter "Tickets" einsehen. <button type="button" class="btn-close" data-bs-dismiss="alert"></button> </div>';  
    }
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

function setTickets() {
    $("#content-container").load("/UserIncludes/Tickets.php"); 
}

function ticketsLaden() {
    var betreffTickets = document.getElementById("Betreff_Tickets");
    var td = betreffTickets.getElementsByTagName('td')[0];
    td.innerHTML = 'New value';
}
           
