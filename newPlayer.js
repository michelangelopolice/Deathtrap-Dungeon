const readlineSync = require('readline-sync')
const chalk = require('chalk')
const rollDie = require('./rollDie')

module.exports = function () {
  this.type = 'Human'
  this.name = readlineSync.question(chalk.red('Enter your name: ')).toUpperCase()
  switch (this.name) {
    case 'GRUBBS':
      this.initialSkill = 12
      this.initialStamina = 24
      this.initialLuck = 12
      break
    case 'JAMIE':
    case 'DILLIPS':
      this.initialSkill = 1
      this.initialStamina = 1
      this.initialLuck = 1
      break
    default:
      this.initialSkill = rollDie(1) + 6
      this.initialStamina = rollDie(2) + 12
      this.initialLuck = rollDie(1) + 6
      break
  }
  this.skill = this.initialSkill
  this.stamina = this.initialStamina
  this.luck = this.initialLuck
  this.provisions = 10
  this.gold = 0
  this.skullThrows = 0
  this.inv = {
    potOfSkill: 0,
    potOfStrength: 0,
    potOfFortune: 0,
    acid: 0,
    amuletOfStrength: 0,
    boneCharm: 0,
    brassBell: 0,
    chainmailCoat: 0,
    diamond: 0,
    doppelgangerPotion: 0,
    emerald: 0,
    goblet: 0,
    grapplingIron: 0,
    hollowWoodenTube: 0,
    ironKey: 0,
    ironShield: 0,
    ironSpikes: 0,
    largePearl: 0,
    leatherPouch: 0,
    manticorePoem: 0,
    mirror: 0,
    oldBone: 0,
    opalDagger: 0,
    ringOfWishes: 0,
    rope: 0,
    ruby: 0,
    sapphire: 0,
    spiritGirlPoem: 0,
    stilts: 0,
    topaz: 0,
    wingedHelmet: 0,
    woodenBalls: 0,
    woodenMallet: 0
  }
  this.abilities = {
    withstandHeat: false,
    trapDetection: false,
    redBookRead: false,
    blackBookRead: false,
    barbarianSearched: false,
    alcoveSearched: false,
    crippledServantSpokenTo: false,
    unarmed: false
  }
  console.log('\x1Bc')
  console.log(`Welcome ${this.name}!`)
  console.log(`Your SKILL is ${this.skill}`)
  console.log(`Your STAMINA is ${this.stamina}`)
  console.log(`Your LUCK is ${this.luck}\n`)
  readlineSync.keyInPause()
  console.log('\x1Bc')
  console.log(`You start your adventure with a sword, leather armour and a shield, a backpack containing ${this.provisions} provisions and a lantern to light your way. Provisions can restore 4 points to your STAMINA but you may eat only ONE meal at a time, so use them wisely!`)
  console.log('You may also take a magical potion which will aid you on your quest. Each bottle of potion contains enough for TWO measures, i.e. it can only be used twice during an adventure.')
  const potions = ['Potion of Skill - restores SKILL points', 'Potion of Strength - restores STAMINA points', 'Potion of Fortune - restores LUCK points and adds 1 to base LUCK']
  const selectPotion = readlineSync.keyInSelect(potions, 'Choose ONE of the following:', {cancel: false})
  switch (selectPotion) {
    case 0:
      console.log('\x1Bc')
      this.inv.potOfSkill++
      console.log('You have added the Potion of Skill to your inventory.')
      break
    case 1:
      console.log('\x1Bc')
      this.inv.potOfStrength++
      console.log('You have added the Potion of Strength to your inventory.')
      break
    case 2:
      console.log('\x1Bc')
      this.inv.potOfFortune++
      console.log('You have added the Potion of Fortune to your inventory.')
      break
    default:
    console.log('\x1Bc')  
    console.log('You do not take a potion.')
      break
  }
  readlineSync.keyInPause()
}
