import React from "react";
import { WiSunrise } from "react-icons/wi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Header from "./components/Header";

import "./App.css";
import News from "./components/News";
import Finance from "./components/Finance";
import Weather from "./components/Weather";

function App() {
  const date = new Date();
  const showTime = date.getHours();

  return (
    <div className="App h-screen overflow-y-scroll scrollbar-hide overflow-x-hidden px-6">
      {/* {(() => {
        if (showTime < 12) {
          return (
            <div>
              <h1 className="text-2xl font-bold  text-red-600">
                Günaydın <WiSunrise />
              </h1>
            </div>
          );
        } else if (showTime < 18) {
          return (
            <div>
              <h1 className=" flex items-center  text-2xl font-bold  text-red-600">
                {" "}
                Tünaydın <WiSunrise />{" "}
              </h1>
            </div>
          );
        } else {
          return (
            <div>
              <h1 className="text-2xl font-bold  text-red-600">
                İyi akşamlar <BsFillMoonStarsFill />{" "}
              </h1>
            </div>
          );
        }
      })()}
     */}
    
    <Header />
     <Finance/> 
    

  </div>  
    
  );
}

export default App;
