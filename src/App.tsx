import React from "react";
import { WiSunrise } from "react-icons/wi";
import { BsFillMoonStarsFill } from "react-icons/bs";

import "./App.css";
import News from "./components/News";

function App() {
  const date = new Date();
  const showTime = date.getHours();

  return (
    <div>
      {(() => {
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

      <News />
    </div>
  );
}

export default App;
