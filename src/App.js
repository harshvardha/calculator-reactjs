import KeyPad from "./components/KeyPad";
import Input from "./components/Input";
import { useState } from "react"

function App() {
  const [result, setResult] = useState(0)
  const [input, setInput] = useState("")

  const handleInput = (event) => {
    setInput(prevInput => prevInput + event.target.value)
  }

  const handleResult = () => {
    const oparatorPrecedence = { "/": 1, "*": 2, "+": 3, "-": 4 }
    let operatorArray = []
    let res = 0
    for (let i = 0; i < input.length; i++) {
      switch (input.charAt(i)) {
        case '/':

      }
    }
  }

  const add = (num1, num2) => {
    return num1 + num2
  }

  const subtract = (num1, num2) => {
    return num1 - num2
  }

  const multiply = (num1, num2) => {
    return num1 * num2
  }

  const divide = (num1, num2) => {
    return num1 / num2
  }

  const remainder = (num1, num2) => {
    return num1 % num2
  }

  const negate = (num) => {
    return -1 * num
  }

  const allClear = () => {
    setInput(prevInput => prevInput.slice(0, prevInput.length - 1))
  }

  const refresh = () => {
    setInput("")
    setResult(0)
  }

  return (
    <div className="App">
      <Input input={input} result={result} />
      <KeyPad />
    </div>
  );
}

export default App;
