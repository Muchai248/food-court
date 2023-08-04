import { useState } from "react"

export default function Lock({Orders, newdata, currentindex}){
    const [selectedTable, setSelectedTable] = useState()
    const configData ={ 
        "id":1,
         "restaurant_id":newdata.current[currentindex].restaurant_id,
            "Table":selectedTable,
            "food":Orders
    }
    
    function lockOrder(){
        // fetch("https://my-json-server.typicode.com/Muchai248/Muchai-248-restaurant/orders",{
        //     method:"POST",
        //     headers:{
        //       'Content-Type':'application/json',
        //       "Accept":"application/json"
        //     },
        //     body:JSON.stringify(configData)
          window.alert(`Order Received ${selectedTable}`)
        
        
        console.log(newdata.current[currentindex])
    }
    const cards = Orders.map((item, index)=>{
        return <div key={index} className="lockCard" style={{display: "flex", flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'}}>
            {index % 2 === 0 ? (
                <>
                    <div className="lockImage">
                        <img src={item.image} alt="" style={{objectFit: "cover"}} width="100%" height="100%"/>
                    </div>
                    <div className="lockData">
                        <div>{item.food}</div>
                        <p>{item.description}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="lockImage">
                        <img src={item.image} alt="" style={{objectFit: "cover"}} width="100%" height="100%"/>
                    </div>
                    <div className="lockData">
                        <div>{item.food}</div>
                        <p>{item.description}</p>
                    </div>
                </>
            )}
        </div>
    })
    function handleTableAssignment(e){
        setSelectedTable(e.target.value)
    }
    return (
        <div className="LockScreen" style={{display: "flex", flexDirection: 'row'}}>
            <div className="LockCenter">
                {cards}
                <div className="bottommSheet">
                <div>
                    <input type="number" onChange={handleTableAssignment} value={selectedTable} placeholder="Enter table number"/>
                </div>
                <button onClick={lockOrder}>Lock Order</button>
            </div>
            </div>
        </div>
    )
}