import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [ip, setIp] = useState({});
  useEffect(()=> {
    const fetchData = async () => {
      // const data = await fetch();
      const  data = await fetch("https://api-v1.com/v1/sV3.php?key=PI6");
      const jsonData = await data.json();
      console.log(jsonData);
      setIp(jsonData);
    };
    fetchData();


  }, []);

  return (
    <>
    <h1>{ip.A}</h1>
    <h1>{ip.B}</h1>
    <h1>{ip.D}</h1>
    <h1>{ip.L}</h1>
    <h1>{ip.M}</h1>
    <h1>{ip.d}</h1>
    <h1>{ip.e}</h1>
    <h1>{ip.f}</h1>
    </>
  )
}

export default App
