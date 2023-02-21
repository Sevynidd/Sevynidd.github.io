const Dashboard_Button = document.getElementById("btn-dashboard");
const ticketCreate_Button = document.getElementById("btn-ticketCreate");
const tickets = document.getElementById("btn-tickets");
const styles = getComputedStyle(document.body);
const highlightColor = styles.getPropertyValue("--highlight");

var Buttons = [
    document.getElementById("btn-dashboard"),
    document.getElementById("btn-ticketCreate"),
    document.getElementById("btn-tickets")
];

window.onload = function() {
    getDarkMode();
    resetHighlight(); 
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

