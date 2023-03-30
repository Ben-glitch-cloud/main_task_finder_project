import React, { useEffect, useState } from "react"

function ShowTask(){

// const [data, setData] = useState([])
// const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await fetch("http://www.boredapi.com/api/activity/")
//       const res = await result.json() 
//       setData([...data, res])
//       setLoading((loading) => true)
//     }
//     fetchData()
//   }, [])


// {data.map((task) => {
//   return <div> 
//           <p>Activity : {task['activity']}</p>
//           <p>Accessibility : {task['accessibility']}</p>
//           <p>Type : {task['type']}</p>
//           <p>{task['participants']}</p>
//           <p>Price {task['price']}</p>
//           <p>Link : {task['link']}</p>
//           <p>key : {task['key']}</p>
//       </div>
// })}

  function Message(){
    console.log('hello')
  }
  
    return(
           <div className="secondAppItemArea">
              <button className="findBtutton" onClick={Message}>Find Activity</button>
           </div>
        )
  
}

export default ShowTask;