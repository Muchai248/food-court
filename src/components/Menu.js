import MenuCardItem from "./MenuItemCard";

export default function Menu({currentindex, newdata}){
    const currentRestaurant = newdata.current[currentindex]
    return (
        <div className="menu">
            <div className="leftSection">
                <div className="imagedetswrapper">
                    <div className="dishImage">
                        <img src={currentRestaurant.image} width="100%" height="100%"/>
                    </div>
                    <div className="foodDets">
                        <div className="foodName">{currentRestaurant.name}</div>
                        <div> <button>Order food</button> </div>
                    </div>
                </div>
                <div className="Menudisplay">
                    <div className="menuSlideControlsleft"> L </div>
                    <div className="menuSlideControlsright"> R </div>
                    <MenuCardItem/>
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