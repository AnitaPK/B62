function getWeatherInfo(){
cName = document.querySelector("#cityName").value
fetchAPI(cName);

}


function fetchAPI(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca018df54353f065aaed7d802825b8be`)
    .then(response => response.json())
    .then(data=>renderData(data))
}



function renderData(d){
    document.querySelector("#showData").innerHTML = `
                                            <h3>${d.name} <span>${d.sys.country}</span></h3>
                                            <p>TEMP: ${d.main.temp} <sup>0</sup>F</p>
                                            <p>${d.weather[0].description}</p>
    `
}

function showDateTime(){
document.querySelector("#timeOne").innerHTML = Date()
}

setInterval(showDateTime, 1000)


// setTimeout(showDateTime,5000)