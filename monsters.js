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

class CaveTroll extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'CAVE TROLL'
  }
}

class Scorpion extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'SCORPION'
  }
}

class FlyingGuardian extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'FLYING GUARDIAN'
  }
}

class Ivy extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'IVY'
  }
}

class Dwarf extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'DWARF'
  }
}

class GuardDog extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'GUARD DOG'
  }
}

class Imitator extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'IMITATOR'
  }
}

class Skeleton extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'SKELETON WARRIOR'
  }
}

class PitFiend extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'PIT FIEND'
  }
}

class Throm extends Monster {
  constructor (skill, stamina) {
    super(skill, stamina)
    this.type = 'THROM'
  }
}

module.exports = {
  Monster,
  Orc,
  Manticore,
  GiantFly,
  Minotaur,
  Caveman,
  Hobgoblin,
  CaveTroll,
  Scorpion,
  FlyingGuardian,
  Ivy,
  Dwarf,
  GuardDog,
  Imitator,
  Skeleton,
  PitFiend,
  Throm
}
