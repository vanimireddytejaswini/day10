document.addEventListener("DOMContentLoaded", function () {
  // Fetch and display weather information
  fetchWeather();

  // Fetch and display bookstore information
  fetchBookstoreData();
});

function fetchWeather() {
  // Use a weather API to fetch current weather data
  // For example, you can use OpenWeatherMap API or any other weather API

  // Replace the placeholder below with actual API call
  const weatherData = {
      temperature: "25°C",
      condition: "Sunny",
      location: "City Name"
  };

  // Display weather information on the webpage
  const weatherInfoElement = document.getElementById("weather-info");
  weatherInfoElement.innerHTML = `<p>Temperature: ${weatherData.temperature}</p>
                                 <p>Condition: ${weatherData.condition}</p>
                                 <p>Location: ${weatherData.location}</p>`;
}

function fetchBookstoreData() {
  // Fetch bookstore data and update the #bookstore-section
  // You need to implement backend logic to fetch and send bookstore data
}