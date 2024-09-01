import { useState } from "react"
import Header from "./Header.jsx"
import UserInput from "./UserInput.jsx"
import Results from "./Results.jsx";

function App() {

  const[userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
    
});
function handleChange(inputIdentifier,newValue){
  setUserInput(prevUserInput=>{
      return{
          ...prevUserInput,
          [inputIdentifier]:+newValue
      }
  });
  }
  return (<>
  
  
 
   <Header></Header>
   <UserInput onChange={handleChange} userInput={userInput}></UserInput>
    <Results userInput={userInput}></Results>

   </>
   
   
  )
}

export default App
