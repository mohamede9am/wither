async function getData(city = 'cairo') {
        let data = await  fetch(`http://api.weatherapi.com/v1/search.json?key=611b5fb938174ec4a31181555231108&q=${city}&days=3`)
        data = await data.json();

    
        const today = new Date();
        const onePart = { weekday: 'long' };
        const dateOfToday = today.toLocaleString('ar', onePart);

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const dateOfTomorrow = tomorrow.toLocaleString('ar', onePart);

        const thirdDay = new Date(today);
        thirdDay.setDate(today.getDate() + 2);
        const dateOfNextTomo = thirdDay.toLocaleString('en-US', onePart);



        document.querySelector(".day").innerHTML = `${dateOfToday}`;
        document.querySelector(".degree").innerHTML = `${data.current.temp_c}`;
        document.querySelector(".custom").innerHTML = `${data.current.condition.text}`;
        document.querySelector(".desc").innerHTML = `${data.current.humidity}`;
        document.querySelector(".desc1").innerHTML = `${data.current.wind_kph}`;

        const windDirection = data.current.wind_dir.toLowerCase();
        const direction =
        windDirection === 'n' ? 'North' :
        windDirection === 'e' ? 'East' :
        windDirection === 'w' ? 'West' :
        windDirection === 'c' ? 'Cost' : 'Unknown';

        document.querySelector(".desc2").innerHTML = direction;

        document.querySelector(".tomorrow").innerHTML = `${dateOfNextTomo}`;
        document.querySelector(".degreeTomorrow").innerHTML = `${data.forecast.forecastday[1].day.maxtemp_c}`;
        document.querySelector(".customTomorrow").innerHTML = `${data.forecast.forecastday[1].day.condition.text}`;

        document.querySelector(".thirdDay").innerHTML = `${dateOfTomorrow}`;
        document.querySelector(".degreethirdDay").innerHTML = `${data.forecast.forecastday[2].day.maxtemp_c}`;
        document.querySelector(".customthirdDay").innerHTML = `${data.forecast.forecastday[2].day.condition.text}`;

    }
        getData("cairo");

function search(city) {
    fetch(`http://api.weatherapi.com/v1/search.json?key=611b5fb938174ec4a31181555231108&q=${city}&days=3`)
        if (response.ok) {
        return response.json();
        }
        getData(data.location.name);
        console.log(data.location.name);
}

document.getElementById("search").addEventListener("keyup", event => {
    search(event.target.value);
});