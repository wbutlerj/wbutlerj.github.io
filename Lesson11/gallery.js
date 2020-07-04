function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("responsive");
}
function start() {
    // setActive();
    pancakes();
  }

//////////
var d = new Date();
var month;
var day;
var date = d.getDate();
var year = d.getFullYear();

switch (d.getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
switch (d.getMonth()) {
    case 0:
        month = "January";
        break;
    case 1:
        month = "Febuary";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
    case 7:
        month = "August";
    case 8:
        month = "September";
    case 9:
        month = "October";
    case 10:
        month = "November";
    case 11:
        month = "Decemeber";

}
document.getElementById("date").innerHTML = " " + day + ", " + date + " " + month + " " + year;


window.onload = start;
////////////////////////

WebFont.load({
    google: {
      families: [
         "Oleo Script",
         "Bebas Neue",
         "Spectral",
         "Cinzel"
      ]
    }
  });

  function pancakes(){
    var dt = new Date();
    var nday= dt.getDay();
if (nday == 5){
    document.getElementById('banner').style.display = "block";
}
else{
}
}
