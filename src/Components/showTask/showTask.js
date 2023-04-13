import React, { useEffect, useState } from "react"

function ShowTask(props){

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false) 
  const [orginalURL, setURLOrginal] = useState("http://www.boredapi.com/api/activity")
  const [url, setUrl] = useState("http://www.boredapi.com/api/activity")  

  function findTaskNow(){

    setUrl((url) => url = orginalURL)

    let APIString = []

    let fullAPI = url

    for(let i = 0; i < props.pushUserFilterData.length; i++){
      if(Object.entries(props.pushUserFilterData[i])[0][1] !== null){
        APIString.push(`${Object.entries(props.pushUserFilterData[i])[0][0]}` + "=" + `${Object.entries(props.pushUserFilterData[i])[0][1]}`)
      }
    }

    if(APIString.length !== 0){
      let editedStringAPI = "?" + APIString.join('&')
      fullAPI = url + editedStringAPI
    }

    console.log(fullAPI, 'state chnaged')

    fetchData(fullAPI)

  }


  const fetchData = async (u) => {
    const result = await fetch(u)
    const res = await result.json() 
    setData([res])
    setLoading((loading) => true)
  }

  
    return(
           <div className="secondAppItemArea">
              <button className="findBtutton" onClick={findTaskNow}>Find Activity</button>

              {data.map((task) => {
                return <div> 
                  <p>Activity : {task['activity']}</p>
                  <p>Accessibility : {task['accessibility']}</p>
                  <p>Type : {task['type']}</p>
                  <p>participants: {task['participants']}</p>
                  <p>Price {task['price']}</p>
                  <p>Link : {task['link']}</p>
                  <p>key : {task['key']}</p>
                  </div>
              })}
           </div>
        )
  
}

export default ShowTask;