const restCountryUrl = "https://restcountries.com/v3.1/all";
setTimeout(() => {
  getDataCountry();
}, 2000);
const getDataCountry = async () => {
  try {
    const response = await fetch(restCountryUrl);
    const countryData = await response.json();
    countryData.map((item) => {
      showCountryData(item);
    });
  } catch (err) {
    console.log(err);
  }
};

const showCountryData = (obj) => {
  const countryName = obj.name.common;
  const region = obj.region;
  const lat = obj.latlng[0];
  const lon = obj.latlng[1];
  const population = obj.population;
  const flag = obj.flags.png;
  console.log(countryName, region, population);

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=88770fab231ef74f4f8ab39995aa3633`;

  const getWeatherData = async (weatherUrl) => {
    try {
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();
      const data = weatherData.main;
      console.log(weatherData.main);
      const btnWeather = document.querySelector(".btnWeather");

      const handleClick = () => {
        const pressure = data.pressure;
        const maxTemp = data.temp_max;
        const minTemp = data.temp_min;
        const humidity = data.humidity;
        console.log("click++++++", pressure, maxTemp, minTemp, humidity);
        // const pressureDom = document.querySelector(".pressure");
        // const maxTempDom = document.querySelector(".maxTemp");
        // const minTempDom = document.querySelector(".minTemp");
        // const humidityDom = document.querySelector(".humidity");
        // pressureDom.innerHTML = `Pressure: ${pressure} Pascal`;
        // maxTempDom.innerHTML = `Max Temp: ${maxTemp - 273} Degree`;
        // minTempDom.innerHTML = `Min Temp: ${minTemp - 273} Degree`;
        // humidityDom.innerHTML = `Humidity: ${humidity} `;
      };
      btnWeather.addEventListener("click", handleClick);
    } catch (error) {
      console.log(`Weather ${error}`);
    }
  };
  getWeatherData(weatherUrl);

  const mainContent = document.querySelector(".mainContent");
  mainContent.innerHTML += `
  <div class="col-sm-12 col-md-4 col-lg-3 mb-3 mb-sm-3">
      <div class="card h-100 bg-danger text-white">
        <img src="${flag}" class="card-img-top" id="flag" alt="...">
          <div class="card-body">
            <h2 class="card-title">Name: ${countryName}</h2>
            <h5 class="card-title">Region: ${region}</h5>
            <h5 class="card-title">Population: ${population}</h5>
            <button class="btn btn-primary btnWeather">Get Weather</button>
            <h5 class="card-title pressure"></h5>
            <h5 class="card-title maxTemp"></h5>
            <h5 class="card-title minTemp"></h5>
            <h5 class="card-title humidity"></h5>
          </div>
      </div>
  </div>
  `;
};
