import React from "react";
import { WiSunrise } from "react-icons/wi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Header from "./components/Header";

import "./App.css";
import News from "./components/News";
import Finance from "./components/Finance";
import Weather from "./components/Weather";
import Content from "./components/Content";

function App() {
  const date = new Date();
  const showTime = date.getHours();

  return (
    <div className="App h-screen overflow-y-scroll scrollbar-hide overflow-x-hidden px-6">
      <Header />
      <div className="flex items-start space-x-2 justify-start w-full ">
        <Finance />
        <Content />
      </div>
    </div>
  );
}

export default App;
