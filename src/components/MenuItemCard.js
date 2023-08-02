
export default function MenuCardItem({foodItem, setSelectedItem, list}){

    function handlecard(e){
        console.log(foodItem)

        setSelectedItem(foodItem)
        
    }
    return (
        <div className="itemCard" onClick={handlecard}>
            <div className="foodPlate"></div>
            <div className="ItemName">{foodItem.food}</div>
        </div>
    )
}