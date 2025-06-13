import React from 'react'
import mypic from '../assets/mypic.webp'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img id='user-img' src={mypic} alt={props.name} />
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard