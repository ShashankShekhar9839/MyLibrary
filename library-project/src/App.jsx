import { useState } from 'react'
import './App.css'
import Card from './stories/Card/Card'

function App() {
  const [count, setCount] = useState(0) 

  const handleClick = () => {
    console.log('card component is clicked')
  }

  return (
    <>
     <Card type = 'Primary' title = "Good Coding Practices" func = {handleClick} >
      Try your best to write better and good quality code
      <img src='https://images.pexels.com/photos/19294997/pexels-photo-19294997/free-photo-of-the-lonely-horse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/> 
      
      </Card>
    </>
  )
}

export default App
