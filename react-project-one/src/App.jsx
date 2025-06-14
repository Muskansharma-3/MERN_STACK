import React, {useState} from 'react'
import UserCard from "./components/UserCard"
import UseState from './components/UseState'
import Card from './components/Card'
import Button from './components/Button'
import StateLifting from './components/StateLifting'


function App() {
  // const [count, setCount]=useState(0);
  // function handleClick(){
  //   setCount(count + 1);
    
  // }

  const[name, setName] = useState('');

  return (
    <div className="container">
      {/* <UserCard name="Muskan Sharma" desc="desc1" />
      <UserCard name="Shaweta Sharma" desc="desc2"/>
      <UserCard name="Kanvi Sharma" desc="desc3"/> */}
      {/* <Card>
        <h1>Muskan Sharma</h1>
        <p>BTech CSE Student</p>
      </Card> */}

      {/* <Button handleClick={handleClick}>
        <h1>{count}</h1>
        </Button> */}

      {/* <UseState/> */}

      <StateLifting title="Card1" name={name} setName={setName}/>
      <StateLifting title="Card2" name={name} setName={setName}/>
      {/* <p>I am inside parent component and the value of name is {name}</p> */}
    </div>
  )
}

export default App
