import { BrowserRouter } from "react-router-dom"

export default function LandingPage({restaurant, setRestaurant}){

    return(
        <div className="homepage">
            <img/>
            <div className="homename">name</div>
             <div className="homedescription"> Description</div>
            <div className="arrowleft"> arrow left </div>
            <di className="arrowright"> arrow right </di>
            <div> 
                <div className="indicator"> a </div>
                <div className="indicator"> b</div>
                <div className="indicator"> c</div>
             </div>
            
        </div>
    )

 
}