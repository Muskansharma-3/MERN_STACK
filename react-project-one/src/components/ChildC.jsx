import React, { useContext } from 'react'
// import { UserContext } from '../App'
import { ThemeContext } from '../App'

const ChildC = () => {
    const theme=useContext(ThemeContext);
    function handleClick(){

    }
  return (
    <div>
        <button onClick={handleClick}>Change Theme</button>
    </div>
  )
}

export default ChildC