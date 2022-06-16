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
    const operatorPrecedence = { "/": 1, "*": 2, "+": 3, "-": 4 }
    let operatorArray = []
    let res = 0
    let char = '', reducedInput = ""
    for (let i = 0; i < input.length; i++) {
      char = input.charAt(i)
      switch (char) {
        case '/':
          if (operatorArray.length === 0) {
            operatorArray.push(i)
          }
          else {
            const index = searchIndex(operatorArray, char, operatorPrecedence)
            operatorArray.splice(index, 0, i)
          }
      }
    }
  }

  const searchIndex = (arr, key, precedence) => {
    let start = 0, last = arr.length, mid = -1
    while (start <= last && start < arr.length && last >= 0) {
      mid = (start + last) / 2
      let operator = input.charAt(arr[mid])
      if (precedence[operator] === precedence[key]) {
        return mid
      }
      else if (precedence[key] > precedence[operator]) {
        start = mid + 1
      }
      else if (precedence[key] < precedence[operator]) {
        last = mid - 1
      }
    }
    if (start >= arr.length) {
      return arr.length
    }
    else if (last < 0) {
      return 0
    }
    else if (start > last) {
      return mid
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
