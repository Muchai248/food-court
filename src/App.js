import LandingPage from './components/LandingPage';
import { useEffect, useState, useRef} from 'react';
import './App.css';

function App() {

  const [restaurant, setRestaurant]=useState([])
  const [currentindex, setCurrentIndex]=useState(0)
  const newdata=useRef()



  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/Muchai248/Muchai-248-restaurant/db")
    .then((r)=>r.json())
    .then((data)=>{
      setRestaurant(data)
      newdata.current=data
      // console.log(data)
    })

  },[])


  return (
    <>
    <div>
      <LandingPage currentindex={currentindex} setCurrentIndex={setCurrentIndex} restaurant={restaurant}  newdata={newdata}/>
    </div>
    </>
  );
}

export default App;
