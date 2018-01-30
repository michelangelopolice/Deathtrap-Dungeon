const readlineSync = require('readline-sync')
// const rollDie = require('./rollDie');
const Player = require('./newPlayer')
const rooms = require('./rooms')

let gameInProgress = false
// Start Game
console.log('\x1Bc')
const player = new Player()
readlineSync.keyInPause()
gameInProgress = true
let nextRoom = 0

while (gameInProgress) {
  if (nextRoom !== 'death') {
    nextRoom = rooms.getRoom(nextRoom, player)
  } else {
    gameInProgress = false
  }
}
