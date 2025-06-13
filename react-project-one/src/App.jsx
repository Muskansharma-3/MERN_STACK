import React from 'react'
import UserCard from "./components/UserCard"


function App() {

  return (
    <div className="container">
      <UserCard name="Muskan Sharma" desc="desc1"/>
      <UserCard name="Shaweta Sharma" desc="desc2"/>
      <UserCard name="Kanvi Sharma" desc="desc3"/>
    </div>
  )
}

export default App
