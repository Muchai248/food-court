// import leftarrow from "../assets/left-arrow.png"
import { useState } from "react"


export default function LandingPage({restaurant, setRestaurant, currentindex,  setCurrentIndex, newdata, setChanged}){
   const [data, setData]=useState([])
   const placeholder = newdata.current[0]
    // console.log(restaurant.restaurants)
    // setData(restaurant.restaurants[0])

function handleLeft(){
    // console.log(restaurant)
    if(currentindex>0){
        const newData = restaurant.restaurants[currentindex - 1]
        setData(newData)
        setCurrentIndex(currentindex-1)
    }
}

function handleRight(){
    if(currentindex<restaurant.restaurants.length - 1){
        const newData = restaurant.restaurants[currentindex + 1]
        setData(newData)
        setCurrentIndex(currentindex+1)
    }
}

function handleChange(){
    setChanged(true)
}

    return(
        <div className="homepage" >
            <img src="https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" width="100%" height="100%" className="landingBackground"/>
            { <div className="homename">{data.name ? data.name : placeholder.name}</div> }
            <div className="homedescription">{data.description ? data.description : placeholder.description}</div>
            <div className="menuSlideControlsleft" onClick={handleLeft}>L</div>
            <div className="menuSlideControlsright" onClick={handleRight}>R</div>
            <div className="restimage">
                <img src={data.image ? data.image : placeholder.image} width="100%" height="100%" onClick={handleChange}/>
                </div>
            <div className="circle">
                {restaurant.restaurants.map((vendor, index) => {
                    return (<div key={index} className="indicator" style={{backgroundColor: index === currentindex ? 'blue' : 'white'}}></div>)
                })}
                {/* <div className="indicator"></div>
                <div className="indicator"></div>
                <div className="indicator"></div> */}
            </div>
        </div>
    )
}