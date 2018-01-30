const names = ['Alfred', 'Barry', 'Clive', 'Dave', 'Edmund', 'Francis', 'George']

class Monster {
  constructor (skill, stamina) {
    this.skill = skill
    this.stamina = stamina
  }
}

class Orc extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'ORC'
    this.name = names[Math.floor(Math.random() * names.length)]
  }
}

class Manticore extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'MANTICORE'
  }
}
const test = new Orc(5, 5)
console.log(test)

module.exports = {
  Monster,
  Orc,
  Manticore
}
