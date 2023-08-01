import LandingPage from './components/LandingPage';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [restaurant, setRestaurant]=useState([])
  const [currentindex, setCurrentIndex]=useState(0)

  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/Muchai248/Muchai-248-restaurant/db")
    .then((r)=>r.json())
    .then((data)=>{
      setRestaurant(data)
      // console.log(data)
    })
    

  },[])


  return (
    <>
    <div>
      <LandingPage currentindex={currentindex} setCurrentIndex={setCurrentIndex} restaurant={restaurant} />
    </div>
    </>
  );
}

export default App;
