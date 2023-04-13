import React, { useEffect, useState } from "react"

function ShowTask(props){

  const [data, setData] = useState([])
  const [dataCollected, setDataCollected] = useState(false)
  const [loading, setLoading] = useState(false) 
  const [orginalURL, setURLOrginal] = useState("http://www.boredapi.com/api/activity")
  const [url, setUrl] = useState("http://www.boredapi.com/api/activity")  

  function findTaskNow(){

    setUrl((url) => url = orginalURL)

    let APIString = []

    let fullAPI = url

    console.log(props.pushUserFilterData)

    for(let i = 0; i < props.pushUserFilterData.length; i++){
      if(Object.entries(props.pushUserFilterData[i])[0][1] !== 'null'){
        APIString.push(`${Object.entries(props.pushUserFilterData[i])[0][0]}` + "=" + `${Object.entries(props.pushUserFilterData[i])[0][1]}`)
      }
    }

    if(APIString.length !== 0){
      let editedStringAPI = "?" + APIString.join('&')
      fullAPI = url + editedStringAPI
    }

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
            {data.length !== 0 ?
              data.map((task) => {
                return <div className="activityContainer"> 
                        <div className="activityItem">
                          <h2>{task['activity']}</h2>
                          <div className="activityItemBoxOne">
                            {task['accessibility'] >= 0.8 ? <p>Very Accessible</p> : null}
                            {task['accessibility'] <= 0.7 && task['accessibility'] >= 0.4  ? <p>Moderately Accessible</p> : null}
                            {task['accessibility'] <= 0.3 && task['accessibility'] >= 0.2  ? <p>Not Very Accessible</p> : null}
                            {task['accessibility'] <= 0.19 && task['accessibility'] >= 0 ? <p>No Accessibility</p> : null}
                            <p>Type : {task['type']}</p>
                          </div>
                          <div className="activityItemBoxOne">
                            <p>Participants: {task['participants']}</p>
                            <p>Price: {task['price']}</p>
                          </div>
                          <div className="activityItemBoxOne">
                          {task['link'] !== undefined ? <a target="_blank" href={task['link']}>Link Found</a> : <p>No Link Found</p>}
                            <p>Key : {task['key']}</p>
                          </div>
                          
                        </div>
                  </div>
              })
              : null }
              <button className="findBtutton" onClick={findTaskNow}>Find Activity</button>
              
           </div>
           
        )
  
}

export default ShowTask;