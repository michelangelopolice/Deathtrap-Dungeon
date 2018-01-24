const readlineSync = require('readline-sync');
// const rollDie = require('./rollDie');
const Player = require('./newPlayer');
const battle = require('./battle');
const rooms = require('./rooms');

// Start Game
console.log('\x1Bc');
const player = new Player();
readlineSync.keyInPause();

// Test Monster
const manticoreTest = {
  type: 'MANTICORE',
  skill: 11,
  stamina: 11,
};

let nextRoom = rooms.background();
nextRoom = rooms.getRoom(nextRoom);

// Test Battle
battle(player, manticoreTest);
