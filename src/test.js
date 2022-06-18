const handleResult = (expression) => {
    const operatorPrecedence = { "/": 1, "*": 2, "+": 3, "-": 4 }
    let operatorArray = []
    let res = 0
    let char = '', reducedInput = expression
    let num1, num2
    for (let i = 0; i < expression.length; i++) {
        char = expression.charAt(i)
        switch (char) {
            case '/':
            case '*':
            case '+':
            case '-':
            case '%':
                if (operatorArray.length === 0) {
                    operatorArray.push(i)
                }
                else {
                    const index = searchIndex(operatorArray, char, operatorPrecedence, expression)
                    console.log(index)
                    operatorArray.splice(index, 0, i)
                }
                break
        }
    }
    for (let i = 0; i < operatorArray.length; i++) {
        let operatorIndex = reducedInput.indexOf(expression.charAt(operatorArray[i]))
        num1 = getLeftNumber(reducedInput, operatorIndex)
        num2 = getRightNumber(reducedInput, operatorIndex)
        switch (reducedInput.charAt(operatorIndex)) {
            case '/':
                res = divide(num1, num2)
                break
            case '*':
                res = multiply(num1, num2)
                break
            case '+':
                res = add(Number(num1), Number(num2))
                break
            case '-':
                res = subtract(num1, num2)
                break
            case '%':
                res = remainder(num1, num2)
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
        console.log(`After step ${i} reducedInput, res: ${reducedInput}, ${res}`)
    }
    return res
}

const searchIndex = (arr, key, precedence, expression) => {
    let start = 0, last = arr.length, mid = -1
    while (start <= last && start < arr.length && last >= 0) {
        mid = Math.floor((start + last) / 2)
        console.log(mid)
        let operator = expression.charAt(arr[mid])
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

const getLeftNumber = (reducedInput, operatorIndex) => {
    let num = "", index = operatorIndex - 1
    let char = reducedInput.charAt(index)
    while (char !== '/' && char !== '*' && char !== '+' && char !== '-' && char !== '%') {
        num = char + num
        index--
        if (index >= 0)
            char = reducedInput.charAt(index)
        else
            break
    }
    return num
}

const getRightNumber = (reducedInput, operatorIndex) => {
    let num = "", index = operatorIndex + 1
    let char = reducedInput.charAt(index)
    while (char != '/' && char != '*' && char != '+' && char != '-' && char != '%') {
        num += char
        index++
        if (index < reducedInput.length)
            char = reducedInput.charAt(index)
        else
            break
    }
    return num
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

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Enter Expression: ", expression => {
    console.log(handleResult(expression))
    readline.close();
});