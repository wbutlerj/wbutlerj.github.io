const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=fdd85879e660c4d9a4d645008de05e21"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    console.log(jsonObject);
    let k = document.textContent = jsonObject.list[0].main.temp_max;
    let k2 = parseFloat(k);
    let temp = Math.round(k2 * 9 / 5 - 459.76) ;
    document.getElementById('high').innerHTML = temp + " &#8457;";

    let hum = document.textContent = jsonObject.list[0].main.humidity;
    document.getElementById('humidity').innerHTML = "Humidity: " + hum ;

    let current = document.textContent = jsonObject.list[0].weather[0].description;
    document.getElementById('current').innerHTML = "Currently: " + current ;

    let wind = document.textContent = jsonObject.list[0].wind.speed;
    document.getElementById('speed').innerHTML = "Wind Speed: " + wind ;

   
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
        }
  });

const apiList =  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=509e6c498d583fa4a648cde8caa7b960"
  fetch(apiList)
  .then((response) => response.json())
  .then((jsonObject) => {
      console.log(jsonObject);

      for(let i = 0; i < 5; i++) {
        let k = document.textContent = jsonObject.list[i].main.temp;
        let temp = Math.round(k * 9 / 5 - 459.76) ;
        console.log(temp);
        document.getElementById('day' + i).innerHTML = temp + " &#8457;";

        const imagesrc = 'http://openweathermap.org/img/w/' + jsonObject.list[i].weather[0].icon + '.png'; 
        const desc = jsonObject.list[i].weather.description;  
        document.getElementById('icon'+ i).setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon' + i).setAttribute('alt', desc);
      }
    });









  
 











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

  
