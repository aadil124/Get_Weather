const restCountryUrl = "https://restcountries.com/v3.1/all";
const getDataCountry = async () => {
  let countryData;
  try {
    const response = await fetch(restCountryUrl);
    countryData = await response.json();
    countryData.map((item) => {
      showCountryData(item);
    });
  } catch (err) {
    console.log(err);
  }
};
getDataCountry();

const showCountryData = (obj) => {
  const countryName = obj.name.common;
  const region = obj.region;
  const lat = obj.latlng[0];
  const lon = obj.latlng[1];
  const population = obj.population;
  const flag = obj.flags.png;
  console.log(countryName, region, population);
  const apiKey = `88770fab231ef74f4f8ab39995aa3633`;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  const getWeatherData = async () => {
    let countryData;
    let weatherData;
    try {
      const weatherResponse = await fetch(weatherUrl);
      weatherData = await weatherResponse.json();
      countryData = weatherData.main;
      // console.log(weatherData);
      console.log(countryData);
      const btnWeather = document.querySelector("#btnClick");
      btnWeather.addEventListener("click", handleClick);
    } catch (error) {
      console.log(`Weather ${error}`);
    }
    return countryData;
  };
  // getWeatherData(weatherUrl);
  const handleClick = () => {
    // let weatherDataNew = getWeatherData(weatherUrl);
    // console.log("++++++", weatherDataNew);
    console.log("++++++++++++++++++");
    // const pressure = weatherDataNew.pressure;
    // const maxTemp = weatherDataNew.temp_max;
    // const minTemp = weatherDataNew.temp_min;
    // const humidity = weatherDataNew.humidity;
    // console.log("click++++++", pressure, maxTemp, minTemp, humidity);
    // const pressureDom = document.querySelector(".pressure");
    // const maxTempDom = document.querySelector(".maxTemp");
    // const minTempDom = document.querySelector(".minTemp");
    // const humidityDom = document.querySelector(".humidity");
    // pressureDom.innerHTML = `Pressure: ${pressure} Pascal`;
    // maxTempDom.innerHTML = `Max Temp: ${maxTemp - 273} Degree`;
    // minTempDom.innerHTML = `Min Temp: ${minTemp - 273} Degree`;
    // humidityDom.innerHTML = `Humidity: ${humidity} %`;
  };
  const mainContent = document.querySelector(".mainContent");
  mainContent.innerHTML += `
  <div class="col-sm-12 col-md-4 col-lg-3 mb-3 mb-sm-3">
      <div class="card h-100 bg-danger text-white">
        <img src="${flag}" class="card-img-top" id="flag" alt="...">
          <div class="card-body">
            <h2 class="card-title">Name: ${countryName}</h2>
            <h5 class="card-title">Region: ${region}</h5>
            <h5 class="card-title">Population: ${population}</h5>
            <button class="btn btn-primary btnWeather" id="btnClick">Get Weather</button>
            <h5 class="card-title pressure"></h5>
            <h5 class="card-title maxTemp"></h5>
            <h5 class="card-title minTemp"></h5>
            <h5 class="card-title humidity"></h5>
          </div>
      </div>
  </div>
  `;
};
