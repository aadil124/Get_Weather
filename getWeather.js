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

const showCountryData = (item) => {
  const countryName = item.name.common;
  const region = item.region;
  const lat = item.latlng[0];
  const lon = item.latlng[1];
  const population = item.population;
  const flag = item.flags.png;
  console.log(countryName, region, population);
  const apiKey = `88770fab231ef74f4f8ab39995aa3633`;

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  // const getWeatherData = async () => {
  //   let data;
  //   let weatherData;
  //   try {
  //     const weatherResponse = await fetch(weatherUrl);
  //     weatherData = await weatherResponse.json();
  //     data = weatherData.main;
  //     // console.log(weatherData);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(`Weather ${error}`);
  //   }
  //   return data;
  // };
  // getWeatherData(weatherUrl);

  let btnWeather = document.getElementById("btnClick");
  console.log(btnWeather);
  btnWeather.addEventListener("click", () => {
    console.log("clicked weather");
    // let weatherDataNew = await getWeatherData(weatherUrl);
    //   // console.log("++++++", weatherDataNew);
    //   // console.log("++++++++++++++++++");
    //   // const pressure = weatherDataNew.pressure;
  });

  // const handleClick = () => {
  //   console.log("clicked weather");
  // };

  const mainContent = document.querySelector(".mainContent");
  mainContent.innerHTML += `
  <div class="col-sm-12 col-md-4 col-lg-3 mb-3 mb-sm-3">
      <div class="card h-100 bg-danger text-white">
        <img src="${flag}" class="card-img-top" id="flag" alt="...">
          <div class="card-body">
            <h2 class="card-title">Name: ${countryName}</h2>
            <h5 class="card-title">Region: ${region}</h5>
            <h5 class="card-title">Population: ${population}</h5>
            <button class="btn btn-primary" onclick="handleClick()" id="btnClick">Get Weather</button>
            <h5 class="card-title pressure"></h5>
            <h5 class="card-title maxTemp"></h5>
            <h5 class="card-title minTemp"></h5>
            <h5 class="card-title humidity"></h5>
          </div>
      </div>
  </div>
  `;
};
