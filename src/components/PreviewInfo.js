export function PreviewInfo({updateData, currentRestaurant, selecteditem}){
    return(
        <div className="infoWrapper">
            <div className="ratings">
                <div className="ratingNum">4.5</div>
            </div>
            <div className="infoName">{updateData ? selecteditem.food : currentRestaurant.name}</div>
            <p>{"updateData ? selecteditem.description : currentRestaurant.description"}</p>
        </div>
    )
}