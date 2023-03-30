import "../../styles/layout/_informUserAreaLayout.scss";

function InformUserArea(){
    return(
        <div className="firstAppItemArea">
            <div className="informationContaner">
                <h1>Are you Bored?</h1>
                <h2>Well Don't Be</h2>
                <p>Find your next task by clicking on the activity button.</p>
                <h2>Filter</h2>
                <p>You don't want to receive a task that you can not do. So choose your filters.</p>
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

                <div>
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
                </div>

            </div>
        </div>
    )
}

export default InformUserArea;