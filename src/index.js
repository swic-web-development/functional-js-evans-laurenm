const x = 9

console.log(x)

//Old Functions Code
const greet = function () {
  return 'Hello, World!'
}
console.log(greet())

//New Way:  Arrow Functions
const greetings = () => 'Hello, World!'
console.log(greetings())

//Callback Functions Practice

function doSomethingWithNumber(number, callbackFunction) {
  return callbackFunction(number)
}

function divideByTwo(num) {
  return num / 2
}

console.log(doSomethingWithNumber(6, divideByTwo))

function double(num) {
  return num * 2
}

doSomethingWithNumber(42, double)

console.log(doSomethingWithNumber(42, double))

function triple(num) {
  return num * 3
}
doSomethingWithNumber(42, triple)

console.log(doSomethingWithNumber(42, triple))

//The MAP Method
const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = numbers.map(function (number) {
  return number * 2
})

console.log(doubledNumbers)

//Arrow Function in Map

const numbered = [1, 2, 3, 4, 5]

const doubledNumbered = numbered.map((number) => number * 2)

console.log(doubledNumbers)
