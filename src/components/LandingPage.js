import { useState } from "react"
import { BrowserRouter } from "react-router-dom"

export default function LandingPage({restaurant, setRestaurant, currentindex,  setCurrentIndex, newdata}){
    const [data, setData]=useState({...newdata.current})
    console.log(restaurant);

    function handleLeft(){

        if(currentindex>0){
            console.log("y")
            const newData = restaurant.restaurants[currentindex - 1]
            setData(newData)
            setCurrentIndex(currentindex-1)
        }
    }

    function handleRight(){
        if(currentindex<restaurant.length){
            console.log("1");
            const newData = restaurant.restaurants[currentindex + 1]
            setData(newData)
            setCurrentIndex(currentindex+1)
        }
    }

    return(
        <div className="homepage">
            <img src="https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" width="100%" height="100%"/>
            { <div className="homename">{data.name ? data.name : 'newdata.current.name' }</div> }
            <div className="homedescription">{data.description ? data.description : "newdata.current.description" }</div>
            <div className="arrowleft" onClick={handleLeft}> arrow left</div>
            <div className="arrowright" onClick={handleRight}> arrow right </div>
            <div className="restimage">
                <img src={data.image ? data.image : "newdata.current.image"} width="100%" height="100%" />
                </div>
            <div className="circle">
                {/* {restaurant.restaurants.map((element, index) => {
                    return <div key={index} className="indicator" style={{backgroundColor: currentindex === index ? 'blue' : 'white'}}></div>
                })} */}
                {/* <div className="indicator"></div>
                <div className="indicator"></div>
                <div className="indicator"></div> */}
            </div>
        </div>
    )
}