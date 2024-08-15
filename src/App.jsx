import { useState } from "react";

import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Resutls.jsx"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1 ? true : false;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, //we add " + " in front of newValue to forces the string value into number value as when ever we use event.target.value to get the value entered we always get the value in string format not in a number format.
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput
        initialUserInput={userInput}
        selectHandleChange={handleChange}
      />
      {!inputIsValid && <p className="center">Plese enter a valid duration which is greater or equal to one</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App
