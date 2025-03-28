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

//Filter Method with implicit return

const players = [
  { name: 'DoomGuy', frags: 25, deaths: 0 },
  { name: 'Slayer', frags: 25, deaths: 1 },
  { name: 'Marine', frags: 12, deaths: 15 },
  { name: 'Noob', frags: 0, deaths: 25 },
]

const playersWithMoreFragsThanDeaths = players.filter((player) => player.frags > player.deaths)
console.log(playersWithMoreFragsThanDeaths)

//Reduce Method

const totalFrags = players.reduce((total, player) => {
  return total + player.frags
}, 0)
console.log(totalFrags)

//Find Method

const firstPlayerWithMoreFragsThanDeaths = players.find((player) => player.frags > player.deaths)

console.log(firstPlayerWithMoreFragsThanDeaths)

//Some Method

const hasFrags = players.some((player) => player.frags)

console.log(hasFrags)

//Every Method

const allPlayersHaveMoreFragsThanDeaths = players.every((player) => player.frags > player.deaths)

console.log(allPlayersHaveMoreFragsThanDeaths)

//Sort Method

const sortedPlayers = players.sort((a, b) => b.frags - a.frags)

console.log(sortedPlayers)

//Code Challenge 1:

// Array of items in the backpack, each with a quantity and price per item
const backpackFullOfAmmo = [
  { item: 'bullets', quantity: 10, priceEa: 0.5 },
  { item: 'shotgun shells', quantity: 4, priceEa: 0.5 },
  { item: 'rockets', quantity: 1, priceEa: 5.0 },
  { item: 'energy cell units', quantity: 20, priceEa: 0.2 },
]

// Use the reduce method to calculate the total value of the backpack
const totalValue = backpackFullOfAmmo.reduce((total, currentItem) => {
  // For each item, calculate the value by multiplying quantity by price
  const itemValue = currentItem.quantity * currentItem.priceEa

  // Add the calculated item value to the running total
  return total + itemValue
}, 0) // Start the accumulator (total) at 0

// Output the final total value of all items in the backpack
console.log(totalValue)

//Code Challenge 2:

const monsters = [
  { name: 'Cacodemon', health: 400, damage: 35 },
  { name: 'Baron of Hell', health: 1000, damage: 45 },
  { name: 'Cyberdemon', health: 4000, damage: 125 },
  { name: 'Hell Knight', health: 800, damage: 25 },
  { name: 'Imp', health: 200, damage: 20 },
  { name: 'Lost Soul', health: 100, damage: 10 },
  { name: 'Pinky', health: 300, damage: 15 },
  { name: 'Revenant', health: 500, damage: 30 },
  { name: 'Spectre', health: 200, damage: 20 },
  { name: 'Spider Mastermind', health: 2000, damage: 50 },
  { name: 'Vile', health: 1000, damage: 40 },
  { name: 'Zombie', health: 100, damage: 5 },
  { name: 'Zombieman', health: 200, damage: 10 },
]

// Task 1: Create an array of monster names
const monsterNames = monsters.map((monster) => monster.name)
console.log(monsterNames) // Output: ['Cacodemon', 'Baron of Hell', 'Cyberdemon', ..., 'Zombieman']

// Task 2: Find all monsters with health greater than 150
const monstersWithHighHealth = monsters.filter((monster) => monster.health > 150)
console.log(monstersWithHighHealth)

// Task 3: Calculate the total health of all monsters
const totalHealth = monsters.reduce((total, monster) => total + monster.health, 0)
console.log(totalHealth) // Output: total health value

// Task 4: Sort monsters by damage (highest to lowest)
const monstersSortedByDamage = monsters.sort((a, b) => b.damage - a.damage)
console.log(monstersSortedByDamage)
