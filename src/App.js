import React, { useEffect, useState } from "react"
import ShowTask from "./Components/showTask/showTask";
import InformUserArea from "./Components/informUserArea/informUserArea";

// sass styles
import "./styles/main.scss"

function App() {

  return (
    <div className="App">
      <div className="appMainPageConatiner">
        <InformUserArea/>
        <ShowTask/>
      </div>
    </div>
  );
}

export default App;
