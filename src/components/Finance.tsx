import React, { useState, useEffect } from "react";
import axios from "axios";

function Finance() {
  useEffect(() => {
    const getFinance = async () => {
      const response = await axios.get('https://api.collectapi.com/economy/allCurrency'
        , {
       headers:{
        "Authorization": "apikey 1z2myxRiLOzI2iFjtipjAb:5IEGuIKvzg7AspVuVCKt0w"
       },
       
           }
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