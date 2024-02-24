// async function fetchData() {
//   const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bhopal';
//   const options = {
//       method: 'GET',
//       headers: {
//           'X-RapidAPI-Key': '29628de321msh747bc2e03c5c241p1d609djsnc0ee5691d93b',
//           'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//       }
//   };

  const options ={
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '29628de321msh747bc2e03c5c241p1d609djsnc0ee5691d93b',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
  };
// for search the city here
  const getWeather= (city) =>{
  cityName.innerHTML = city;
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
  .then(response => response.json())
  .then((response) => {

    console.log(response)

    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed

    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset

  })
  .catch(err => console.error(err));
}

Submit.addEventListener("click",(e) => {
    e.preventDefault();
    getWeather(city.value);
})

  getWeather("delhi");

  // For Nagda
  const getWeatherN = () => {
    const city = "Delhi"; // Hardcoded city name
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        cloud_pctN.innerHTML = response.cloud_pct;
        tempN.innerHTML = response.temp;
        feels_likeN.innerHTML = response.feels_like;
        humidityN.innerHTML = response.humidity;
        min_tempN.innerHTML = response.min_temp;
        max_tempN.innerHTML = response.max_temp;
        wind_speedN.innerHTML = response.wind_speed;
        wind_degreesN.innerHTML = response.wind_degrees;
        sunriseN.innerHTML = response.sunrise;
        sunsetN.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
}

getWeatherN(); // Call the function directly without passing any arguments

// For Anuppur
const getWeatherA = () => {
    const city = "Anuppur"; // Hardcoded city name
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        cloud_pctA.innerHTML = response.cloud_pct;
        tempA.innerHTML = response.temp;
        feels_likeA.innerHTML = response.feels_like;
        humidityA.innerHTML = response.humidity;
        min_tempA.innerHTML = response.min_temp;
        max_tempA.innerHTML = response.max_temp;
        wind_speedA.innerHTML = response.wind_speed;
        wind_degreesA.innerHTML = response.wind_degrees;
        sunriseA.innerHTML = response.sunrise;
        sunsetA.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
}

getWeatherA(); // Call the function directly without passing any arguments

// For Bareli
const getWeatherB = () => {
    const city = "Bareli"; // Hardcoded city name
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        cloud_pctB.innerHTML = response.cloud_pct;
        tempB.innerHTML = response.temp;
        feels_likeB.innerHTML = response.feels_like;
        humidityB.innerHTML = response.humidity;
        min_tempB.innerHTML = response.min_temp;
        max_tempB.innerHTML = response.max_temp;
        wind_speedB.innerHTML = response.wind_speed;
        wind_degreesB.innerHTML = response.wind_degrees;
        sunriseB.innerHTML = response.sunrise;
        sunsetB.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
}

getWeatherB(); // Call the function directly without passing any arguments

// For Lucknow
const getWeatherL = () => {
    const city = "Lucknow"; // Hardcoded city name
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        cloud_pctL.innerHTML = response.cloud_pct;
        tempL.innerHTML = response.temp;
        feels_likeL.innerHTML = response.feels_like;
        humidityL.innerHTML = response.humidity;
        min_tempL.innerHTML = response.min_temp;
        max_tempL.innerHTML = response.max_temp;
        wind_speedL.innerHTML = response.wind_speed;
        wind_degreesL.innerHTML = response.wind_degrees;
        sunriseL.innerHTML = response.sunrise;
        sunsetL.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
}

getWeatherL(); // Call the function directly without passing any arguments


  