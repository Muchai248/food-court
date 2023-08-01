import LandingPage from './components/LandingPage';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [restaurant, setRestaurant]=useState([])

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
      <LandingPage/>
    </div>
    </>
  );
}

export default App;
