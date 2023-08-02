import { useState } from "react";
import MenuCardItem from "./MenuItemCard";
import { object } from "prop-types";

export default function Menu({currentindex, newdata, restaurant, }){
    const list={
        "id":"",
        "food":"",
        "price":"",
        "restaurant_id":""
    }
    const currentRestaurant = newdata.current[currentindex]
    const [selecteditem, setSelectedItem]=useState({})
    const foods =currentRestaurant.food.map((foodItem, index)=>{
        return(<MenuCardItem key={index} foodItem={foodItem} setSelectedItem={setSelectedItem}/>)
        // return(
        // foodItem["restaurant_id"] === currentindex
        // )
    })
    
    const [Orders, setOrders]=useState([])

    function handleorderlisting(e){
        console.log()

        setOrders([...Orders, selecteditem])
        console.log(Orders)
    }


    // const newfoods=foods.map((Item, index)=>{
    //     // console.log(foods)
    //      return(<MenuCardItem key={index} foodItem={Item}/>)
    // })

    return (
        <div className="menu">
            <div className="leftSection">
                <div className="imagedetswrapper">
                    <div className="dishImage">
                        {/* <img src={selecteditem.image ? selecteditem.image: currentRestaurant.image} width="100%" height="100%"/> */}
                    </div>
                    <div className="foodDets">
                        <div className="foodName">{selecteditem ? selecteditem.food : currentRestaurant.food}</div>
                        <div> <button onClick={handleorderlisting}>Order food</button> </div>
                    </div>
                </div>
                <div className="Menudisplay">
                    <div className="menuSlideControlsleft"> L </div>
                    <div className="menuSlideControlsright"> R </div>
                    {foods}
                </div>
                <div className="filters">filters</div>
            </div>
            <div className="rightSection">
                <div className="overview">
                    <div className="tabs">
                        <div>overview</div>
                        <div>Orders</div>
                    </div>
                </div>
            </div>
        </div>
    )
}