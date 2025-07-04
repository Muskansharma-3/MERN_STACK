import React, { useEffect, useState } from 'react'

const ResizeComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const handleResize=()=>setWindowWidth(window.innerWidth);
    console.log('Event listener added for resize');
    window.addEventListener('resize', handleResize);
    return()=>{
        console.log('Event listener removed for resize');
        window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <div>
        <h1>Window width: {windowWidth}px</h1>
    </div>
  )
}

export default ResizeComponent