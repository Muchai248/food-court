export default function OrderCard({item, setOrders, orders}){
    function removeOrder(){
        const activeOrders = orders.filter(orderItem => (
            item.food !== orderItem.food
        ));
        setOrders(activeOrders)
    }
    return(
        <div className="orderCardWrapper" >
            <div className="orderDataWrapper">
                <div className="orderImage"></div>
                <div className="orderData">
                    <div className="orderName">{item.food}</div>
                    <div>{item.price}</div>
                </div>
            </div>
            <div  className="RemoveOrder" onClick={removeOrder}>
                D
            </div>
        </div>
    )
}