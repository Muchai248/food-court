
export default function MenuCardItem({foodItem, setSelectedItem, setUpdateData}){

    function handlecard(e){
        setUpdateData(true)
        setSelectedItem(foodItem)
    }
    return (
        <div className="itemCard" onClick={handlecard}>
            <div className="foodPlate">
                <img src={foodItem.image} alt="" style={{objectFit: "cover"}} width="100%" height="100%"/>
            </div>
            <div className="ItemName">{foodItem.food}</div>
        </div>
    )
}