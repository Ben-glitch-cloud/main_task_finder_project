import React, { useEffect, useState } from "react"

function FormTask(props){

    const [maxPrice, setMaxPrice] = useState({"maxprice": 'null'})
    const [minPrice, setMinPrice] = useState({"minprice": 'null'}) 
    const [keyError, setKeyError] = useState(false)
    const [priceError, setPriceError] = useState(false)
    const [participants, setParticipants] = useState({"participants": 'null'})
    const [accessibility, setAccessibility] = useState({"accessibility": 'null'})
    const [keyValue, setValueKey] = useState('null')
    const [type, setType] = useState({'type': 'null'})

    function getFormFilterData(e){
      switch (e.target.name) {
        case "participants":
            setParticipants({"participants": e.target.value})
            break;
        case "accessibility":
            setAccessibility({"accessibility": e.target.value})
            break;
        case "key":
            setValueKey({"key": 'null'})
            // chnage this later
            break;
        case "type":
            setType({"type": e.target.value})
            break;
        default:
            break;
      }
    }

    function getFormActivityKey(e){
        setValueKey((keyValue) => keyValue = e.target.value)
        console.log(keyValue)
        if(Number(keyValue) < 1000000 && Number(keyValue) > 999999){
            setKeyError(true)
            console.log('wrong')
        } else {
            setKeyError(false)
        }
    }

    useEffect(() => {
        props.GetFilterData([maxPrice, minPrice, participants, accessibility, {'key': keyValue}, type])
    }, [maxPrice, minPrice, participants, accessibility, type])

    function getFormFilterMinPrice(e){
        if((maxPrice['maxprice'] === 'null' || Number(e.target.value) < maxPrice['maxprice']) && e.target.value !== "Null"){
            setPriceError(false)
            setMinPrice({"minprice": Number(e.target.value)})
        } else if(e.target.value === "Null"){
            setPriceError(false)
            setMinPrice({"minprice": 'null'})
        } else {
            setPriceError(true) 
            console.log('min price must be smaller than max price')
        }
    }

    function getFormFilterMaxPrice(e){ 
        if((minPrice['minprice'] === 'null' || Number(e.target.value) > minPrice['minprice']) && e.target.value !== "Null"){
            setPriceError(false)
            setMaxPrice({"maxprice": Number(e.target.value)})
        } else if(e.target.value === "Null"){
            setPriceError(false)
            setMaxPrice({"mapPrice": 'null'})
        } else {
            setPriceError(true)
            console.log(maxPrice, minPrice)
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
                                <option value="null">Null</option>
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
                            <select name="Min Price" id="min" onChange={getFormFilterMinPrice}>
                                <option value="null">Null</option>
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
                            <select id="max" name="Max Price" onChange={getFormFilterMaxPrice}>
                                <option value="null">Null</option>
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
                                <option value="null">Null</option>
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
                            <input name="key" onChange={getFormActivityKey} type="number" value={keyValue} placeholder="1000000 - 999999"></input>
                        </form>
                    </div>
                    <div className="errorContainer">
                        {keyError ? <p id="priceMinError">Key not valid</p> : null}
                        {priceError ? <p id="priceMinError">Minimum price must be smaller than Maximum price</p> : null}
                    </div>
                </div>
    )
}

export default FormTask;