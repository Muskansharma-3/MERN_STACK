import React from 'react'
import mypic from '../assets/mypic.webp'
import "./UserCard.css"

const UserCard = () => {
  return (
    <div className='user-container'>
        <p id='user-name'>Muskan Sharma</p>
        <img id='user-img' src={mypic} alt="Muskan" />
        <p id='user-desc'>CSE Student</p>
    </div>
  )
}

export default UserCard