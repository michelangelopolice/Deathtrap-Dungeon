const readlineSync = require('readline-sync')
const chalk = require('chalk')

module.exports = function (player, stat, change) {
  switch (stat) {
    case 'skill':
      if (change < 0) {
        player.skill += change
        console.log(chalk.red(`Your SKILL is now ${player.skill}\n`))
        return 1
      } else if (player.skill < player.initialSkill) {
        player.skill += change
      }
      console.log(chalk.green(`Your SKILL is now ${player.skill}\n`))
      return 1
    case 'stamina':
      if (change < 0) {
        player.stamina += change
        console.log(chalk.red(`Your STAMINA is now ${player.stamina}\n`))
        if (player.stamina <= 0) {
          return 0
        } else {
          return 1
        }
      } else if (player.stamina < player.initialStamina) {
        player.stamina += change
      }
      console.log(chalk.green(`Your STAMINA is now ${player.stamina}\n`))
      return 1
    case 'luck':
      if (change < 0) {
        player.luck += change
        console.log(chalk.red(`Your LUCK is now ${player.luck}\n`))
        return 1
      } else if (player.luck < player.initialLuck) {
        player.luck += change
      }
      console.log(chalk.green(`Your LUCK is now ${player.luck}\n`))
      return 1
  }
}
