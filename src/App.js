import LandingPage from './components/LandingPage';
import { useEffect, useState, useRef} from 'react';
import './App.css';
import Menu from './components/Menu';
import Lock from './components/Lock';
// import { BrowserRouter as Router } from "react-router-dom"

function App() {

  const [restaurant, setRestaurant]=useState([])
  const [currentindex, setCurrentIndex]=useState(0)
  const [changed, setChanged] = useState(false)
  const newdata=useRef()
  const list = [1,2,3,4,5]

  // console.log(newdata)



  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/Muchai248/Muchai-248-restaurant/db")
    .then((r)=>r.json())
    .then((data)=>{
      setRestaurant(data)
      newdata.current=data.restaurants
    })

  },[])


  return (
    <>
    <div>
      { newdata.current && !changed ? <LandingPage currentindex={currentindex} setCurrentIndex={setCurrentIndex} restaurant={restaurant}  newdata={newdata} setChanged={setChanged}/> : <div></div>}
      {newdata.current && changed ? <Menu currentindex={currentindex} newdata={newdata} restaurant={restaurant}/> : <div></div> }
      {newdata.current && changed ? <Lock list={list}/>:""}
    </div>
    </>
  );
}

export default App;
