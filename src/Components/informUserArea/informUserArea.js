import "../../styles/layout/_informUserAreaLayout.scss";
import FormTask from "../formTask/formTask";
import Footer from "../footer/footer";

function InformUserArea(props){

    function pushFilterData(data){
        props.getFilterData(data)
    }

    // We can now be grabed from the child companonent. 
    // finish this later
    
    return(
        <div className="firstAppItemArea">
            <div className="informationContaner">
                <h1>Are you Bored?</h1>
                <h2>Well Don't Be</h2>
                <p>Find your next task by clicking on the activity button.</p>
                <h2>Filter</h2> 
                <p>You don't want to receive a task that you can not do. So choose your filters.</p>
                <FormTask GetFilterData={pushFilterData}/>
                <Footer/>
            </div>
        </div>
    )
}

export default InformUserArea;