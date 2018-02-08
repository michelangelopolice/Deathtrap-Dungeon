const rollDie = require('./rollDie')

module.exports = function (player) {
  const luck = rollDie(2)
  if (luck <= player.luck) {
    return 'lucky'
  } else {
    return 'unlucky'
  }
}
