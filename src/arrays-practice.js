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
