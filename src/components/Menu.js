import { useState } from "react";
import MenuCardItem from "./MenuItemCard";
import OrderCard from "./OrderCard";
import { PreviewInfo } from "./PreviewInfo";

export default function Menu({currentindex, newdata, restaurant, }){
    const currentRestaurant = newdata.current[currentindex]
    const [updateData, setUpdateData] = useState(false)
    const [selecteditem, setSelectedItem]=useState({})
    const [activeTab, setActiveTab]=useState('overview')
    const [currentInd, setCurrentInd]=useState()
    const itemsPerPage = 4;
    const foods =currentRestaurant.food.map((foodItem, index)=>{
        return(<MenuCardItem key={index} foodItem={foodItem} setSelectedItem={setSelectedItem} setUpdateData={setUpdateData}/>)
    })

    const [Orders, setOrders]=useState([])

    function showNextItems(){
        setCurrentInd((prevIndex)=>{
            return prevIndex + itemsPerPage
        })
    }
    function showPreviousItems(){
        setCurrentInd((prevIndex)=>{
            return prevIndex - itemsPerPage
        })
    }

    const cappedItems = foods.slice(currentInd, currentInd + itemsPerPage)
    console.log(cappedItems)

    function handleorderlisting(){
        setOrders([...Orders, selecteditem])
    }
    function changeToOrders(){
        setActiveTab('orders')
    }
    function changeToOverview(){
        setActiveTab('overview')
    }

    return (
        <div className="menu">
            {/* <im src="src/assets/menu.jpg" className="photo"/> */}
            <div className="leftSection">
                <div className="imagedetswrapper">
                    <div className="dishImage">
                        {/* <img src={selecteditem === 'undefined' ? selecteditem.image: currentRestaurant.image} width="100%" height="100%"/> */}
                    </div>
                    <div className="foodDets">
                        <div className="foodName">{updateData ? selecteditem.food : currentRestaurant.name}</div>
                        <div> <button onClick={handleorderlisting}>Order food</button> </div>
                    </div>
                </div>
                <div className="Menudisplay">
                    <button className="menuSlideControlsleft" onClick={showPreviousItems} disabled={currentInd<=0}> L </button>
                    <button className="menuSlideControlsright" onClick={showNextItems} disabled={currentInd >= foods.length - itemsPerPage}> R </button>
                    {foods}
                </div>
                <div className="filters">filters</div>
            </div>
            <div className="rightSection">
                <div className="overview">
                    <div className="tabs">
                        <div onClick={changeToOverview} style={{color: activeTab === 'overview' ? 'black':'grey'}}>Overview</div>
                        <div className="orderTab">
                            <div onClick={changeToOrders} style={{color: activeTab === 'orders' ? 'black':'grey'}}>Orders</div>
                            <div className="ordersIndicator" style={{display: Object.keys(Orders).length > 0 ? "block" : "none"}}>.</div>
                        </div>
                    </div>
                    {activeTab !== 'overview' ? Orders.map((item, index) => (
                        <OrderCard key={index} item={item} setOrders={setOrders} orders={Orders}/>
                    )) : <PreviewInfo updateData={updateData} currentRestaurant={currentRestaurant} selecteditem={selecteditem} />}
                    <button className="buttonReserve" style={{display: activeTab === 'orders' ? 'block':'none'}}>Reserve order</button>
                </div>
            </div>
        </div>
    )
}