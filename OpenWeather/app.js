const locationBtn = document.querySelector(".loc"),
  sidebar = document.querySelector(".sidebar"),
  hint = document.querySelector(".hint"),
  bgImg = document.querySelector(".bgImg");

locationBtn.onclick = () => {
  navigator.geolocation.getCurrentPosition((e) => {
    let lat = e.coords.latitude;
    let lon = e.coords.longitude;

    getData(lat, lon);
  });
};

async function getData(lat, lon) {
  const KEY = "763c971b44d5954b92fd11041f67d9fc";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${KEY}`
  );
  const data = await response.json();
  updateUi(data);
}

let updateUi = (data) => {
  sidebar.innerHTML = "";

  bgImg.src = `https://source.unsplash.com/1600x900/?nature,dark,${data.weather[0].main}`;

  // Temperature
  const temp = data.main.temp;
  const feels = data.main.feels_like;
  const humidity = data.main.humidity;
  const tmax = data.main.temp_max;
  const tmin = data.main.temp_min;
  const pressure = data.main.pressure;

  //Wind
  const Speed = data.wind.speed;
  const Direction = data.wind.deg;
  const city = data.name;

  const cityDiv = document.createElement("div");
  cityDiv.classList.add("weatherInfo");
  cityDiv.style.display = "flex";
  cityDiv.style.opacity = "1";
  cityDiv.innerHTML = `
  <p>City: ${city}</p>
  
  `;
  sidebar.appendChild(cityDiv);

  const tempDiv = document.createElement("div");
  tempDiv.classList.add("weatherInfo");
  tempDiv.style.display = "flex";
  tempDiv.style.opacity = "1";
  tempDiv.innerHTML = `
  <h3>Temperqature</h3>
  <p>Temp. Min : ${tmin} °C</p>
  <p>Temp. Max : ${tmax} °C</p>
  <p>Pressure : ${pressure} hPa</p>
  <p>Humidity : ${humidity}%</p>
  <p>Feels like : ${feels} °C</p>
  
  `;
  sidebar.appendChild(tempDiv);

  const wind = document.createElement("div");
  wind.classList.add("weatherInfo");
  wind.style.display = "flex";
  wind.style.opacity = "1";
  wind.innerHTML = `
  <h3>Wind</h3>
  <p>Speed: ${Speed} m/s</p>
  <p>Direction: ${Direction}deg</p>
  
  `;
  sidebar.appendChild(wind);

  sidebar.style.width = "200px";

  hint.style.opacity = "0";

  // setTimeout((e) => {
  //   hint.style.opacity = "1";
  //   sidebar.style.width = "100px";
  //   tempDiv.style.display = "none";
  //   tempDiv.style.opacity = "0";
  // }, 3000);
};

async function get16(lat, lon) {
  const KEY = "763c971b44d5954b92fd11041f67d9fc";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=4&appid={API key}`
  );
  const data = await response.text();
  console.log(data);
  // updateUi(data);
}
