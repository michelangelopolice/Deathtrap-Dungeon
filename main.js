const readlineSync = require('readline-sync')
const Player = require('./newPlayer')
const rooms = require('./rooms')

let gameInProgress = false
// Start Game
console.log('\x1Bc')
const player = new Player()
console.log('\x1Bc')
console.log('Game starting...')
readlineSync.keyInPause()
gameInProgress = true
let nextRoom = 0 // default is 0

// While Player is alive
while (gameInProgress) {
  if (nextRoom !== 'death') {
    nextRoom = rooms.getRoom(nextRoom, player)
  } else {
    gameInProgress = false
  }
}

// Clear screen before exit
console.log('\x1Bc')
