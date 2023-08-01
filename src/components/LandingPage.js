import { useState } from "react"
import { BrowserRouter } from "react-router-dom"

export default function LandingPage({restaurant, setRestaurant, currentindex,  setCurrentIndex, newdata}){
   const [data, setData]=useState({...restaurant[0]})
    // console.log(restaurant.restaurants)

    // console.log(newdata.current.restaurants)

function handleLeft(){
    // console.log(restaurant)
    if(currentindex>0){
     setCurrentIndex(currentindex-1)
    }
    console.log(currentindex)
}

function handleRight(){
    if(currentindex<restaurant.length){
     setCurrentIndex(currentindex+1)
    }
    // console.log(currentindex)
}

    return(
        <div className="homepage">
            <img src="https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" width="100%" height="100%"/>
            {/* <div className="homename">{data.name}</div> */}
             {/* <div className="homedescription">{data.description}
       </div> */}
            <div className="arrowleft" onClick={handleLeft}> arrow left</div>
            <div className="arrowright" onClick={handleRight}> arrow right </div>
            <div className="restimage"> 
                {/* <img src={data.image}/>  */}
                </div>
            <div className="circle"> 
                <div className="indicator"> a </div>
                <div className="indicator"> b</div>
                <div className="indicator"> c</div>
             </div>
            
        </div>
    )

 
}