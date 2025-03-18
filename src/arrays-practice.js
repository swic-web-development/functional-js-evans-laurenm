//Imperative approach
const numbers = [1, 2, 3, 4, 5]
const doubled = []

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2)
}

console.log(doubled)

//Declarative approach

const numberss = [1, 2, 3, 4, 5]
const doubledd = numbers.map((number) => number * 2)

console.log(doubledd)
