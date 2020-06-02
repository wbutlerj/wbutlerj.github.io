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
////////////////////
// //active navigation class
// function setActive() {
//     aObj = document.getElementById('primaryNav').getElementsByTagName('a');
//     for (i = 0; i < aObj.length; i++) {
//         if (document.location.href.indexOf(aObj[i].href) >= 0) {
//             aObj[i].className = 'active';

//         }
//     }
// }




////////////////////////
//banner for pancakes
function pancakes(){
    var dt = new Date();
    var nday= dt.getDay();
if (nday == 5){
    document.getElementById('banner').style.display = "block";
}
else{
}
}
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
////////////////////////
var wind = 10;
var temp = 60;

if ((wind <= 100 && wind >= 0) && (temp <= 140 && temp >= -80 )){
 windChill();
}
else{
document.getElementById("windc").innerHTML= "Windchill: N/A";
document.getElementById("wind").innerHTML= "Windspeed: N/A";
document.getElementById("temp").innerHTML= "High: N/A";
}

function windChill(){
var wc = Math.round((35.74 + 0.6215*temp + (0.4275*temp - 35.75) * Math.pow(wind, 0.16)) * 100) / 100 ;
document.getElementById("windc").innerHTML= "Windchill: " + wc + " &#8457;";
document.getElementById("wind").innerHTML= "Windspeed: " + wind ;
document.getElementById("temp").innerHTML= "High: " + temp + " &#8457;";
var finalwc = document.getElementById("windc");
}
