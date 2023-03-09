const styles = getComputedStyle(document.body);
const highlightColor = styles.getPropertyValue("--highlight");
var editorText, betrifftAlle, prioValue, catValue, betreffText, erstellDatum;
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
    erstellDatum = Date();
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
    $("#content-container").load("/UserIncludes/Tickets.php", function(responseTxt, statusTxt, xhr) {
        if (statusTxt == "success") {
            ticketsLaden();
        } else if (statusTxt == "error") {
        }
      });

}

function ticketsLaden() {
    const tickets = [
        { betreff: betreffText , datum: erstellDatum, kategorie: 'Vemas', status: 'Offen' },
        { betreff: 'Vemas ist mal wieder AMSBGD KHAGWEGFIUQZEGRVKJQWHEG RFKHAGSDGC KCAJHSEGFkaputt', datum: '18.02.2023', kategorie: 'Hardware', status: 'Geschlossen' }
    ];
    
    const container = document.getElementById("container");
    const table = document.createElement('table');
    table.classList.add('table', 'table-hover', 'table-striped');
    
    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const headers = ['Betreff', 'Datum', 'Kategorie', 'Status'];
    for (const header of headers) {
        const th = document.createElement('th');
        th.textContent = header;
        headRow.appendChild(th);
    }
    thead.appendChild(headRow);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    for (const ticket of tickets) {
        const row = document.createElement('tr');
        const betreffCell = document.createElement('td');
        betreffCell.textContent = ticket.betreff;
        row.appendChild(betreffCell);
        const datumCell = document.createElement('td');
        datumCell.textContent = ticket.datum;
        row.appendChild(datumCell);
        const kategorieCell = document.createElement('td');
        kategorieCell.textContent = ticket.kategorie;
        row.appendChild(kategorieCell);
        const statusCell = document.createElement('td');
        statusCell.textContent = ticket.status;
        row.appendChild(statusCell);
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    
    container.appendChild(table);
}
           
function filterSuche(searchbar, column) {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById(searchbar);
    filter = input.value.toUpperCase();
    table = document.getElementById("Table_Tickets");
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
