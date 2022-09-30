import React, { useState, useEffect } from "react";
import axios from "axios";
import dolar from "../assets/images/img1.png";
import euro from "../assets/images/euro.png";
import gold from "../assets/images/gold.jpg";

function Finance() {
  const [finance, setFinance] = useState<{
    dolar: number;
    euro: number;
    altın: number;
  }>({ dolar: 0, euro: 0, altın: 0 });

  const getFinance = async () => {
    const response = await axios.get(
      "https://canlidoviz.com/doviz-kurlari.jsonld"
    );
    console.log(
      response.data.mainEntity.itemListElement
    );
    setFinance({
      dolar:
        response.data.mainEntity.itemListElement[0].currentExchangeRate.price,
        euro:
        response.data.mainEntity.itemListElement[1].currentExchangeRate.price,
        altın:
        response.data.mainEntity.itemListElement[2].currentExchangeRate.price
    });
  };

  useEffect(() => {
    getFinance();
  }, []);

  return (
    <div className="border border-r-gray-400 w-40 h-screen">
      <div className="flex border shadow-2xl pt-5 pb-5 w-36 mb-3 mt-5 mr-3">
        <img src={dolar} className="w-6 h-6 ml-1" />
        <h1 className="font-semibold text-gray-900 ml-1">Dolar: </h1>
        <span className="ml-2">{finance.dolar}</span>
      </div>

      <div className="flex border  shadow-2xl pt-5 pb-5 w-36 mb-3">
        <img src={euro} className="w-6 h-6 ml-1" />
        <h1 className="font-semibold text-gray-900 ml-1">Euro:</h1>
        <span className="ml-2">{finance.euro}</span>
      </div>

      {/* <div className="flex border border-gray-400 shadow-xl pt-5 pb-5 w-36 mb-3">
        <img src={gold} className="w-7 h-7 " />
        <h1>gold</h1>
        <span className="ml-2"></span>
      </div> */}
    </div>
  );
}

export default Finance;
