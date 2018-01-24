const readlineSync = require('readline-sync');
const rollDie = require('./rollDie');

module.exports = function () {
  this.type = 'Human';
  this.name = readlineSync.question('Enter your name: ').toUpperCase();
  this.skill = rollDie(1) + 6;
  this.stamina = rollDie(2) + 12;
  this.luck = rollDie(1) + 6;
  this.provisions = 10;
  this.gold = 0;
  this.inv = {
    potOfSkill: 0,
    potOfStamina: 0,
    potOfFortune: 0,
  };
  console.log('\x1Bc');
  console.log(`Welcome ${this.name}!`);
  console.log(`Your SKILL is ${this.skill}`);
  console.log(`Your STAMINA is ${this.stamina}`);
  console.log(`Your LUCK is ${this.luck}`);
};
