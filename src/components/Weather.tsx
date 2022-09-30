import React, { useState, useEffect } from "react";
import axios from "axios";
import { WiDaySunnyOvercast, WiNightCloudyWindy } from "react-icons/wi";

function Weather() {
  const [weather, setWeather] = useState<{ name: string; temp: number }>({
    name: "",
    temp: 0,
  });

  useEffect(() => {
    const getWeather = async () => {
      const response = await axios.get(
        "http://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=1ffd9938245d1af65465834682d881b1&units=metric"
      );
      console.log(response.data);
      setWeather({
        name: response.data.name,
        temp: Math.round(response.data.main.temp),
      });
    };
    getWeather();
  }, []);

  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg  p-4  items-center justify-center grid grid-cols-2 xl:grid-cols-4 w-full">
      <div className="flex items-center gap-x-2 text-lg  ml-3 text-white font-bold  ">
        {weather.name}{" "}
        {weather.temp > 20 ? <WiDaySunnyOvercast /> : <WiNightCloudyWindy />}{" "}
      </div>
      <span className="font-bold">{weather.temp} derece </span>
    </div>
  );
}

export default Weather;
