export default function OrderCard({item, setOrders, orders, setOrdersNumber}){
    function removeOrder(){
        const activeOrders = orders.filter(orderItem => (
            item.food !== orderItem.food
        ));
        setOrders(activeOrders)
        setOrdersNumber((previous)=>(previous-1))
    }
    return(
        <div className="orderCardWrapper" >
            <div className="orderDataWrapper">
                <div className="orderImage">
                    <img src={item.image} width="100%" height="100%" alt="" style={{objectFit: "cover"}}/>
                </div>
                <div className="orderData">
                    <div className="orderName">{item.food}</div>
                    <div>ksh: {item.price}</div>
                </div>
            </div>
            <div  className="RemoveOrder" onClick={removeOrder}>
                X
            </div>
        </div>
    )
}