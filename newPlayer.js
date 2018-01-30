const readlineSync = require('readline-sync')
const rollDie = require('./rollDie')

module.exports = function () {
  this.type = 'Human'
  this.name = readlineSync.question('Enter your name: ').toUpperCase()
  switch (this.name) {
    case 'GRUBBS':
      this.skill = 12
      this.stamina = 24
      this.luck = 12
      break
    case 'JAMIE':
    case 'DILLIPS':
      this.skill = 1
      this.stamina = 1
      this.luck = 1
      break
    default:
      this.skill = rollDie(1) + 6
      this.stamina = rollDie(2) + 12
      this.luck = rollDie(1) + 6
      break
  }
  this.provisions = 10
  this.gold = 0
  this.inv = {
    potOfSkill: 0,
    potOfStamina: 0,
    potOfFortune: 0
  }
  console.log('\x1Bc')
  console.log(`Welcome ${this.name}!`)
  console.log(`Your SKILL is ${this.skill}`)
  console.log(`Your STAMINA is ${this.stamina}`)
  console.log(`Your LUCK is ${this.luck}`)
}
