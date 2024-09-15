import { useEffect, useState } from 'react'
import Confetti from "react-confetti"

import Die from './dice'
import './App.css'


function App() {
 const[dice,setdice]=useState(allnewDice());
 const[Tenzies,setTenxies]=useState(false);
const[count,setcount]=useState(0);
const[time,setTime]=useState(0);
useEffect(()=>{
  setTime(prev=>prev+1);
},[dice])


//  use Effect


// Function to get random value
 function RandomValue(){
  const n=Math.floor(Math.random()*6);
  return n;
 }
 function allnewDice(){
  const newArray = []
  for(let i=0;i<10;i++){
    const Dice={
value:RandomValue(),
held:false,
id:i+1
    }
    newArray.push(Dice);
  }
  return newArray;
 }

 function rollUnheldDice(){
  if(!Tenzies){
    setdice(oldarr=>oldarr.map((item,i)=>
      item.held?item: { value: RandomValue(), held: false, id: i + 1 }
    ))
setcount(count=>count+1)
  }
  else{
    setdice(allnewDice())
    setTenxies(false)
  }
 }
 function holdDice(id) {
  setdice(prevDice => prevDice.map(die => {
      return die.id === id ? 
          {...die, held: !die.held} : 
          die
  }))
}
const diceElements = dice.map((die) => (
  <Die key={die.id} {...die} hold={() => holdDice(die.id)} />
))
  return (
    <>
    <main>
            {Tenzies && <Confetti />}
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="die-container">{diceElements}</div>
            {Tenzies && <h2>No of Rolls are: {count}</h2>}
         
            <button className="roll-dice" onClick={rollUnheldDice} >
                {Tenzies ? "Reset Game" : "Roll"}
            </button>
        </main>
       
    </>
  )
}

export default App
