import React, { useEffect, useState } from 'react'


//varistion 2: runs on first render

const TimerComponent = () => {
    const [seconds, setSeconds]=useState(0);
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            console.log("SetInterval executed!")
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        return()=>{
            console.log("Time to stop!")
            clearInterval(intervalId);
            
        }
    },[]);


  return (
    <div>
        <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponent