const styles = getComputedStyle(document.body);
const highlightColor = styles.getPropertyValue("--highlight");
var editorText, betrifftAlle, prioValue, catValue, betreffText, erstellDatum, status;
var Buttons = [
    document.getElementById("btn-dashboard"),
    document.getElementById("btn-ticketCreate"),
    document.getElementById("btn-tickets")
];

const tickets = [];

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
    erstellDatum = Date();
    status = "offen";
    console.log(betreffText, prioValue, catValue, betrifftAlle, erstellDatum);

    resetValues();
    const form = document.getElementById("container-info");
    if (form.innerHTML === "") {
        form.innerHTML += '<div class="alert alert-info alert-dismissible fade show"><strong>Info!</strong> Dein Ticket wurde erstellt. Du kannst es unter dem Reiter "Tickets" einsehen. <button type="button" class="btn-close" data-bs-dismiss="alert"></button> </div>';  
    }
    addTicket(betreffText, catValue, prioValue, status, "RT", erstellDatum);
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
    $("#content-container").load("/UserIncludes/Tickets.php", function(responseTxt, statusTxt, xhr) {
        if (statusTxt == "success") {
            ticketsLaden();
        } 
    });
}

function addTicket(betreff, kategorie, prioritaet, status, benutzer, datum, editorText) {
    const neuesTicket = {betreff, kategorie, prioritaet, status, benutzer, datum, editorText};
    tickets.push(neuesTicket);
}

function sortiereTabelle(n) {

    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("Tickets_Tabelle");
    switching = true;

    // richtung aufsteigen
    dir = "asc";

    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {

        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];

        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //unterbricht die schleife 
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //unterbricht die schleife 
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount == 0 && dir == "asc") {

          dir = "desc";
          switching = true;
        }
      }
    }
  }

function ticketsLaden() {
    const table = document.getElementById("Tickets_Tabelle")
    
    const tbody = document.createElement('tbody');
    let i = 0;
    for (const ticket of tickets) {
        const row = document.createElement('tr');
        row.setAttribute("data-bs-toggle", "collapse");
        row.setAttribute("data-bs-target", "#accordion" + [i]);
        row.setAttribute("class", "accordion-item collapsed");

        const rowInhalt = document.createElement('tr');
        const betreffCell = document.createElement('td');
        betreffCell.textContent = ticket.betreff;

        row.appendChild(betreffCell);
        const kategorieCell = document.createElement('td');
        kategorieCell.textContent = ticket.kategorie;
        row.appendChild(kategorieCell);

        const priorityCell = document.createElement('td');
        priorityCell.textContent = ticket.prioritaet;
        row.appendChild(priorityCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = ticket.status;
        row.appendChild(statusCell);

        const userCell = document.createElement('td');
        userCell.textContent = ticket.benutzer;
        row.appendChild(userCell);

        const datumCell = document.createElement('td');
        datumCell.textContent = ticket.datum;
        row.appendChild(datumCell);
                
        const inhaltCelle = document.createElement('td');
        inhaltCelle.setAttribute("colspan", "6");
        const inhalt = document.createElement('div'); 
        inhalt.setAttribute("class", "accordion-collapse collapse"); 
        inhalt.setAttribute("id", "accordion" + [i]);
        inhalt.textContent = editorText;
        inhaltCelle.appendChild(inhalt);
        rowInhalt.appendChild(inhaltCelle);

       
        tbody.appendChild(row);
        tbody.appendChild(rowInhalt);
        i++;
    }
    table.appendChild(tbody);
}
           
function filterSuche(searchbar, column) {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById(searchbar);
    filter = input.value.toUpperCase();
    table = document.getElementById("Tickets_Tabelle");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[column];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}
