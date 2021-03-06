const api = {
    key: "d9e626560f4862231b2e103168b4c341",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if(evt.keyCode ==13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}
 
function getResults(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather =>  {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
}