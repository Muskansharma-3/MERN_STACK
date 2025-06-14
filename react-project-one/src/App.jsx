import React, {useState} from 'react'
import UserCard from "./components/UserCard"
import UseState from './components/UseState'
import Card from './components/Card'
import Button from './components/Button'


function App() {
  const [count, setCount]=useState(0);
  function handleClick(){
    setCount(count + 1);
    
  }

  return (
    <div className="container">
      {/* <UserCard name="Muskan Sharma" desc="desc1" />
      <UserCard name="Shaweta Sharma" desc="desc2"/>
      <UserCard name="Kanvi Sharma" desc="desc3"/> */}
      {/* <Card>
        <h1>Muskan Sharma</h1>
        <p>BTech CSE Student</p>
      </Card> */}

      <Button handleClick={handleClick}>
        <h1>{count}</h1>
        </Button>

      {/* <UseState/> */}
    </div>
  )
}

export default App
