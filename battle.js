const readlineSync = require('readline-sync')
const chalk = require('chalk')
const rollDie = require('./rollDie')

module.exports = function battle (player, monster) {
  console.log('\x1Bc')
  console.log(`You encounter a ${chalk.bold(monster.type)}!   SKILL: ${monster.skill}  STAMINA: ${monster.stamina}\n`)
  readlineSync.keyInPause()
  while (player.stamina > 0 && monster.stamina > 0) {
    console.log('\x1Bc')
    console.log(`${chalk.bold(monster.type)}    SKILL: ${monster.skill} STAMINA: ${monster.stamina}`)
    console.log(`${chalk.bold(player.name)}     SKILL: ${player.skill}  STAMINA: ${player.stamina}  LUCK: ${player.luck}\n`)
    const monsterAttack = rollDie(2) + monster.skill
    const playerAttack = rollDie(2) + player.skill
    if (monsterAttack > playerAttack) {
      console.log(`${chalk.bold(monster.type)}'s attack is: ${chalk.bold(monsterAttack)}`)
      console.log(`${player.name}'s attack is: ${playerAttack}\n`)
      player.stamina -= 2
      console.log(`You got hit! Your STAMINA is now: ${chalk.red(player.stamina)}\n`)
    } else if (playerAttack > monsterAttack) {
      console.log(`${monster.type}'s attack is: ${monsterAttack}`)
      console.log(`${chalk.bold(player.name)}'s attack is: ${chalk.bold(playerAttack)}\n`)
      monster.stamina -= 2
      console.log(`You hit the ${monster.type} It's STAMINA is now: ${chalk.green(monster.stamina)}\n`)
    } else {
      console.log('You both miss!\n')
    }
    readlineSync.keyInPause()
  }
  if (player.stamina <= 0) {
    console.log('\x1Bc')
    console.log(chalk.red(`${player.name} died!\n`))
    readlineSync.keyInPause()
    console.log('\x1Bc')
    return 0
  } else {
    console.log('\x1Bc')
    console.log(chalk.green(`${monster.type} was defeated! ${player.name} WINS!\n`))
    readlineSync.keyInPause()
    return 1
  }
}
