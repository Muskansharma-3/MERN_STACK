import React from 'react'
import mypic from '../assets/mypic.webp'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img id='user-img' src={mypic} alt="Muskan" />
        <p id='user-desc'>BTech CSE Student</p>
    </div>
  )
}

export default UserCard