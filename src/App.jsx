import Header from "./components/header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
import { useState} from "react"

function App() {

  const [userInput , SetUserInput] = useState({
    initialInvestment : 15000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
})

function handleChange(inputIdentifier , newValue){
    SetUserInput(prevUserInput =>{
      return{
      ...prevUserInput,
      [inputIdentifier] : +newValue
    }
})
}


  return (
    <>
    <Header />
    <UserInput onChange={handleChange} UserInput={userInput}/>
    <Results input={userInput}/>
    </>
    
  )
}

export default App
