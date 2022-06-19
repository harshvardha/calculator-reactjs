import KeyPad from "./components/KeyPad";
import Input from "./components/Input";
import { useState, useEffect } from "react"

function App() {
  const [result, setResult] = useState(0)
  const [input, setInput] = useState("")
  const [isResultSet, setIsResultSet] = useState(false)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardEvents)
  })

  const handleKeyboardEvents = (event) => {
    const char = event.key
    console.log(char)
    if (char === "Enter")
      handleResult()
    else if (char === "Escape")
      refresh()
    else if (char === "Backspace")
      allClear()
    else {
      switch (char) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '/':
        case '-':
        case '+':
        case '.':
        case '%':
        case '*':
          handleInput(event)
          break
        default:
          break
      }
    }
  }

  const handleInput = (event) => {
    if (isResultSet) {
      refresh()
    }
    setInput(prevInput => {
      let char
      if (event.key === undefined)
        char = event.target.value
      else
        char = event.key === "*" ? 'x' : event.key
      if (prevInput === "" && (char === "/" || char === "x" || char === "+" || char === "-" || char === "%")) {
        if (result !== 0)
          return String(result) + char
        return "0" + char
      }
      return prevInput + char
    }
    )
  }

  const handleResult = () => {
    const operatorPrecedence = { "/": 1, "x": 2, "+": 3, "-": 4, "%": 5 }
    let operatorArray = []
    let res = 0
    let char = '', reducedInput = input
    let num1, num2
    for (let i = 0; i < input.length; i++) {
      char = input.charAt(i)
      switch (char) {
        case '/':
        case 'x':
        case '+':
        case '-':
        case '%':
          if (operatorArray.length === 0) {
            operatorArray.push(i)
          }
          else {
            const index = _searchIndex(operatorArray, char, operatorPrecedence)
            operatorArray.splice(index, 0, i)
          }
          break
        default:
          break
      }
    }
    for (let i = 0; i < operatorArray.length; i++) {
      let operatorIndex = reducedInput.indexOf(input.charAt(operatorArray[i]))
      num1 = _getLeftNumber(reducedInput, operatorIndex)
      num2 = _getRightNumber(reducedInput, operatorIndex)
      switch (reducedInput.charAt(operatorIndex)) {
        case '/':
          res = _divide(num1, num2)
          break
        case 'x':
          res = _multiply(num1, num2)
          break
        case '+':
          res = _add(Number(num1), Number(num2))
          break
        case '-':
          res = _subtract(num1, num2)
          break
        case '%':
          res = _remainder(num1, num2)
          break
        default:
          break
      }
      let leftIndex = operatorIndex - num1.length
      let rightIndex = operatorIndex + num2.length
      if (leftIndex === 0) {
        reducedInput = String(res) + reducedInput.slice(rightIndex + 1)
      }
      else if (leftIndex > 0 && rightIndex < reducedInput.length) {
        reducedInput = reducedInput.slice(0, leftIndex) + String(res) + reducedInput.slice(rightIndex + 1)
      }
    }
    setResult(res)
    setIsResultSet(true)
  }

  const _searchIndex = (arr, key, precedence) => {
    let start = 0, last = arr.length, mid = -1
    while (start <= last && start < arr.length && last >= 0) {
      mid = Math.floor((start + last) / 2)
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

  const _getLeftNumber = (reducedInput, operatorIndex) => {
    let num = "", index = operatorIndex - 1
    let char = reducedInput.charAt(index)
    while (
      char !== '/' && char !== 'x' &&
      char !== '+' && char !== '-' &&
      char !== '%'
    ) {
      num = char + num
      index--
      if (index >= 0)
        char = reducedInput.charAt(index)
      else
        break
    }
    return num
  }

  const _getRightNumber = (reducedInput, operatorIndex) => {
    let num = "", index = operatorIndex + 1
    let char = reducedInput.charAt(index)
    if (char === '-') {
      num += char
      index++
      char = reducedInput.charAt(index)
    }
    else if (char === '+') {
      index++
      char = reducedInput.charAt(index)
    }
    while (char !== '/' && char !== 'x' && char !== '+' && char !== '-' && char !== '%') {
      num += char
      index++
      if (index < reducedInput.length)
        char = reducedInput.charAt(index)
      else
        break
    }
    return num
  }

  const _add = (num1, num2) => {
    return num1 + num2
  }

  const _subtract = (num1, num2) => {
    return num1 - num2
  }

  const _multiply = (num1, num2) => {
    return Math.round(num1 * num2 * 10000) / 10000
  }

  const _divide = (num1, num2) => {
    return Math.round((num1 / num2) * 10000) / 10000
  }

  const _remainder = (num1, num2) => {
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
    if (isResultSet)
      setIsResultSet(false)
  }

  return (
    <div className="App">
      <Input input={input} result={result} />
      <KeyPad handleInput={handleInput} handleResult={handleResult} allClear={allClear} refresh={refresh} />
    </div>
  );
}

export default App;
