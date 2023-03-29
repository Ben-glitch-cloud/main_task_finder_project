import React, { useEffect, useState } from "react"

function ShowTask(){

const [data, setData] = useState([])
const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://www.boredapi.com/api/activity/")
      const res = await result.json() 
      setData([...data, res])
      setLoading((loading) => true)
    }
    fetchData()
  }, [])
  
  if(loading){
    return(
            <div>
                {data.map((task) => {
                    return <p>{task['activity']}</p>
                })}
            </div>
        )
    } else {
        return <p>Loading</p>
    }

}

export default ShowTask;