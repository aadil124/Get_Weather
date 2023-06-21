const restCountryUrl = "https://restcountries.com/v3.1/all";

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
getDataCountry();

const showCountryData = (obj) => {
  const countryName = obj.name.common;
  const region = obj.region;
  const lat = obj.latlng[0];
  const lon = obj.latlng[1];
  const population = obj.population;
  const flag = obj.flags.png;
  console.log(countryName, region, population);

  const mainContent = document.querySelector(".mainContent");
  mainContent.innerHTML += `
    <div class="card h-100 bg-dark text-white">
        <img src="${flag}" class="card-img-top" id="flag" alt="...">
        <div class="card-body">
        <h2 class="card-title">${countryName}</h2>
        <h5 class="card-title">${region}</h5>
        <h5 class="card-title">${population}</h5>
        <button class="btn btn-primary">Get Weather</button>
        <p id="weatherDetails"></p>
        </div>
    </div>
  `;
};
