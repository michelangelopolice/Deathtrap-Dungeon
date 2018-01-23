const readlineSync = require(`readline-sync`);
const rollDie = require(`./rollDie`);
const newPlayer = require(`./newPlayer`);
const battle = require(`./battle`);
console.log(`\x1Bc`);
var player = new newPlayer();

const manticoreTest = {
    type:`MANTICORE`,
    skill:11,
    stamina:11
};

battle(player, manticoreTest);