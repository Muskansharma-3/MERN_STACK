import React, { useEffect, useState } from 'react'

// variation 1 : runs on every render

const LoggerComponent = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("Component rendered or count changed:", count);
    })
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default LoggerComponent