const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns']; // temporary checking for valid response and data parsing

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == "Fish Haven") {
                let card = document.querySelector('section.fish');

                let motto = document.createElement('p');
                motto.textContent = towns[i].motto;
                card.appendChild(motto);

                let h2 = document.createElement('h2');
                h2.textContent = towns[i].name;
                card.appendChild(h2);


                let founded = document.createElement('p');
                founded.textContent = "Year Founded: " + towns[i].yearFounded;
                card.appendChild(founded);

                let population = document.createElement('p');
                population.textContent = "Population: " + towns[i].currentPopulation;
                card.appendChild(population);


                let rainfall = document.createElement('p');
                rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
                card.appendChild(rainfall);

            }
            else if (towns[i].name == "Preston"){
                let card = document.querySelector('section.preston');

                let motto = document.createElement('p');
                motto.textContent = towns[i].motto;
                card.appendChild(motto);

                let h2 = document.createElement('h2');
                h2.textContent = towns[i].name;
                card.appendChild(h2);


                let founded = document.createElement('p');
                founded.textContent = "Year Founded: " + towns[i].yearFounded;
                card.appendChild(founded);

                let population = document.createElement('p');
                population.textContent = "Population: " + towns[i].currentPopulation;
                card.appendChild(population);


                let rainfall = document.createElement('p');
                rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
                card.appendChild(rainfall);


            }
            else if (towns[i].name == "Soda Springs"){
                let card = document.querySelector('section.springs');

                let motto = document.createElement('p');
                motto.textContent = towns[i].motto;
                card.appendChild(motto);

                let h2 = document.createElement('h2');
                h2.textContent = towns[i].name;
                card.appendChild(h2);

                let founded = document.createElement('p');
                founded.textContent = "Year Founded: " + towns[i].yearFounded;
                card.appendChild(founded);

                let population = document.createElement('p');
                population.textContent = "Population: " + towns[i].currentPopulation;
                card.appendChild(population);


                let rainfall = document.createElement('p');
                rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
                card.appendChild(rainfall);

                
            }

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
function pancakes() {
    var dt = new Date();
    var nday = dt.getDay();
    if (nday == 5) {
        document.getElementById('banner').style.display = "block";
    } else {}
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