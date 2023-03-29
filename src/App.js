import React, { useEffect, useState } from "react"
import './App.scss';

function App() {

  const [data, setData] = useState([])
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://www.boredapi.com/api/activity/")
      const res = await result.json() 
      setData([...data, res])
      // setLoading(loading => !loading)
    }
    fetchData()
  }, [])

  console.log(data)
  

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
