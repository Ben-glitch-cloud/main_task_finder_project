import React, { useEffect, useState } from "react"
import ShowTask from "./Components/showTask/showTask";
import InformUserArea from "./Components/informUserArea/informUserArea";

// style
import "./styles/main.scss"

function App() {

  const [filterData, setFilterData] = useState([])

  function pushFilterData(data){
    setFilterData((filterData) => filterData = data)
  }

  // might need useEffect some where here

  return (
    <div className="App">
      <div className="appMainPageConatiner">
        <InformUserArea getFilterData={pushFilterData}/>
        <ShowTask pushUserFilterData={filterData}/>
      </div>
    </div>
  );
}

export default App;
