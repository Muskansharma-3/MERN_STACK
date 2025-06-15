import React, {useState} from 'react'
import UserCard from "./components/UserCard"
import UseState from './components/UseState'
import Card from './components/Card'
import Button from './components/Button'
import StateLifting from './components/StateLifting'
import Logout from './components/Logout'
import Login from './components/Login'
import { IoLanguage } from 'react-icons/io5'
import { div } from 'framer-motion/client'


function App() {

  // Event Handling
  function handleClick(){
    alert("I am clicked!");
  }

  function handleMouseOver(){
    alert("Paragraph hovered!");
  }

  function handleInputChange(e){
    // console.log("Input changed!");
    console.log("Value till now: ", e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault(); // Prevents the default form submission behavior
    console.log("Form submitted!");
  }

  return(
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form>
      <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>I am a para</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )

  // const [count, setCount]=useState(0);
  // function handleClick(){
  //   setCount(count + 1);
    
  // }

  // const[name, setName] = useState('');
  // const[isLoggedIn, setIsLoggedIn] = useState(false);

  // if(!isLoggedIn){
  //   return(
  //     <Login/>
  //   )
  // }
  // return(
  //   <div>
  //     <h1>Welcome everyone!</h1>
  //     <div>
  //       {isLoggedIn && <Logout/>}
  //       {/* {!isLoggedIn && <Login/>} */}
      
  //     </div>
  //   </div>
    // <div>
    //   {isLoggedIn ? <Logout/> : <Login/>}
    // </div>
  // )

  // if(isLoggedIn){
  //   return(
  //     <Logout/>
  //   )
  // }else{
  //   return(
  //     <Login/>
  //   )
  // }

  // return (
  //   <div className="container">
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

      // <StateLifting title="Card1" name={name} setName={setName}/>
      // <StateLifting title="Card2" name={name} setName={setName}/>
      {/* <p>I am inside parent component and the value of name is {name}</p> */}
  //   </div>
  // )
}

export default App
