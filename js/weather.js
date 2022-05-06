// API key. Replace with your API key
const APIKEY = 'ed7a4f11dea7dc1b5a670469af10b79a';
// City
const city = 'Kirkwall';
// Units for Farenheit
const units = 'imperial';

// URL query string
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;

// Using fetch to get data
fetch(url)
.then( response => response.json() )
.then( data => {
	
  // Get Container for Weather   
  const weatherContainer = document.querySelector('.weather');
  
  const dir1 = data.coord.lat < 0 ? "S" : "N";
  const dir2 = data.coord.lon < 0 ? "W" : "E";
  const lat = data.coord.lat < 0 ? (data.coord.lat * -1) : data.coord.lat;
  const lon = data.coord.lon < 0 ? (data.coord.lon * -1) : data.coord.lon;
  const win = data.wind.deg;
  const windir = win < 11.25 || win > 348.75 ? "N" :
				win > 11.25 && win < 33.75 ? "NNE" :
				win > 33.75 && win < 56.25 ? "NE" :
				win > 56.25 && win < 78.75 ? "ENE" :
				win > 78.75 && win < 101.25 ? "E" :
				win > 101.25 && win < 123.75 ? "ESE" :
				win > 123.75 && win < 146.25 ? "SE" :
				win > 146.25 && win < 168.75 ? "SSE" :
				win > 168.75 && win < 191.25 ? "S" :
				win > 191.25 && win < 213.75 ? "SSW" :
				win > 213.75 && win < 236.75 ? "SW" :
				win > 236.25 && win < 258.75 ? "WSW" :
				win > 258.75 && win < 281.25 ? "W" :
				win > 281.25 && win < 303.75 ? "WNW" :
				win > 303.75 && win < 326.25 ? "NW" :
				win > 326.25 && win < 348.75 ? "NNW" :
				"ERR";
  const sunup = data.sys.sunrise;
  const dateobj1 = new Date(sunup * 1000);
  const hold1 = dateobj1.toUTCString();
  const timeup = hold1.slice(-12, -7);
  
  const sundown = data.sys.sunset;
  const dateobj2 = new Date(sundown * 1000);
  const hold2 = dateobj2.toUTCString();
  const timedown = hold2.slice(-12, -7);
  
  // Template to output
  const template = `
    <section class="locale">
		<data value="${data.name}, ${data.sys.country}" class="city">${data.name}, ${data.sys.country}</data><br>
		<data value="${data.coord.lat}, ${data.coord.lon}" class="latlon">${lat}&#xb0; ${dir1}, ${lon}&#xb0; ${dir2}</data>
	</section><section class="weathersub">
		<data value="${data.main.temp}" class="temp1">${data.main.temp}&#8457;</data><br>
		<data value="${data.main.feels_like}" class="temp2">Feels ${data.main.feels_like}&#8457;</data>
	</section>
	<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Placeholder">
  `;
  
  // Insert dynamic template to container
  weatherContainer.insertAdjacentHTML("afterbegin", template);
  
  
	const template2 = `
	<section class="left">
		<data value="${data.weather[0].main}" class="oth"><strong>Weather:</strong> ${data.weather[0].main}, ${data.weather[0].description}</data><br><br>
		<data value="${data.wind.speed}" class="oth"><strong>Wind:</strong> ${data.wind.speed} mph, ${windir}</data><br><br>
		<data value="${data.sys.sunrise}" class="oth"><strong>Sunrise:</strong> ${timeup}</data><br>
		<data value="${data.sys.sunset}" class="oth"><strong>Sunset:</strong> ${timedown}</data>
	</section>
	<section class="right">
		<data value="${data.main.temp_min}" class="oth"><strong>Daily Low:</strong> ${data.main.temp_min}&#8457;</data><br>
		<data value="${data.main.temp_max}" class="oth"><strong>Daily High:</strong> ${data.main.temp_max}&#8457;</data><br><br>
		<data value="${data.main.humidity}" class="oth"><strong>Humidity:</strong> ${data.main.humidity}%</data><br><br>
		<data value="${data.clouds.all}" class="oth"><strong>Cloudiness:</strong> ${data.clouds.all}%</data>
	</section>
	`;
	
	const otherinf = document.querySelector('.otherinfo');
	otherinf.insertAdjacentHTML("afterbegin", template2);
  
});