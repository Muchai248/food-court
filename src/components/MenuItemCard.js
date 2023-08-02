
export default function MenuCardItem({foodItem, setSelectedItem, setUpdateData}){

    function handlecard(e){
        setUpdateData(true)
        setSelectedItem(foodItem)
    }
    return (
        <div className="itemCard" onClick={handlecard}>
            <div className="foodPlate"></div>
            <div className="ItemName">{foodItem.food}</div>
        </div>
    )
}