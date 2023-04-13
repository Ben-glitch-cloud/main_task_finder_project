import React, { useEffect, useState } from "react"

function FormTask(props){

    const [maxPrice, setMaxPrice] = useState({"maxPrice": null})
    const [minPrice, setMinPrice] = useState({"minPrice": null})
    const [participants, setParticipants] = useState({"participants": null})
    const [accessibility, setAccessibility] = useState({"accessibility": null})
    const [key, setKey] = useState({"key": null})
    const [type, setType] = useState({'type': null})

    function getFormFilterData(e){
      switch (e.target.name) {
        case "participants":
            setParticipants({"participants": e.target.value})
            break;
        case "accessibility":
            setAccessibility({"accessibility": e.target.value})
            break;
        case "key":
            setKey({"key": e.target.value})
            break;
        case "type":
            setType({"type": e.target.value})
            break;
        default:
            break;
      }
    }

    useEffect(() => {
        props.GetFilterData([maxPrice, minPrice, participants, accessibility, key, type])
    }, [maxPrice, minPrice, participants, accessibility, key, type])

    function getFormFilterMinPrice(e){
        if((maxPrice['maxPrice'] === null || Number(e.target.value) < maxPrice['maxPrice']) && e.target.value !== "Null"){
            setMinPrice({"minPrice": Number(e.target.value)})
        } else if(e.target.value === "Null"){
            setMinPrice({"minPrice": null})
        } else {
            console.log('min price must be smaller than max price')
        }
    }

    function getFormFilterMaxPrice(e){ 
        if((minPrice['minPrice'] === null || Number(e.target.value) > minPrice['minPrice']) && e.target.value !== "Null"){
            setMaxPrice({"maxPrice": Number(e.target.value)})
        } else if(e.target.value === "Null"){
            setMaxPrice({"maxPrice": null})
        } else {
            console.log('max price must be smaller than min')
        }
    }


    return(
        <div className="formContainer">
                    <div className="formParts">
                        <form>  
                            <label>Participants</label>
                            <select name="participants" onChange={getFormFilterData}>
                                <option value="null">Null</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>    
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </form>

                        <form>
                            <label>Accessibility</label>
                            <select name="accessibility" onChange={getFormFilterData}>
                                <option>Null</option>
                                <option>0.1</option>
                                <option>0.2</option>
                                <option>0.3</option>
                                <option>0.4</option>
                                <option>0.5</option>
                                <option>0.6</option>
                                <option>0.7</option>
                                <option>0.8</option>
                                <option>0.9</option>
                                <option>1</option>
                            </select>
                        </form>
                    </div>

                    <div className="formParts">
                        <form>
                            <label>Min Price</label>
                            <select name="Min Price" onChange={getFormFilterMinPrice}>
                                <option>Null</option>
                                <option>0.1</option>
                                <option>0.2</option>
                                <option>0.3</option>
                                <option>0.4</option>
                                <option>0.5</option>
                                <option>0.6</option>
                                <option>0.7</option>
                                <option>0.8</option>
                                <option>0.9</option>
                                <option>1</option>
                            </select>
                        </form>

                        <form>
                            <label>Max Price</label>
                            <select name="Max Price" onChange={getFormFilterMaxPrice}>
                                <option>Null</option>
                                <option>0.1</option>
                                <option>0.2</option>
                                <option>0.3</option>
                                <option>0.4</option>
                                <option>0.5</option>
                                <option>0.6</option>
                                <option>0.7</option>
                                <option>0.8</option>
                                <option>0.9</option>
                                <option>1</option>
                            </select>
                        </form>
                    </div>

                    <div className="formParts">
                        <form>
                            <label>Type</label>
                            <select name="type" onChange={getFormFilterData}>
                                <option>Null</option>
                                <option>education</option>
                                <option>recreational</option>
                                <option>social</option>
                                <option>diy</option>
                                <option>charity</option>
                                <option>cooking</option>
                                <option>relaxation</option>
                                <option>music</option>
                                <option>busywork</option>
                            </select>
                        </form>

                        <form>
                            <label>key</label>
                            <input name="key" onChange={getFormFilterData} type="number" placeholder="1000000 - 999999"></input>
                        </form>
                    </div>
                </div>
    )
}

export default FormTask;