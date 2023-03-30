import React, { useEffect, useState } from "react"

function FormTask(){


    return(
        <div className="formContainer">
                    <div className="formParts">
                        <form>
                            <label>Participants</label>
                            <select>
                                <option>Null</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </form>

                        <form>
                            <label>Accessibility</label>
                            <select>
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
                            <select>
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
                            <select>
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
                            <select>
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
                            <input placeholder="1000000 - 999999"></input>
                        </form>
                    </div>
                </div>
    )
}

export default FormTask;