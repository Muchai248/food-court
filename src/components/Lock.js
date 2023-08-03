import { useState } from "react"

export default function Lock({list}){
    const [selectedTable, setSelectedTable] = useState()
    const cards = list.map((item, index)=>{
        return <div className="lockCard" style={{display: "flex", flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'}}>
            {index % 2 === 0 ? (
                <>
                    <div className="lockImage"></div>
                    <div className="lockData">
                        <div>name</div>
                        <p>description</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="lockImage"></div>
                    <div className="lockData">
                        <div>name</div>
                        <p>description</p>
                    </div>
                </>
            )}
        </div>
    })
    function handleTableAssignment(){}
    return (
        <div className="LockScreen" style={{display: "flex", flexDirection: 'row'}}>
            <div className="LockCenter">
                {cards}
                <div className="bottommSheet">
                <div>
                    <input type="number" onChange={handleTableAssignment} value={selectedTable} placeholder="Enter table number"/>
                </div>
                <button>Lock Order</button>
            </div>
            </div>
        </div>
    )
}