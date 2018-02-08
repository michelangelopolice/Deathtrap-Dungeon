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

class GiantFly extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'GIANT FLY'
  }
}

class Minotaur extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'MINOTAUR'
  }
}

class Caveman extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'CAVEMAN'
  }
}

class Hobgoblin extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'HOBGOBLIN'
  }
}

module.exports = {
  Monster,
  Orc,
  Manticore,
  GiantFly,
  Minotaur,
  Caveman,
  Hobgoblin
}
