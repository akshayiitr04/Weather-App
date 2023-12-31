async function getWeatherData(city) {
    cityname.innerHTML = city;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f4c0bc1ea5msh309c75ed78ee64ep1c35b3jsnbda0d335d6bb',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json(); // Parse response as JSON
    //   console.log(result);

      
   
     temp.innerHTML = result.temp;
     temp2.innerHTML = result.temp;
     humidity.innerHTML = result.humidity;
     humidity2.innerHTML = result.humidity;
     feels_like.innerHTML = result.feels_like;
   
     min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
     wind_speed.innerHTML = result.wind_speed;
     wind_speed2.innerHTML = result.wind_speed;
     wind_degree.innerHTML = result.wind_degrees;
     sunrise.innerHTML = result.sunrise;
     sunset.innerHTML = result.sunset;


    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the async function


  submit.addEventListener("click", (e)=>{
    e.preventDefault();
    getWeatherData(city.value);
  });


  getWeatherData("Delhi");




