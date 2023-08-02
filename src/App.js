import LandingPage from './components/LandingPage';
import { useEffect, useState, useRef} from 'react';
import './App.css';
import Menu from './components/Menu';
// import { BrowserRouter as Router } from "react-router-dom"

function App() {

  const [restaurant, setRestaurant]=useState([])
  const [currentindex, setCurrentIndex]=useState(0)
  const [changed, setChanged] = useState(false)
  const newdata=useRef()
  

  // console.log(newdata)



  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/Muchai248/Muchai-248-restaurant/db")
    .then((r)=>r.json())
    .then((data)=>{
      setRestaurant(data)
      newdata.current=data.restaurants
       console.log(newdata)
    })

  },[])


  return (
    <>
    <div>
      { newdata.current && !changed ? <LandingPage currentindex={currentindex} setCurrentIndex={setCurrentIndex} restaurant={restaurant}  newdata={newdata} setChanged={setChanged}/> : <div></div>}
      {newdata.current && changed ? <Menu currentindex={currentindex} newdata={newdata} restaurant={restaurant}/> : <div>loading</div> }
    </div>
    </>
  );
}

export default App;
