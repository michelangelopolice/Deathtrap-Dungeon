const readlineSync = require('readline-sync');
// const rollDie = require('./rollDie');
const Player = require('./newPlayer');
const battle = require('./battle');
const rooms = require('./rooms');

let gameInProgress = false;
// Start Game
console.log('\x1Bc');
const player = new Player();
readlineSync.keyInPause();
gameInProgress = true;
let nextRoom = 1;

// Test Monster
const manticoreTest = {
  type: 'MANTICORE',
  skill: 11,
  stamina: 11,
};
while (gameInProgress) {
  if (nextRoom !== 'death') {
    nextRoom = rooms.getRoom(nextRoom);
  } else {
    gameInProgress = false;
  }
}

// Test Battle
battle(player, manticoreTest);
