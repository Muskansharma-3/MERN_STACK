import React, { useContext } from 'react'
// import { UserContext } from '../App'
import { ThemeContext } from '../App'

const ChildC = () => {
    const theme=useContext(ThemeContext);
  return (
    <div>
        {theme}
    </div>
  )
}

export default ChildC