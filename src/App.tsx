import React from "react";

import Header from "./components/Header";

import "./App.css";

import Finance from "./components/Finance";

import Content from "./components/Content";

function App() {
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
