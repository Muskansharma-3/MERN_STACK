import React from 'react'
import UserCard from "./components/UserCard"
import UseState from './components/UseState'
import Card from './components/Card'


function App() {

  return (
    <div className="container">
      {/* <UserCard name="Muskan Sharma" desc="desc1" />
      <UserCard name="Shaweta Sharma" desc="desc2"/>
      <UserCard name="Kanvi Sharma" desc="desc3"/> */}
      <Card>
        <h1>Muskan Sharma</h1>
        <p>BTech CSE Student</p>
      </Card>

      {/* <UseState/> */}
    </div>
  )
}

export default App
