const readlineSync = require(`readline-sync`);
const rollDie = require(`./rollDie`);
const newPlayer = require(`./newPlayer`);
const battle = require(`./battle`);

// Start Game
console.log(`\x1Bc`);
var player = new newPlayer();

// Test Monster
const manticoreTest = {
    type:`MANTICORE`,
    skill:11,
    stamina:11
};


// Test Battle
battle(player, manticoreTest);