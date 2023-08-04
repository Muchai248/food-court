import LandingPage from './components/LandingPage';
import { useEffect, useState, useRef} from 'react';
import './App.css';
import Menu from './components/Menu';
import Lock from './components/Lock';
import {Route, Routes} from "react-router-dom"

function App() {

  const [restaurantId, setRestaurantId]=useState(0) 
  const [restaurant, setRestaurant]=useState([])
  const [currentindex, setCurrentIndex]=useState(0)
  const [changed, setChanged] = useState(false)
  const newdata=useRef()
  const [Orders, setOrders]=useState([])


  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/Muchai248/Muchai-248-restaurant/db")
    .then((r)=>r.json())
    .then((data)=>{
      setRestaurant(data)
      newdata.current=data.restaurants
    })

  },[])


  return (
    // <Router>
    <>
      <Routes>
        <Route path='/' element={ newdata.current && !changed ? <LandingPage currentindex={currentindex} setCurrentIndex={setCurrentIndex} restaurant={restaurant}  newdata={newdata} setChanged={setChanged}/> : <div></div>}></Route>
        <Route path='/restaurant' element={newdata.current && changed ? <Menu currentindex={currentindex} newdata={newdata} restaurant={restaurant} Orders={Orders} setOrders={setOrders} setRestaurantId={setRestaurantId} /> : <div></div> }/>
        <Route path='/restaurant/order' element={<Lock Orders={Orders} newdata={newdata} currentindex={currentindex} />}/>
      </Routes>
    </>
    // </Router>
    // <>
    // <div>
    //   {/* { newdata.current && !changed ? <LandingPage currentindex={currentindex} setCurrentIndex={setCurrentIndex} restaurant={restaurant}  newdata={newdata} setChanged={setChanged}/> : <div></div>}
    //   {newdata.current && changed ? <Menu currentindex={currentindex} newdata={newdata} restaurant={restaurant}/> : <div></div> }
    //   {newdata.current && changed ? <Lock list={list}/>:""} */}
    // </div>
    // </>
  );
}

export default App;
