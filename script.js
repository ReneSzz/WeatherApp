

async function getWeather()
{
    
   let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=74f3b9896236b5a95d27f534a62f6103`);
   let result = await response.json();
   console.log(result.weather[0].main);
}

getWeather();