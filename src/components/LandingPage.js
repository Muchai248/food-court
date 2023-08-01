import { useState } from "react"
import { BrowserRouter } from "react-router-dom"

export default function LandingPage({restaurant, setRestaurant, currentindex,  setCurrentIndex, newdata}){
   const [data, setData]=useState([])
    // console.log(data)
    // setData(restaurant.restaurants[0])

function handleLeft(){
    // console.log(restaurant)
    const newData = restaurant.restaurants[0]
    setData(newData)
    if(currentindex>0){
     setCurrentIndex(currentindex-1)
    }
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
            { <div className="homename">{data.name}</div> }
            <div className="homedescription">{data.description}</div>
            <div className="arrowleft" onClick={handleLeft}> arrow left</div>
            <div className="arrowright" onClick={handleRight}> arrow right </div>
            <div className="restimage">
                <img src={data.image} width="100%" height="100%" />
                </div>
            <div className="circle">
                <div className="indicator"></div>
                <div className="indicator"></div>
                <div className="indicator"></div>
            </div>
        </div>
    )
}