let body = document.querySelector('body');
let title = document.getElementById('title');
let heading1 = document.getElementById('heading1');
let heading2 = document.getElementById('heading2');
let heading3 = document.getElementById('heading3');
let heading4 = document.getElementById('heading4');
let heading5 = document.getElementById('heading5');
let submitButton = document.getElementById('locationSubmit');
let locationInput = document.getElementById('inputLocation');
async function getWeather(Location)
{
  
   try{
   let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Location}&APPID=74f3b9896236b5a95d27f534a62f6103&units=metric`);
   let result = await response.json();
   title.innerText = result.name;
   
   heading1.innerText = `Current Temperature: ${result.main.temp}°C`;
   heading2.innerText = `Feels Like: ${result.main.feels_like}°C`;
   heading3.innerText = `Current Wind Speed ${result.wind.speed}km/h`;
   heading4.innerText = `Current Humidity ${result.main.humidity}%`;
   heading5.innerText = `Current Weather Condition: ${result.weather[0].description}`;
   }
   catch
   {
      title.innerText = "Error Invalid Location";
      heading1.innerText = ``;
      heading2.innerText = ``;
      heading3.innerText = ``;
      heading4.innerText = ``;
      heading5.innerText = ``;
   }
   
}

getWeather("Toronto");


submitButton.addEventListener("click", function(e)
{
let newLocation = locationInput.value;

   getWeather(newLocation);
});

body.addEventListener("keypress", function(event) {
   // If the user presses the "Enter" key on the keyboard
   if (event.key === "Enter") {
     // Cancel the default action, if needed
   
     // Trigger the button element with a click
     document.getElementById("locationSubmit").click();
   }
 }); 