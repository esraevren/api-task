import React, { useState, useEffect } from "react";
import axios from "axios";
function Finance() {
  useEffect(() => {
    const getFinance = async () => {
      const response = await axios.get(
        'https://api.collectapi.com/weather/getWeather?data.city=ankara', 
  );
      console.log(response.data);
      
    };
    getFinance();
  }, []);




  return (
    <div>Finance</div>
  )
}

export default Finance