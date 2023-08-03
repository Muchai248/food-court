import { useState } from "react"

export default function Search({foods, setFilterFoods}){
    const [searchQuery, setQueryItem] = useState('')
    // const [filterData, setFilteredData] = useState()

    function handleSearch(event){
        const query = event.target.value;
        setQueryItem(query)
        const filteredData = foods.filter(item => item.props.foodItem.food.toLowerCase().includes(query.toLowerCase()))
        setFilterFoods(filteredData)
    }
    return (
        <div className="searchWrapper">
            <input type="text" value={searchQuery} placeholder="Search menu" onChange={handleSearch} style={{height: "25px", width: "100%" , borderRadius: "10px", marginBottom: "20px"}}/>
        </div>
    )
}