import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather() {

  const [weather, setWeather] = useState<{name:string, temp:number}>({name:"",temp:0 })

  useEffect(() => {
    const getWeather = async () => {
      const response = await axios.get(
         "http://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=1ffd9938245d1af65465834682d881b1&units=metric"
       
      );
      console.log(response.data);
      setWeather({name:response.data.name, temp:Math.round(response.data.main.temp)})
      
    };
    getWeather();
  }, []);
  
  return (
    <div>Weather
      {weather.name} 
      {weather.temp}
    </div>
  )
}

export default Weather