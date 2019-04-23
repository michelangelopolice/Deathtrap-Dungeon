const readlineSync = require('readline-sync')
const chalk = require('chalk')
const rollDie = require('./rollDie')
const statChange = require('./statChange')
const testYourLuck = require('./testYourLuck')
const battle = require('./battle')
const { Orc, Manticore, Giantfly, Minotaur, Caveman, Hobgoblin, CaveTroll, Scorpion, FlyingGuardian, Ivy, Dwarf, GuardDog, Imitator, Skeleton, PitFiend, Throm } = require('./monsters')

const rooms = {
  winner: () => {
    console.log('\x1Bc')
    console.log(chalk.white.bgGreen('CONGRATULATIONS! YOU ARE VICTORIOUS!') + '\n')
    readlineSync.keyInPause()
    return 'death'
  },
  gameover: () => {
    console.log('\x1Bc')
    console.log(chalk.white.bgRed('GAME OVER') + '\n')
    readlineSync.keyInPause()
    return 'death'
  },
  room0: () => {
    console.log('\x1Bc')
    console.log(chalk.black.bgWhite.bold('INTRODUCTION') + '\n\nDespite its name, Fang was an ordinary small town in the Northern Province of Chiang Mai. Situated on the banks of the River Kok it made a convenient stop over for river traders and passengers throughout most of the year. A few barges, rafts and sometimes even a large sail boat could usually be found moored at Fang. But all that was long ago, before the creation of the Trial of Champions. Now once a year the river is crammed with boats as people arrive from hundreds of miles around, hoping to witness the breaking of an ancient tradition in Fang and see a victor in the Trial of Champions.\n')
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('On the first of May each year, warriors and heroes come to Fang to face the test of their lives. Survival is unlikely, yet many take the risk, for the prize is great - a purse of 10,000 Gold Pieces and the freedom of Chiang Mai forever. However, to become Champion is no easy task. Some years ago, a powerful baron of Fang called Sukumvit decided to bring attention to his town by creating the ultimate contest. With the help of the townspeople, he constructed a labyrinth deep in the hillside behind Fang, from which there was only one exit. The labyrinth was filled with all kinds of deadly tricks and traps and loathsome monsters. Sukumvit had designed it in meticulous detail so that anybody hoping to face it’s challenge would have to use their wits as well as weapon skill. When he was finally satisfied that all was complete, he put his labyrinth to the test. He picked ten of his finest guards and, fully armed, they marched into the labyrinth. They were never seen again. The tale of the ill-fated guards soon spread throughout the land, and it was then that Sukumvit announced the first Trial of Champions. Messengers and news-sheets carried his challenge – 10,000 Gold Pieces and the freedom of Chiang Mai forever to any person surviving the perils of the labyrinth of Fang. The first year, seventeen brave warriors attempted \'The Walk\', as it later came to be known. Not one reappeared As the years passed and the Trial of Champions continued, it attracted more and more challengers and spectators. Fang prospered and would prepare itself months in advance for the spectacle it hosted each May. The town would be decorated, tents erected, dining-halls built, musicians, dancers, fire-eaters, illusionists and every sort of entertainer hired, and entries registered from hopeful individuals intent on making \'The Walk\'. The last week of April found the people of Fang and its visitors in wild celebration. Everybody sang, drank, danced and laughed until day broke on the first of May, when the town thronged to the gates of the labyrinth to watch the first challenger of the year step forward to face the Trial of Champions.\n')
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('Having seen one of Sukumvit\'s challenges nailed to a tree, you decide that this year you will attempt \'The walk\' For the last five years you have been attracted to it, not for the rewards, but for the simple fact that nobody has ever yet emerged victorious from the labyrinth. You intend to make this the year in which a Champion is crowned! Gathering up a few belongings, you set off immediately. Two days\' walk takes you west to the coast, where you enter the cursed Port Blacksand. Wasting no time in that city of thieves, you buy your passage on a small boat sailing north to where the River Kok meets the sea, and from there you take a raft up-river for four days, until finally you arrive in Fang.\n')
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('The Trial begins in three days time and the town is in an almost hysterical mood of excitement. You register your entry with the officials and are given a violet scarf to tie around your arm, informing everyone of your status. For three days you enjoy Fang\'s greatest hospitality and are treated like a demigod. During the long merriment, you almost forget your purpose in Fang but the evening before the Trial, the magnitude of the task ahead begins to dominate your thoughts. Later, you are taken to a special guest-house and shown to your room. There is a splendid four-poster bed with satin sheets to help you rest. But there is little time left for sleep.\n')
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('Just before dawn a trumpet call awakens you from vivid dreams of flaming pits and giant black spiders. Minutes later, there is a knock on your door, and a man\'s voice rings out saying, \'Your challenge begins soon. Please be ready to leave in ten minutes. You climb out of bed, walk over to the window and open the shutters. Already people are thronging the streets, moving quietly through the morning mists spectators on their way to the labyrinth no doubt, hoping to find good vantage points from which to watch the competitors. You turn away and walk over to a wooden table on which your trusty sword lies you pick it up and cut the air with a mighty sweep, wondering what beasts its sharp edge may soon have to meet. Then you open the door into the corridor. A small man with slanted eyes greets you with a low bow as you emerge from your bedroom. \'Please follow me,\' he says. He turns to his left and walks quickly towards the stairs at the end of the corridor.\n')
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('Leaving your guest-house, he darts down narrow alleyways between houses, and you have to walk quickly to keep up with him. Soon you come into a wide dirt road lined with cheering crowds. When they see your violet scarf they cheer even louder and start showering you with flowers. The long shadows cast by the people in front of you shrink as the bright yellow sun rises higher in the morning sky. Standing there in front of the noisy and vibrant crowd, you feel strangely alone, aware of your coming ordeal. Suddenly you feel a tug on your shirt and see your small guide eagerly beckoning you to follow him. Ahead you see the looming hillside and the dark mouth of a tunnel disappearing into its inner depths. As you get closer, you notice two great stone pillars on either side of the tunnel entrance. The pillars are covered with ornate carvings: writhing serpents, demons, deities, each seeming to scream a silent warning to those who would pass beyond them.\n')
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('You see Baron Sukumvit himself standing by the entrance, waiting to greet the contenders in the Trial of Champions. You turn to face the exultant crowd for the last time. Suddenly a hush falls over the crowd as Baron Sukumvit steps forward holding six bamboo sticks. You draw one from his outstretched hand and read the words on it. Then the Trial begins.\n')
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('It is your turn to salute the crowd Holding your violet scarf aloft, you take one final deep breath of cool fresh air before turning to pass between the stone-pillared gateway into Sukumvit\'s corridors of power, to face unknown perils on \'The Walk\' through the mighty baron\'s DEATHTRAP DUNGEON.\n')
    readlineSync.keyInPause()
    return 1
  },
  room1: () => {
    console.log('\x1Bc')
    console.log('The clamour of the excited spectators gradually fades behind you as you venture deep into the gloom of the cavern tunnel.\n\nLarge crystals hang from the tunnel roof at twenty metre intervals, radiating a soft light, just enough for you to see your way. As your eyes gradually become accustomed to the near darkness, you begin to see movement all around. Spiders and beetles crawling up and down the chiselled walls disappear quickly into cracks and crevices as they sense your approach; rats and mice scurry along the floor ahead of you. Droplets of water drip into small pools with an eerie plopping sound which echoes down the tunnel. The air is cold, moist and dank. After walking slowly along the tunnel for about five minutes, you arrive at a stone table standing against the wall to your left. On it there are six boxes, one of which has your name painted on its lid.\n')
    const options = ['Open the box', 'Continue walking NORTH']
    const index = readlineSync.keyInSelect(options, 'What do you do?', { cancel: false })
    switch (index) {
      case 0:
        return 270
      case 1:
        return 66
    }
  },
  room2: () => {
    console.log('\x1Bc')
    console.log('The Scorpion manages to hold you in its pincers long enough to flick its segmented tail forward over its head and sting you with its poisonous barb. The effect is fatal and you slump to ground in the Arena of Death, wondering whether Throm will win through.\n')
    readlineSync.keyInPause()
    return -1
  },
  room3: () => {
    console.log('\x1Bc')
    console.log(`The GNOME shakes his head and says, 'I am afraid you have failed the Trial of Champions. Baron Sukumvit's Deathtrap Dungeon will keep its secrets for another year, as you will not be allowed to leave here. You are appointed my servant for the rest of your days, to prepare and modify the dungeon for future contestants. Perhaps in another life you will succeed . . .\n`)
    readlineSync.keyInPause()
    return -1
  },
  room4: () => {
    console.log('\x1Bc')
    console.log(`In the total darkness you do not see the pipe's downward turn. You slip and, unable to get a grip on the slimy pipe, slide over the edge. Your screams echo down the pipe as you fall fifty metres to the bottom. You have failed the Trial of Champions.\n`)
    readlineSync.keyInPause()
    return -1
  },
  room5: (player) => {
    console.log('\x1Bc')
    console.log('You crawl along the floor and find yourself in the lair of a tribe of TROGLODYTES. As you creep past them, your scabbard bangs against a rock on the floor.')
    readlineSync.keyInPause()
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 185
    } else {
      return 395
    }
  },
  room6: (player) => {
    console.log('\x1Bc')
    console.log('Knowing that the MANTICORE will fire the spikes in its tail at you, you run for cover behind one of the pillars. Before you reach it, a volley of spikes flies through the air and one of them sinks into your arm.\n')
    const alive = statChange(player, 'stamina', -2)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log('You waste no time and attack the MANTICORE with your sword before it has time to unleash more of its deadly spikes.\n')
      readlineSync.keyInPause()
      const monster = new Manticore(11, 11)
      const outcome = battle(player, monster)
      switch (outcome) {
        case 0:
          return -1
        case 1:
          return 364
      }
    }
  },
  room7: () => {
    console.log('\x1Bc')
    console.log('Before you have time to reach a doorway, the boulder is upon you. You cry out in pain and terror as it crushes you to the floor. Your adventure ends here.\n')
    readlineSync.keyInPause()
    return -1
  },
  room8: () => {
    console.log('\x1Bc')
    console.log('The MIRROR DEMON grabs you by the wrist. Immediately it starts to pull you towards the mirror. Its strengh is incredible, and, despite all your efforts, you cannot prevent it from pulling you relentlessly towards the mirror. When it touches the mirror, it seems to disappear straight through it. With horror you see your own arm disappear, followed by the rest of your body. You are now in a mirror world of another dimension, from which you can never return.\n')
    readlineSync.keyInPause()
    return -1
  },
  room9: () => {
    console.log('\x1Bc')
    console.log('The HOBGOBLINS have nothing of any use to you on them, so you decide to open the bag on the floor. Inside you find a corked earthenware jug. You uncork it and sniff the liquid inside. It smells sharp and acrid.')
    const options = ['Drink some of the liquid', 'Dip a piece of cloth in it.']
    const index = readlineSync.keyInSelect(options, 'What do you do?', { cancel: false })
    switch (index) {
      case 0:
        return 158
      case 1:
        return 375
    }
  },
  room10: (player) => {
    console.log('\x1Bc')
    console.log('Still running as fast as you can, you reach into your backpack and pull out the wooden tube. You plan to lie under the surface of the water, breathing through the tube. With luck, the TROGLODYTES will assume that you will be swept to your death down-river as the torrent disappears into the depths of the mountain. You seize the tube between your teeth and lower yourself into the water. Holding onto one of the underwater bridge pillars, you keep perfectly still for ten minutes. When you finally think the Troglodytes have gone, you rise to the surface and look around.\n')
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('There is nobody to be seen, so you climb out of the river and cross the bridge to the northern bank. Any remaining Provisions you may have are now sodden and inedible. You continue to walk through the vast cavern until at least you see a tunnel in the far wall. You walk down it until you come to a heavy wooden door, which is locked.\n')
    player.provisions = 0
    console.log(`You now have ${player.provisions} provisions.\n`)
    readlineSync.keyInPause()
    if (player.inv.ironKey === 1) {
      return 86
    } else {
      return 276
    }
  },
  room11: (player) => {
    console.log('\x1Bc')
    player.inv.emerald++
    console.log(`You look down and see the crumpled bodies of the FLYING GUARDIANS lying motionless on the floor. You start to prise out the idol's ` + chalk.green('emerald') + ` eye with the tip of your sword. At last it comes free, and you are surprised by its weight. Hoping that it may be of use later, you put it in your backpack.\n`)
    const options = ['Prise out right eye', 'Climb down the idol']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do next?', { cancel: false })
    switch (index) {
      case 0:
        return 140
      case 1:
        return 46
    }
  },
  room12: () => {
    console.log('\x1Bc')
    console.log(`The door opens into a large, candle-lit room filled with the most extraordinary lifelike statues of knights and warriors. A white-haired old man dressed in tattered rags suddenly jumps out from behind one of the statues and starts to giggle. Though he looks like a fool, the sparkle in his eyes makes you think there is more to him than is apparent. In a high-pitched voice he says, 'Oh good, another stone for my garden. I'm glad you havecome to join your friends. Now, I'm a fair man and so I'll ask you a question. If you answer correctly, I'll let you go free - but if your answer is wrong, I'll turn you to stone!' He starts to chuckle again, obviously pleased with your arrival.\n`)
    const options = ['Wait for his question', 'Attack him with your sword', 'Make a run for the door']
    const index = readlineSync.keyInSelect(options, 'What do you do?', { cancel: false })
    switch (index) {
      case 0:
        return 382
      case 1:
        return 195
      case 2:
        return 250
    }
  },
  room13: () => {
    console.log('\x1Bc')
    console.log('The tunnel makes a sudden turn to the left and heads NORTH for as far as you can see. The footprints you are following start to peter out as the tunnel becomes gradually drier. Soon you are beyond the dripping roof and the pools on the floor. You notice the air becoming hotter and you find yourself panting even though you are walking quite slowly. In a small recess on the left-hand wall you see a section of bamboo standing on its end. Lifting it down, you see it is filled with a clear liquid. Your throat is painfully dry and you feel a little dizzy from the heat in the tunnel.\n')
    const options = ['Drink the liquid', 'Do not risk drinking the liquid and continue NORTH']
    const index = readlineSync.keyInSelect(options, 'What will you do?', { cancel: false })
    switch (index) {
      case 0:
        return 147
      case 1:
        return 182
    }
  },
  room14: () => {
    console.log('\x1Bc')
    console.log('The tunnel leads into a dark chamber covered in thick cobwebs. Clawing your way through them, you trip over a wooden casket.\n')
    const options = ['Try and open the casket', 'Continue NORTH']
    const index = readlineSync.keyInSelect(options, 'What do you do?', { cancel: false })
    switch (index) {
      case 0:
        return 157
      case 1:
        return 310
    }
  },
  room15: () => {
    console.log('\x1Bc')
    console.log('A tickling sensation runs down your spine as you crawl carefully out of the roon. Back in the tunnel you heave a sigh of relief, throw the skull back into the room and slam the door shut. Pleased with your good fortune, you set off WEST once again.\n')
    readlineSync.keyInPause()
    return 74
  },
  room16: (player) => {
    console.log('\x1Bc')
    console.log(`You just have time to hear the GNOME say, 'Three skulls' before a white bolt of energy shoots out from the lock into your chest, knocking you unconscious.\n`)
    player.stamina -= (rollDie(1) + 1)
    console.log(chalk.red(`Your stamina is now: ${player.stamina}.`))
    readlineSync.keyInPause()
    if (player.stamina <= 0) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log(`You come to and are told by the GNOME to try again. You chose the wrong gems last time, so you won't that combination again.\n`)
      const options = [
        `A: ${chalk.green('Emerald')}     B: ${chalk.white('Diamond')}     C: ${chalk.blue('Sapphire')}`,
        `A: ${chalk.white('Diamond')}     B: ${chalk.blue('Sapphire')}    C: ${chalk.green('Emerald')}`,
        `A: ${chalk.blue('Sapphire')}    B: ${chalk.green('Emerald')}     C: ${chalk.white('Diamond')}`,
        `A: ${chalk.green('Emerald')}     B: ${chalk.blue('Sapphire')}    C: ${chalk.white('Diamond')}`,
        `A: ${chalk.white('Diamond')}     B: ${chalk.green('Emerald')}     C: ${chalk.blue('Sapphire')}`,
        `A: ${chalk.blue('Sapphire')}    B: ${chalk.white('Diamond')}     C: ${chalk.green('Emerald')}`]
      const index = readlineSync.keyInSelect(options, 'Decide which gems you will place in the labelled slots:', { cancel: false })
      switch (index) {
        case 0:
          return 16
        case 1:
          return 392
        case 2:
          return 177
        case 3:
          return 287
        case 4:
          return 132
        case 5:
          return 249
      }
    }
  },
  room17: () => {
    console.log('\x1Bc')
    console.log('You are not strong enough to force open the heavy door. The water is now waist-high and you are exhausted from your efforts. The water level rises quickly and you find yourself floating ever upwards until your face is pressed against the ceiling. You are soon completely immersed and unable to hold your breath any longer. Your adventure ends here.\n')
    readlineSync.keyInPause()
    return -1
  },
  room18: (player) => {
    console.log('\x1Bc')
    console.log(`Luckily for you, the cobra's fangs sink into your leather wristband. The snake recoils quickly, ready to strike again, as the DWARF tells you to have another try.\n`)
    readlineSync.keyInPause()
    const skillTest = rollDie(2)
    if (skillTest <= player.skill) {
      return 55
    } else {
      return 202
    }
  },
  room19: () => {
    console.log('\x1Bc')
    console.log(`You cannot resist the MEDUSA's beguiling gaze as she looks into your eyes. You feel your limbs begin to stiffen and you panic helplessly as you turn to stone. Your adventure ends here.\n`)
    readlineSync.keyInPause()
    return -1
  },
  room20: (player) => {
    console.log('\x1Bc')
    console.log(`Only your incredible strength could withstand the poisonous spider's bite. However, you are weakened and you notice your hand trembling as you pocket the Gold Piece. You curse the person who dropped the backpack and set off NORTH again.\n`)
    player.gold++
    statChange(player, 'skill', -1)
    console.log(chalk.yellow(`\nYou now have ${player.gold} Gold Pieces.`))
    readlineSync.keyInPause()
    return 279
  },
  room21: (player) => {
    // * * * * * ADVANCED COMBAT ROOM * * * * *
    console.log('\x1Bc')
    console.log('The wound has had no effect on the BLOODBEAST, and it continues to attack you as furiously as before.')
  },
  room22: () => {
    console.log('\x1Bc')
    console.log(`Although you are slightly uneasy in each other's company, knowing that there can only be one winner in the Trial of Champions, you are both content to share in the benefits of a temporary alliance. You begin to tell each other of your exploits so far, of the monsters and traps encountered and the dangers overcome. Walking along, you soon come to the edge of a wide pit. It is too deep and dark to see the bottom. The BARBARIAN offers to lower you to the bottom with his rope, saying he has a torch which he can light for you to use.\n`)
    const options = [`Accept the BARBARIAN's offer`, 'Offer to lower him down if he is so eager to investigate the pit', 'Suggest that you both jump over the pit instead']
    const index = readlineSync.keyInSelect(options, 'What will you do?', { cancel: false })
    switch (index) {
      case 0:
        return 63
      case 1:
        return 184
      case 2:
        return 311
    }
  },
  room23: () => {
    console.log('\x1Bc')
    console.log(`The paper bears a simple warning written in dried blood: 'Beware the Trialmasters'. You replace the paper on its nail and run back down the tunnel to rejoin the BARBARIAN.\n`)
    readlineSync.keyInPause()
    return 154
  },
  room24: () => {
    console.log('\x1Bc')
    console.log('Set back in an arched alcove in the tunnel wall you see an ornate wooden chair carved in the shape of a demon-like bird of prey.\n')
    const options = ['Sit in the chair', 'Keep going NORTH']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        return 324
      case 1:
        return 188
    }
  },
  room25: () => {
    console.log('\x1Bc')
    console.log('Although the temperature in the tunnel is higher than you could normally tolerate, the liquid from the bamboo pipe keeps you alive.\n')
    readlineSync.keyInPause()
    return 197
  },
  room26: (player) => {
    console.log('\x1Bc')
    console.log('The pill makes you feel dull and lethargic.')
    console.log(chalk.red(`Your SKILL is now ${player.skill}`))
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('The DWARF tells you that you can now progress to the second stage of the test. He reaches for a wicker basket and tells you that there is a snake inside it. He tips up the basket and the snake drops to the floor; it is a cobra and it rears up into the air ready to strike. The DWARF says he wants to test your reactions. You must grasp the cobra bare-handed below its head, avoiding its deadly fangs. You crouch down on the floor, tensing yourself for the moment at which to seize it.\n')
    readlineSync.keyInPause()
    const skillTest = rollDie(2)
    if (skillTest <= player.skill) {
      return 55
    } else {
      return 202
    }
  },
  room27: () => {
    console.log('\x1Bc')
    console.log('You step up to the frightened man and cleave the chain with your sword. He drops to his kneeds and bows, thanking you over and over again. He tells you that four years ago he entered the Trial of Champions but failed. He fell down a pit and had to be rescued by a Trialmaster, one of Baron Sukumvit\'s dungeon administrators. He was offered a choice between death or servitude in Deathtrap Dungeon as the Trialmaster\'s minion. Choosing the latter, he worked like a slave until he could stand it no longer and tried to escape. Alas, he was unsuccessful and was captured by the Trialmaster\'s wandering ORC guards. To teach him a lesson, they cut off his hand and condemned him to a year\'s imprisonment in this cell.\n')
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('You ask him whether he has any information that might be of use to you. He scratches his head. \'Well, I haven\'t exactly done very well here myself,\' he says, \'but I do know that you need to collect ' + chalk.yellow('precious stones') + 'if you hope to get out. I don\'t know why, but there it is.\' Without another word, the ragged prisoner dashes out of the room, turning left into the tunnel.\n')
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('You decide to keep heading NORTH and turn right into the tunnel.\n')
    readlineSync.keyInPause()
    return 78
  },
  room28: (player) => {
    console.log('\x1Bc')
    console.log('The DWARF\'s chainmail coat is of finest-quality iron, obviously made by a master armourer. You strip it from his body and place it over your head.\n')
    player.inv.chainmailCoat++
    statChange(player, 'skill', 1)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('There is nothing else of use to you in the chamber, so you decide to investigate the new tunnel.\n')
    readlineSync.keyInPause()
    return 213
  },
  room29: () => {
    console.log('\x1Bc')
    console.log('The tunnel leads NORTH for some distance before coming to a dead end. The mouth of a chute protudes from the tunnel\'s eastern wall. It seems to be the only way out. You decide to risk it and climb into the chute. You slide gently down and come out in a room, landing on your back.\n')
    readlineSync.keyInPause()
    return 90
  },
  room30: (player) => {
    console.log('\x1Bc')
    console.log('Taking a step forward, you leap towards the far edge of the pit.\n')
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 160
    } else {
      return 319
    }
  },
  room31: (player) => {
    console.log('\x1Bc')
    console.log('The GNOME smiles and says, \'Good. Now, have you a ' + chalk.blue('sapphire') + ' in your poession?\'\n')
    readlineSync.keyInPause()
    if (player.inv.sapphire) {
      return 376
    } else {
      return 3
    }
  },
  room32: () => {
    console.log('\x1Bc')
    console.log('You soon come to another junction in the tunnel. One branch leads EAST, but the wet footprints you have been following continue NORTH and you decide to follow their trail.\n')
    readlineSync.keyInPause()
    return 37
  },
  room33: (player) => {
    console.log('\x1Bc')
    console.log('It was a mistake to reach into the hole with your sword arm. It is covered with round sucker marks and feels as if it has been crushed.\n')
    statChange(player, 'skill', -3)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('You peer into the hole and see the bleeding tentacle stump hanging limply. You carefully pull out the grappling iron and leather pouch, in which you find a tiny brass bell. You pack away your new posessions and head NORTH.\n')
    player.inv.grapplingIron++
    player.inv.brassBell++
    player.inv.leatherPouch++
    readlineSync.keyInPause()
    return 292
  },
  room34: () => {
    console.log('\x1Bc')
    console.log('You try to force the point of your sword under the ' + chalk.green('emerald') + ' eye. Much to your surprise, the ' + chalk.green('emerald') + ' shatters on contact, releasing a jet of poisonous gas straight into your face. The gas knocks you out and you release the rope, bounce down the idol and crash on to the stone floor. Your adventure ends here.\n')
    readlineSync.keyInPause()
    return -1
  },
  room35: () => {
    console.log('\x1Bc')
    console.log('The tunnel continues WEST for several hundred metres, finally ending at some steps leading up to a closed trapdoor. You climb the steps slowly, hearing muffled voices above you. In the dim light you can see that the trapdoor is not locked.\n')
    const options = ['Knock on the trapdoor', 'Burst through the trapdoor with your sword drawn']
    const index = readlineSync.keyInSelect(options, 'What do you do?', { cancel: false })
    switch (index) {
      case 0:
        return 333
      case 1:
        return 124
    }
  },
  room36: (player) => {
    console.log('\x1Bc')
    console.log('You run faster than you have ever run in your life before, but still the boulder is catching up on you.\n')
    readlineSync.keyInPause()
    const survival = rollDie(2)
    if (survival <= player.skill && survival <= player.stamina) {
      return 340
    } else {
      return 7
    }
  },
  room37: () => {
    console.log('\x1Bc')
    console.log('The passage opens out into a wide cavern which is darker but much drier. Ahead you see the footprints gradually fade, then disappear. There is a large idol in the centre of the cavern, standing approximately six metres high. It has jewelled eyes, each as big as your fist. There are two giant stuffed bird-like creatures standing on either side of the idol.\n')
    const options = ['Climb the idol to take the jewels', 'Walk through the cavern to the tunnel in the opposite wall']
    const index = readlineSync.keyInSelect(options, 'What do you do?', { cancel: false })
    switch (index) {
      case 0:
        return 351
      case 1:
        return 239
    }
  },
  room38: (player) => {
    console.log('\x1Bc')
    console.log('The man stands by silently while you gulp the water and wolf down the bread. A sharp pain grips your stomach and you fall to your knees. The old man looks at you scornfully and says, \'Well, if you will eat poisoned food, what do you expect?\'\n')
    const alive = statChange(player, 'stamina', -3)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log('He shuffles off, leaving you writhing in pain on the floor. You eventually regain enough of your strength to continue WEST.\n')
      readlineSync.keyInPause()
      return 109
    }
  },
  room39: (player) => {
    console.log('\x1Bc')
    console.log('You manage to evade the outstretched legs of the diving GIANT FLY. Stepping back, you draw your sword and prepare to fight the hideous insect as it turns to attack you again.\n')
    const options = ['Fight the GIANT FLY', 'Escape']
    const index = readlineSync.keyInSelect(options, 'What do you do?', { cancel: false })
    switch (index) {
      case 0:
        const monster = new Giantfly(7, 8)
        const outcome = battle(player, monster)
        switch (outcome) {
          case 0:
            return -1
          case 1:
            break
        }
        return 111
      case 1:
        return 267
    }
  },
  room40: (player) => {
    console.log('\x1Bc')
    console.log('You call out to the DWARF that you are ready to fight the MINOTAUR. THe wooden door rises slowly and you see the fearsome beast, half man, half bull, step into the arena. Steam blows from its nostrils as it works itself up into a rage, ready to attack. Suddenly it rushes forward, swinging its double-headed axe.\n')
    readlineSync.keyInPause()
    const monster = new Minotaur(9, 9)
    const outcome = battle(player, monster)
    switch (outcome) {
      case 0:
        return -1
      case 1:
        return 163
    }
  },
  room41: (player) => {
    console.log('\x1Bc')
    console.log('You walk slowly over to the alcove, carefully checking the floor for any more hidden traps. You see that the goblet contains a sparkling liquid.\n')
    if (player.abilities.barbarianSearched) {
      const options = ['Drink the red liquid', 'Leave the chamber to continue west']
      const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
      switch (index) {
        case 0:
          return 98
        case 1:
          return 83
      }
    } else {
      const options = ['Drink the red liquid', 'Leave the goblet and walk back to search the BARBARIAN', 'Leave the chamber to continue WEST']
      const index = readlineSync.keyInSelect(options, 'What will you do?', { cancel: false })
      switch (index) {
        case 0:
          return 98
        case 1:
          return 126
        case 2:
          return 83
      }
    }
  },
  room42: () => {
    console.log('\x1Bc')
    console.log('The cobra\'s fangs sink deep into your wrist and you feel its poison starting to creep through your body.\n ')
    const alive = statChange(player, 'stamina', -5)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log('The DWARF has no mercy and tells you to try again.\n')
      readlineSync.keyInPause()
      const skillTest = rollDie(2)
      if (skillTest <= player.skill) {
        return 55
      } else {
        return 202
      }
    }
  },
  room43: () => {
    console.log('\x1Bc')
    console.log('The tunnel turns sharply to the right and continues NORTH for as far as you can see. There is a door in the left-hand wall which is ajar. You hear someone cry for help from the other side of the door.\n')
    const options = ['Open the door', 'Continue NORTH']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        return 200
      case 1:
        return 316
    }
  },
  room44: () => {
    console.log('\x1Bc')
    console.log('You are only a few metres from the doorway when you hear the old man behind you utter some strange words. Instantly your muscles harden and you feel your skin becoming taut. You start to panic, but there is nothing you can do to stop the petrification of your body. Your adventure ends here.\n')
    readlineSync.keyInPause()
    return -1
  },
  room45: (player) => {
    console.log('\x1Bc')
    console.log('The razor-sharp disc thuds into your back with terrible effect.\n')
    statChange(player, 'skill', -1)
    const alive = statChange(player, 'stamina' - 4)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log('You struggle to pull the disc from your back as the NINJA throws yet another one at you.\n')
      readlineSync.keyInPause()
      return 312
    }
  },
  room46: () => {
    console.log('\x1Bc')
    console.log('You lower yourself carefully down the idol and, wasting no more time in the cavern, run forward to the tunnel in the NORTHERN wall.\n')
    readlineSync.keyInPause()
    return 239
  },
  room47: (player) => {
    console.log('\x1Bc')
    if (player.inv.hollowWoodenTube) {
      return 10
    } else {
      return 335
    }
  },
  room48: () => {
    console.log('\x1Bc')
    console.log('Only your immense strength and grim determination keep you from falling unconscious to the floor. You grit your teeth and press on resolutely.\n')
    readlineSync.keyInPause()
    return 197
  },
  room49: () => {
    console.log('\x1Bc')
    console.log('You peep round the corner and see two small creatures running away from you. Both are dressed in baggy clothes and wear pointed floppy hats. They are mischievous LEPRECHAUNS.\n')
    const options = ['Follow them', 'Walk back to the last junction and head NORTH']
    const index = readlineSync.keyInSelect(options, 'What would you rather do?', { cancel: false })
    switch (index) {
      case 0:
        return 205
      case 1:
        return 241
    }
  },
  room50: () => {
    console.log('\x1Bc')
    console.log('You wake to find Throm pulling the ring off your finger. He puts it on the floor and crushes it with the head of his battleaxe. Then, grunting to show his disapproval of you, he strides off EAST. You stand up slowly and stagger off after him.\n')
    readlineSync.keyInPause()
    return 221
  },
  room51: (player) => {
    console.log('\x1Bc')
    console.log('The HOBGOBLINS are unprepared for yoru attack, and you are able to kill the first one before he can draw his sword. You turn to face the remaining HOBGOBLIN, who snarls at you with hatred.\n')
    const monster = new Hobgoblin(6, 5)
    const outcome = battle(player, monster)
    switch (outcome) {
      case 0:
        return -1
      case 1:
        return 9
    }
  },
  room52: (player) => {
    console.log('\x1Bc')
    console.log(`As you open the book, it begins to disintegrate and the pages turn to dust in your hands. You manage to keep a few fragments and read the handwritten script. The book appears to be about monsters, and from what you can make out it contains a full description of a monster called the BLOODBEAST. It is a horrific bloated creature with tough, spiny skin and facial blisters which burst open to become mock eyes, evolved to hide the BLOODBEAST's only weak spot - its real eyes.\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`BLOODBEASTS usually dwell in pools of fetid slime which give off a poisonous gas. This gas is so strong that it can easily knock people unconscious. The BLOODBEAST, although too bulbous to haul itself out of its slime pool, has a long and vicious tongue which it wraps around its victims before it drags them into its pool. As the victim's flesh starts to decompose in the vile slime, the BLOODBEAST will feed from it. You tell Throm about the grotesque BLOODBEAST, but he merely shrugs hsi shoulders and tells you to get going.\n`)
    player.abilities.redBookRead = true
    readlineSync.keyInPause()
    console.log('\x1Bc')
    if (player.abilities.blackBookRead) {
      console.log('You must continue north with Throm.\n')
      readlineSync.keyInPause()
      return 369
    } else {
      const options = ['Open the black book', 'Continue north with Throm']
      const index = readlineSync.keyInSelect(options, "What do you want to do?", { cancel: false })
      switch (index) {
        case 0:
          return 138
        case 1:
          return 369
      }
    }
  },
  room53: () => {
    console.log('\x1Bc')
    console.log('The BLOODBEAST is too bulbous to climb out of its pool, but its long tongue whips out and tries to wrap itself around your leg. Fortunately, you have fallen beyond its reach. The air at ground level does not contain any of the poisonous fumes, but you wake with a pain in your throat. You cover your mouth with your sleeve so that you can breathe through it, and decide what to do.\n')
    options = ['Run round the pool towards the tunnel', 'Attack the BLOODBEAST with your sword']
    const index = readlineSync.keyInSelect(options, 'What do you with to do?', { cancel: false })
    switch (index) {
      case 0:
        return 370
      case 1:
        return 348
    }
  },
  room54: () => {
    console.log('\x1Bc')
    console.log(`The lasso loosens itself and you are able to shake it free of the idol's neck. It falls to the floor with a loud clatter. You quickly coil the rope up again and put it in your backpack. Wasting no more time in the cavern, you run forward to the tunnel in the northern wall.\n`)
    readlineSync.keyInPause()
    return 239
  },
  room55: () => {
    console.log('\x1Bc')
    console.log(`With lightening speed, you thrust your hand out and grip the cobra just below its open mouth. You lift it up and, arm outstretched, dangle it in front of the DWARF. He doesn't flinch but says in his calm expressionless way: \n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`"Please put the cobra back in the basket and prepare for the final part of the test. Follow me."\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`You do what he says and follow him back into the chamber, where Throm is pacing up and down, obviously ill at ease. You wave to him while the DWARF opens a second secret door and tells you to walk on through and wait for him. Again you comply, and you find yourself in another circular room, although this one resembles a small arena. The floor is covered with sand, and a small balcony runs around the arena wall. Opposite the secret door by which you entered is an ominous-looking wooden door. Suddenly you hear a shout, and you look up to see the smiling DWARF standing on the balcony.\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`He throws two pieces of paper down to you. On one of them, the words NO CROP IS are written; on the other, RUIN MOAT. In his ever calm voice he says: \n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`"If you rearrange the letters of the words, you will find the names of two creatures. You may choose which one to fight in my Arena of Death"\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`If you can identify the creature by rearranging the letters NO CROP IS or RUIN MOAT you may proceed.\n`);
    const choice = readlineSync.question('What do you call out to the DWARF? ').toUpperCase()
    if (choice == "SCORPION") {
      return 143
    } else if (choice == "MINOTAUR") {
      return 40
    } else {
      return 347
    }
  },
  room56: () => {
    console.log('\x1Bc')
    console.log('You see that the obstruction is a large, brown, boulder-like object. You touch it with your hand and are surprised to find that it is soft and spongy.\n')
    const options = ['Climb over it', 'Slice it open with your sword']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        return 373
      case 1:
        return 215
    }
  },
  room57: () => {
    console.log('\x1Bc')
    console.log('Although you check the chest carefully for any hidden devices, you are unable to see the trap inside it. As you lift the lid, an iron ball hanging on a cord swings back, shattering the glass capsule fixed inside the lid. A cloud of poisonous gas is instantly released into the air and you stagger back coughing and spluttering.\n')
    const alive = statChange(player, 'stamina' - 4)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      return 198
    }
  },
  room58: () => {
    console.log('\x1Bc')
    console.log('You step slowly between the poles, taking care not to touch any of them.\n')
    readlineSync.keyInPause()
    const skillTest = rollDie(2)
    if (skillTest <= player.skill) {
      return 80
    } else {
      return 246
    }

  },
  room59: () => {
    console.log('\x1Bc')
    console.log('Ahead in the far distance you hear the sound of slow footsteps coming towards you. Unsure of who or what might be approaching, you look around for a place to hide. You find a large crack in the tunnel wall which lies in shadow. \n')
    options = ['Stand your ground with your sword drawn', 'Hide in the shadows']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        return 341
      case 1:
        return 283
    }
  },
  room60: () => {
    console.log('\x1Bc')
    console.log('The tunnel ends at a large oak door. Throm wastes no time in testing the handle and is somewhat surprised to find the door unlocked. He pushes it open and walks into a torch-lit chamber, Sitting alone on an ornage chair is a DWARF, who bids you enter the chamber. As you do so, the oak door swings shut behind you.\n')
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`"Adventurers, you have done well to get this far," says the DWARF in a deep voice. "However, as you both know, there can only be one winner in the Trial of Champions. As Trialmaster, it is my duty to Baron Sukumvit to let only the most able continue. Therefore, I must devise a test of wits and strength to eliminate one of you. Please do not attempt to dispose of me. It would be utterly pointless, for, as you can see, there is no obvious way out of this chamber and only I know where the hidden exit lies. Now if you would care to decide between you who will go first, I shall make the necessary preperations."\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('You look at Throm, suddenly angry that your effective partnership might come to an end. He leans over and whispers in your ear that you should try to kill the DWARF and worry about the exit later.\n')
    options = ['Join Throm in attacking the DWARF', `Persuade Throm to go through with the DWARF's test`]
    readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        return 179
      case 1:
        return 365
    }
  },
  room61: () => {
    console.log('\x1Bc')
    console.log('Despite the terrible ringing sound in your ears, you hear footsteps coming down the tunnel. Your loud screams have attracted a tunnel guardian. Standing over you is a HOBGOBLIN. His face bears a sickly smile as he presses the point of his sword against your neck. You are unable to defend yourself and prevent the HOBGOBLIN from running you through. Your adventure ends here.\n')
    readlineSync.keyInPause()
    return -1
  },
  room62: () => {
    console.log('\x1Bc')
    console.log(`The GNOME jumps in the air, yelling, "Well done - nobody has ever managed to find all three gems before! Now get ready for the final test, which I will explain once and once only."\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`"As you can see, the lock on this door has three slots, labelled A, B and C, each of which is built to accept a specific gem. You have to put one of your three gems in each of the slots in the correct order. If you manage this at the first attempt, fine. However, if you put the gems in the wrong slots, you will be blasted by a bolt of energy from the lock, causing you injury. Anyway, as I said, I am allowed to help you a little. If you place one gem in its correct slot but get the other two wrong, I shall shout, "One crown and two skulls." If you place all three gems all three gems incorrectly, I shall shout, "Three skulls." You will be allowed to try again and again until you either succeed or die. Are you ready?"\n\nYou signal your readiness with a nod of the head, and walk forward to place the three gems in the slots.\n`)
    const options = [
      `A: ${chalk.green('Emerald')}     B: ${chalk.white('Diamond')}     C: ${chalk.blue('Sapphire')}`,
      `A: ${chalk.white('Diamond')}     B: ${chalk.blue('Sapphire')}    C: ${chalk.green('Emerald')}`,
      `A: ${chalk.blue('Sapphire')}    B: ${chalk.green('Emerald')}     C: ${chalk.white('Diamond')}`,
      `A: ${chalk.green('Emerald')}     B: ${chalk.blue('Sapphire')}    C: ${chalk.white('Diamond')}`,
      `A: ${chalk.white('Diamond')}     B: ${chalk.green('Emerald')}     C: ${chalk.blue('Sapphire')}`,
      `A: ${chalk.blue('Sapphire')}    B: ${chalk.white('Diamond')}     C: ${chalk.green('Emerald')}`]
    const index = readlineSync.keyInSelect(options, 'Decide which gems you will place in the labelled slots:', { cancel: false })
    switch (index) {
      case 0:
        return 16
      case 1:
        return 392
      case 2:
        return 177
      case 3:
        return 287
      case 4:
        return 132
      case 5:
        return 249
    }
  },
  room63: () => {
    console.log('\x1Bc')
    console.log('You tie the rope around your waist and take hold of the lighted torch given to you by Throm, as your Barbarian ally calls himself. Taking hold of the slack rope, Throm lowers you slowly over the edge of the pit and down into the dark depths below. You can see by the light of the torch that the sides of the put are extremely smooth. You drop about twenty metres before hitting the bottom of the pit. There you see another tunnel heading north and you call up to Throm and tell him of your discovery. He calls back, saying that he is going to tie the rope around a protruding rock on the edge of the pit and will come down to join you. You hear him climbing down and soon you are together again. Throm retrieves his rope by shaking it off the rock, and you set off north along the new tunnel.\n')
    readlineSync.keyInPause()
    return 194
  },
  room64: (player) => {
    console.log('\x1Bc')
    console.log('As soon as you put the ring on your finger, your whole body starts to shake.\n')
    readlineSync.keyInPause()
    const skillTest = rollDie(2)
    if (skillTest <= player.skill) {
      return 115
    } else {
      return 190
    }
  },
  room65: (player) => {
    console.log('\x1Bc')
    if (player.abilities.trapDetection) {
      return 345
    } else {
      return 372
    }
  },
  room66: () => {
    console.log('\x1Bc')
    console.log('After walking down the tunnel for a few minutes, you come to a junction. A white arrow painted on one wall points WEST. On the floor you can see wet footprints made by those who entered before you. It is hard to be sure, but it looks as though three of them followed the direction of the arrow, while one decided to go EAST.\n')
    const options = ['Head WEST', 'Head EAST']
    const index = readlineSync.keyInSelect(options, 'Which way do you choose?', { cancel: false })
    switch (index) {
      case 0:
        return 293
      case 1:
        return 119
    }
  },
  room67: (player) => {
    console.log('\x1Bc')
    console.log('You grab one of the underwater bridge pillars and cling to it, holding your breath. Meanwhile the TROGLODYTES reach the river bank and decide that you must have been swept to your death down-river as it disappears into the depths of the mountain. By now your lungs are bursting for air.\n')
    readlineSync.keyInPause()
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 146
    } else {
      return 219
    }
  },
  room68: () => {
    console.log('\x1Bc')
    console.log('You walk down the passage and soon find yourself standing at the edge of a deep, dark pit. The passage continues east on the other side of the pit. You think you could probably jump over the put, but you are not sure. There is a rope hanging down from the ceiling over the centre of the pit.\n')
    const options = ['Throw your shield over the put and jump after it', 'Jump over the pit carrying all your possessions', 'Reach for the rope with your sword to enable you to swing across the pit']
    const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
    switch (index) {
      case 0:
        return 271
      case 1:
        return 30
      case 2:
        return 212
    }
  },
  room69: () => {
    console.log('\x1Bc')
    console.log('IVY does not notice you opening the door. You slip out of her room, close the door quietly behind you and find yourself at the end of another tunnel.\n')
    readlineSync.keyInPause()
    return 305
  },
  room70: () => {
    console.log('\x1Bc')
    console.log('You just manage to dive to the side before the boulder smashes into the tunnel floor, splitting the stone. As you dust yourself off, you suddenly notice daylight at the end of the tunnel. You run forward towards a beautiful sight of blue sky and green trees. Running out of the tunnel, you expect to be greeted by cheering crowds, but are horrified at what you do see.\n')
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`There is no hero's welcome from the people all around you. All are dead. You are in fact standing in a cold chamber littered with armoured skeletons and bodies - the exit to victory was just an illusion! Only the corpses of past adventurers are real. You run back towards the tunnel, but hit an invisible barrier. You are trapped and destined to end your days in the chamber of the dead.\n`)
    readlineSync.keyInPause()
    return -1
  },
  room71: (player) => {
    console.log('\x1Bc')
    console.log('Once again you reach for the parchment, only this time it is lying amidst a pile of broken bones. Unfolding it, you see a map of a room with a drawing of a hideous creature inside it. Beneath the monster is a rhyme which reads:\n')
    console.log(`\t'Should you meet the Manticore,\n\tOf its tail beware.\n\tShield yourself against the spikes\n\tFlying through the air.'\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('You fold up the piece of parchment and put it in your backpack. Repeating the rhyme over and over to yourself, you walk across to the alcove.\n')
    player.inv.manticorePoem++
    readlineSync.keyInPause()
    return 128
  },
  room72: () => {
    console.log('\x1Bc')
    console.log(`The Mirror shatters, sending gragments of glass flying everywhere. The MIRROR DEMON's four faces cry out in agony, and cracks appear all over them. Then they too shatter and fall to the floor in a pile of broken glass. Unfortunately, you cut your sword arm badly while smashing the mirror. Although your strength is unaffected, your weaponskill is dimished.\n`)
    statChange(player, 'skill', -2)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('You continue your journey north.\n')
    readlineSync.keyInPause()
    return 122
  },
  room73: (player) => {
    console.log('\x1Bc')
    if (player.abilities.barbarianSearched) {
      console.log('With nothing of interest left in the chamber you leave to continue west.\n')
      readlineSync.keyInPause()
      return 83
    } else {
      const options = ['Walk back and search the Barbarian', 'Leave the chamber to continue west']
      const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
      switch (index) {
        case 0:
          return 126
        case 1:
          return 83
      }
    }
  },
  room74: (player) => {
    console.log('\x1Bc')
    console.log('The tunnel takes a sharp right turn and you find yourself in a sort of gallery lined with mirrors for some twenty metres. A human skeleton appears to be pulled halfway through the mirror along the right-hand wall. Suddenly a grotesque being with four arms and four screaming faces emerges from the mirror, barring your way ahead. It walks slowly towards you, each arm outstretched to grab you. It is a MIRROR DEMON from another dimensional plane, come to take your spirit.\n')
    if (player.inv.ringOfWishes) {
      const options = ['Make a wish using the Ring of Wishes', 'Try to smash the mirrors', 'Attack the MIRROR DEMON with your sword']
      const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
      switch (index) {
        case 0:
          return 265
        case 1:
          return 300
        case 2:
          return 327
      }
    } else {
      const options = ['Try to smash the mirrors', 'Attack the MIRROR DEMON with your sword']
      const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
      switch (index) {
        case 0:
          return 300
        case 1:
          return 327
      }
    }
  },
  room75: (player) => {
    console.log('\x1Bc')
    console.log('You rub the liquid into your wounds, but they do not heal. Staring into the empty bottle, you wonder what exactly the liquid was.\n')
    player.abilities.blackBookRead = true
    readlineSync.keyInPause()
    console.log('\x1Bc')
    if (player.abilities.redBookRead) {
      console.log('You must continue north with Throm.\n')
      readlineSync.keyInPause()
      return 369
    } else {
      const options = ['Open the red book', 'Continue north with Throm']
      const index = readlineSync.keyInSelect(options, "What do you want to do?", { cancel: false })
      switch (index) {
        case 0:
          return 52
        case 1:
          return 369
      }
    }
  },
  room76: () => {
    console.log('\x1Bc')
    console.log('You step round the great bulk of the dead ROCK GRUB and peer into the darkness of its borehole. You can only see a few metres, but are able to make out that it inclines slightly and is wet from the secreted slime of the ROCK GRUB.\n')
    const options = ['Explore the borehole', 'Walk west along the tunnel']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 317
      case 1:
        return 117
    }
  },
  room77: () => {
    console.log('\x1Bc')
    console.log(`You stagger through the open doorway into another tunnel, at the end of which is the welcome sight of daylight. Much to your surprise, you see the GNOME lying dead halfway down the tunnel. A crossbow bolt protrudes from the side of his head. The GNOME, in his bid for freedom, has fallen foul of Baron Sukumvit's final trap.\n\nYou walk past him and out into brilliant sunshine.`)
    readlineSync.keyInPause()
    return 400
  },
  room78: () => {
    console.log('\x1Bc')
    console.log('There is an open pipe in the right-hand wall, about a metre in diameter. It is too dark to see far down it. You shout into it and hear your voice echoing down the iron pipe until eventually the sound fades away.\n')
    const options = ['Crawl down the pipe', 'Continue north']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 301
      case 1:
        return 142
    }
  },
  room79: (player) => {
    console.log('\x1Bc')
    console.log('You grip he arms of the chair tightly, half expecting a surge of energy or pain to rush through you.\n')
    readlineSync.keyInPause()
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 106
    } else {
      return 383
    }
  },
  room80: () => {
    console.log('\x1Bc')
    console.log('You take your time and manage to step over the last pole without having touched any of them. You hurry on east, still following the two pairs of footprints.\n')
    readlineSync.keyInPause()
    return 313
  },
  room81: () => {
    console.log('\x1Bc')
    console.log(`The only furniture in the GOBLIN's room is a table, two chairs and a cupboard on the wall. There are two closed doors, one in the west wall and the other in the north wall.\n`)
    const options = ['Open the cupboard', 'Open the west door', 'Open the north door']
    const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
    switch (index) {
      case 0:
        return 307
      case 1:
        return 263
      case 2:
        return 136
    }
  },
  room82: () => {
    console.log('\x1Bc')
    console.log('As the PIT FIEND slams its body against the wall, you let go of the rope and drop safely to the floor. You run towards the double doors and are relieved to feel them swing open as you push on them. You let them swing shut behind you and head north along the tunnel.\n')
  },
  room83: () => {
    console.log('\x1Bc')
    console.log('The passage soon leads to a junction. You notice more footprints on the floor, possibly as many as three pairs, heading north from the south passage. You decide to follow them.\n')
    readlineSync.keyInPause()
    return 37
  },
  room84: () => {
    console.log('\x1Bc')
    const roll = rollDie(2)
    console.log(`You roll two dice. The total is: ${roll}.\n`)
    readlineSync.keyInPause()
    if (roll > 8) {
      return 152
    } else {
      return 121
    }
  },
  room85: () => {
    console.log('\x1Bc')
    console.log('Before you are able to do anything else, the old man mumbles a few strange words into the air. You feel your muscles harden and your skin go taut. You start to panic, but there is nothing you can do to stop the petrification of your body. Your adventure ends here.\n')
    readlineSync.keyInPause()
    return -1
  },
  room86: () => {
    console.log('\x1Bc')
    console.log(`The key turns in the lock and the door opens into a four-way intersection of the tunnel. There is nothing to be seen either to east or to west apart from  the now familiar ceiling crystals giving off their dim light. Suddenly you hear a voice calling you.`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`"This way, this way. You are on the right track."\n\nIt seems to be coming from somewhere directly ahead of you. Your curiosity gets the better of you and you decide to walk towards the beckoning voice.\n`)
    readlineSync.keyInPause()
    return 187
  },
  room87: () => {
    console.log('\x1Bc')
    console.log('The door opens into a large room.\n')
    readlineSync.keyInPause()
    return 381
  },
  room88: () => {
    console.log('\x1Bc')
    console.log('As soon as they see you, the TROGLODYTES raise their bows and run to surround you. To your horror, their leader then steps forward and declares that you are their prisoner and must subject yourself to trial by their ancient rite, the Run of the Arrow.\n')
    const options = ['Take part in the Run of the Arrow', 'Fight your way out']
    const index = readlineSync.keyInSelect(options, "What are you willing to do?", { cancel: false })
    switch (index) {
      case 0:
        return 343
      case 1:
        return 268
    }
  },
  room89: (player) => {
    console.log('\x1Bc')
    console.log(`Back on solid ground once again on the cavern floor, you try to shake the rope off the idol's neck.\n`)
    readlineSync.keyInPause()
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 54
    } else {
      return 261
    }
  },
  room90: (player) => {
    console.log('\x1Bc')
    console.log('As soon as you stand up, you are confronted by the most repulsive sight you have ever laid eyes on. There in front of you, wallowing in a circular pool of fetid slime, is a bulbous creature too horrible to be believed. Its body is green and covered all over with fearsome-looking spikes. Its face is a mass of crimson blisters, one of whcih suddenly bursts to reveal yet another of its many sinister, all-seeing eyes. A narrow path runs around the edge of the pool and leads into another tunnel in the far wall.\n')
    readlineSync.keyInPause()
    if (player.abilities.redBookRead) {
      return 172
    } else {
      return 357
    }
  },
  room91: (player) => {
    console.log('\x1Bc')
    console.log(`The ORC's morning star thuds into your arm, knocking your sword to the floor. You must fight them bare-handed. Fortunately, the tunnel is too narrow for both ORCs to attack you at once. Fight them one at a time.\n`)
    statChange(player, 'skill', -4)
    readlineSync.keyInPause()
    const monster1 = new Orc(5, 5)
    monster1.type = 'First ORC'
    const monster2 = new Orc(6, 4)
    monster2.type = 'Second ORC'
    const outcome1 = battle(player, monster1)
    switch (outcome1) {
      case 0:
        return -1
      case 1:
        const outcome2 = battle(player, monster2)
        switch (outcome2) {
          case 0:
            return -1
          case 1:
            console.log('\x1Bc')
            console.log('You pick up your sword and search the ORCs.\n')
            statChange(player, 'skill', 4)
            readlineSync.keyInPause()
            return 257
        }
    }
  },
  room92: () => {
    console.log('\x1Bc')
    console.log('Summoning all your strength, you deal the MIRROR DEMON one final blow with your sword. With an ear-splitting sound, cracks begin to run across its faces and limbs. Its many mouths cry out in the agony of its death throes before the Demon shatters completely and falls to the ground in a pile of tiny fragments. You heave a hugh sigh of relief and then hurry on past.\n')
    readlineSync.keyInPause()
    return 122
  },
  room93: () => {
    console.log('\x1Bc')
    console.log(`The door opens into a small dark room, which is empty apart from a sturdy wooden chest lying on a shelf on the far wall. The floor is thick with dust, and you can clearly see fresh footprints leading from the door to the chest and back again. You wonder whether one of your rivals is still ahead of you on 'The Walk', or whether the chest has only recently been placed on the shelf by one of the Trialmasters.\n`)
    const options = ['Enter the room and open the chest', 'Keep walking down the tunnel']
    const index = readlineSync.keyInSelect(options, "What would you rather do?", { cancel: false })
    switch (index) {
      case 0:
        return 284
      case 1:
        return 230
    }
  },
  room94: (player) => {
    console.log('\x1Bc')
    console.log('Taking a deep breath, you lean over the pit and plunge your forearm into the mass of wriggling worms. They are cold and clammy and feel extremely nasty, but at least they are harmless and you are able to seize the dagger by the hilt. You give it a hard tug and it comes away from the crack in which the tip was embedded. Admiring its beauty, and wondering whether it might once have belonged to some luckless contestant, you put the opal-studded dagger firmly in your belt and leave the cavern.\n')
    player.inv.opalDagger++
    readlineSync.keyInPause()
    return 174
  },
  room95: (player) => {
    console.log('\x1Bc')
    console.log('The iron ring is attached to a small trapdoor. It lifts up easily, and inside a small compartment you find a finely crafted shield made of the purest iron. Marvelling at its splendour, you strap it on to your arm.\n')
    player.inv.ironShield++
    statChange(player, 'skill', 1)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('You walk towards the double doors and push them open.\n')
    readlineSync.keyInPause()
    return 248
  },
  room96: () => {
    console.log('\x1Bc')
    console.log('Your second blow also fails to smash the mirror. The MIRROR DEMON reaches out, grabs your wrist and starts pulling you towards the mirror. Its strength is incredible, and, despite all your efforts, you cannot resist. With every second you come closer to the mirror. When the MIRROR DEMON touches the mirror, it seems to disappear straight through it. With horror you see your own arm disappear through the mirror too, and the rest of your body soon follows. You are now in a mirror world of another dimension, from which you can never return.\n')
    readlineSync.keyInPause()
    return -1
  },
  room97: () => {
    console.log('\x1Bc')
    console.log(`Unknown to you, the BLOODBEAST has only one weakness: its real eyes. More by chance than by design, you plunge your blade deep into one of them, and the BLOODBEAST immediately slumps back into its pool. After a few massive convulsions, it sinks beneath the oily surface of the pool. Not waiting to see whether it will recover, you run into the tunnel, anxious to get away from the BLOODBEAST's toxic chamber as fast as possible.\n`)
    readlineSync.keyInPause()
    return 134
  },
  room98: (player) => {
    console.log('\x1Bc')
    console.log('Lifting the goblet releases a sprung catch, and a dart shoots out of the wooden table leg.\n')
    readlineSync.keyInPause()
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 105
    } else {
      return 235
    }
  },
  room99: () => {
    console.log('\x1Bc')
    console.log('Smiling, you tell IVY that you think she and Sourbelly look very alike. Then, while she stares admiringly at the painting, you pick up a broken stool, creep up behind her and smash her over the back of the head with it as hard as you can. To your imense relief, she slumps unconscious to the floor.\n')
    const options = ['Search her room', 'Leave by the door in the east wall']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 266
      case 1:
        console.log('\x1Bc')
        console.log('You leave and find yourself standing at the end of a tunnel.\n')
        readlineSync.keyInPause()
        return 305
    }
  },
  room100: () => {
    console.log('\x1Bc')
    console.log('Only a few metres further down the passage, you see another closed door in the left-hand wall. The letter X is scratched into its centre panel. Putting your ear to the door, you listen intently but can hear nothing.\n')
    const options = ['Open the door', 'Keep walking north']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 87
      case 1:
        return 217
    }
  },
  room101: () => {
    console.log('\x1Bc')
    console.log('The river current is quite strong and, encumbered by your armour and backpack, you are unable to swim against it. Within seconds you are swept under the bridge. Standing on the river bank, the TROGLODYTES look on laughing and jeering as you drift to your death down-river in the depths of the mountain.\n')
    readlineSync.keyInPause()
    return -1
  },
  room102: () => {
    console.log('\x1Bc')
    console.log('You enter a room which is small and completely empty. As soon as you are inside, the door slams shut behind you. Suddenly a voice booms out of nowhere, shouting, "Welcome to Deathtrap Dungeon, the ingenious killer labyrinth of my master. Adventurer, I trust you will pay your respects to my master by shouting out his name?"\n')
    const options = ['Hail, Sukumvit?', 'Sukumvit is a worm?']
    const index = readlineSync.keyInSelect(options, "What will you shout?", { cancel: false })
    switch (index) {
      case 0:
        return 133
      case 1:
        return 251
    }
  },
  room103: (player) => {
    console.log('\x1Bc')
    console.log('You breathe in the poisonous gas and start to choke.\n')
    player.stamina -= 3
    console.log(chalk.red(`Your stamina is now: ${player.stamina}.`))
    readlineSync.keyInPause()
    if (player.stamina <= 0) {
      return -1
    } else {
      return 77
    }
  },
  room104: () => {
    console.log('\x1Bc')
    console.log('Reacting quickly, you manage to jump over the outstretched tongue and run into the tunnel, leaving the BLOODBEAST wallowing in its pool to await another victim.\n')
    readlineSync.keyInPause()
    return 134
  },
  room105: (player) => {
    if (!player.abilities.alcoveSearched) {
      console.log('\x1Bc')
      console.log('Your reflexes are sharp and you quickly jump aside. The dart whistles past, only just missing you, and thuds into the opposite wall. You see the goblet lying on the floor and the red liquid running away in the rivulets over the grey stone. At least the goblet may be of use, so you put it in your backpack.\n')
      player.inv.goblet++
      player.abilities.alcoveSearched = true
      readlineSync.keyInPause()
    }
    console.log(`\x1Bc`)
    if (player.abilities.barbarianSearched) {
      console.log('With nothing of interest left in the chamber you leave to continue west.\n')
      readlineSync.keyInPause()
      return 83
    } else {
      const options = ['Walk back and search the Barbarian', 'Leave the chamber to continue west']
      const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
      switch (index) {
        case 0:
          return 126
        case 1:
          return 83
      }
    }
  },
  room106: (player) => {
    console.log('\x1Bc')
    console.log("Squeezing the arm of the chair triggers a secret panel which springs into the air. You find a glass phial lying in a cavity. You pick it up and read the label: 'Doppelganger Potion - one dose only. This liquid will make your body take on the shape of any nearby being.' You place the strange potion in your backpack and continue north.\n")
    player.inv.doppelgangerPotion++
    readlineSync.keyInPause()
    return 188
  },
  room107: () => {
    console.log('\x1Bc')
    console.log('You come to an arched doorway set in the right-hand wall of the tunnel. The heavy stone door is closed, but there is an iron latch and a round handle.\n')
    const options = ['Try the door', 'Continue along the tunnel']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 168
      case 1:
        return 267
    }
  },
  room108: () => {
    console.log('\x1Bc')
    console.log(`There is a large panel of glass in the left-hand wall of the tunnel. Through it you can see a bright, torch-lit room teeming with GIANT INSECTS of every possible description. Bees, wasps, beetles, ticks - even the mites are over six centimetres long. The noise is threatening. In the middle of the room, a jewelled crown lies on top of a small table. What looks like a large ${chalk.white('diamond')} is set in the middle of the crown.\n`)
    const options = ['Break the glass and try to snatch the crown', 'Continue west', 'Return to the junction to head north']
    const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
    switch (index) {
      case 0:
        return 394
      case 1:
        return 59
      case 2:
        return 14
    }
  },
  room109: () => {
    console.log('\x1Bc')
    console.log('You arrive at another junction in the tunnel.\n')
    const options = ['Keep heading west', 'Go north']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 43
      case 1:
        return 24
    }
  },
  room110: () => {
    console.log('\x1Bc')
    console.log('The tunnel soon takes another sharp right turn. Following it east, you arrive at a strange obstruction: a line of twelve wooden poles across the tunnel. They are fixed to the walls about half a metre off the floor and spaced a metre apart.\n')
    const options = ['Step between the poles', 'Walk across the top of the poles']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 58
      case 1:
        return 223
    }
  },
  room111: () => {
    console.log('\x1Bc')
    console.log('You wipe the vile yellow slime from the blade of your sword and walk quickly to the door, back into the tunnel and head north.\n')
    readlineSync.keyInPause()
    return 267
  },
  room112: (player) => {
    console.log('\x1Bc')
    console.log('Apart from two portions of your Provisions which were saturated and are now inedible, all your other possessions remain intact. You repack them carefully inside your backpack and set off north again.\n')
    player.provisions -= 2
    console.log(`You now have ${player.provisions} provisions.\n`)
    readlineSync.keyInPause()
    return 356
  },
  room113: (player) => {
    player.skullThrows++
    console.log('\x1Bc')
    console.log(`The wooden ball whistles past the skull, hitting the far wall with a loud 'crack'.\n`)
    if (player.skullThrows < 2) {
      const options = ['Try again', 'Close the door and continue west']
      const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
      switch (index) {
        case 0:
          return 371
        case 1:
          return 74
      }
    } else {
      console.log('Having missed twice you decide to leave the skull alone. You close the door and continue west along the tunnel.\n')
      readlineSync.keyInPause()
      return 74
    }
  },
  room114: () => {
    console.log('\x1Bc')
    console.log(`The CAVEMAN is wearing a leather wristband with four small rats' skulls hanging from it.\n`)
    const options = ['Put it on your own wrist', 'Set off NORTH again']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        return 336
      case 1:
        return 298
    }
  },
  room115: (player) => {
    console.log('\x1Bc')
    console.log(`Your body continues to vibrate intensely and you feel as if you are about to pass out. But your strength is great, and you manage to withstand the tremendous shock to your system. Finally you calm down and begin to feel the ring's beneficial powers working on you.\n`)
    statChange(player, "stamina", 3)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('You see Throm looking at you anxiously, so you reassure him that you are fully recovered. He strides off east and you follow him eagerly.\n')
    readlineSync.keyInPause()
    return 221
  },
  room116: () => {
    console.log('\x1Bc')
    console.log('You cannot believe that the BLOODBEAST is unaffected by its new wound. You hesitate a moment too long and it lunges forward, cracking your skull with its jaws. Then it drags you into its pool, where you will be predigested and later consumed by the hideous creature.\n')
    readlineSync.keyInPause()
    return -1
  },
  room117: () => {
    console.log('\x1Bc')
    console.log('After a long walk down the tunnel, you come to a dead end. A large mirror reaching from the ceiling to the floor hangs on the end wall, and in the dim light you can just about make out your own reflection.\n')
    const options = ['Take a closer look in the mirror', 'Make the long walk back to the last junction in the tunnel in order to head east']
    const index = readlineSync.keyInSelect(options, "What would you rather do?", { cancel: false })
    switch (index) {
      case 0:
        return 329
      case 1:
        return 135
    }
  },
  room118: () => {
    console.log('\x1Bc')
    console.log('Despite the stalactites crashing all around, you manage to dash through the archway without injury. You look round and see Throm thundering towards you, one arm held over his head for protection. He dashes into the tunnel and leans against the cold wall, panting heavily. He apologizes for starting the rock-fall and offers you his hand to shake. You tell Throm that maybe he should use sign language in future, even for laughing! You both smile and head east once more.\n')
    readlineSync.keyInPause()
    return 60
  },
  room119: () => {
    console.log('\x1Bc')
    console.log('Ahead you can see a large obstruction on the tunnel floor, although it is too dark to make out exactly what it is. The wet footprints you have been following carry on towards the obstruction.\n')
    const options = ['Continue EAST', 'Go back to the junction and head WEST']
    const index = readlineSync.keyInSelect(options, 'Which would you rather do?', { cancel: false })
    switch (index) {
      case 0:
        return 56
      case 1:
        return 293
    }
  },
  room120: () => {
    console.log('\x1Bc')
    console.log(chalk`Lying in a hole about a metre deep, you see a {bold grappling iron} and a {bold leather pouch}.\n`)
    const options = ['Reach down for them', 'Ignore them and continue NORTH']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        return 228
      case 1:
        return 292
    }
  },
  room121: () => {
    console.log('\x1Bc')
    console.log(`The DWARF looks at the dice. "Not very good at playing the odds, are you?" he sneers. "I regret you must suffer a penalty before you can continue." From out of his pocket he produces two pills. One is stamped with the letter S and the other stamped with the letter L. He asks you to choose one and swallow it.\n`)
    const options = ['The pill stamped with the letter S', 'The pill stamped with the letter L']
    const index = readlineSync.keyInSelect(options, "Which pill do you wish to swallow?", { cancel: false })
    switch (index) {
      case 0:
        return 26
      case 1:
        return 354
    }
  },
  room122: () => {
    console.log('\x1Bc')
    console.log('In front of you are two flights of stone steps separated by a banister of rat skulls.\n')
    const options = ['The left-hand flight of steps', 'The right-hand flight of steps']
    const index = readlineSync.keyInSelect(options, "Which flight of steps will you climb?", { cancel: false })
    switch (index) {
      case 0:
        return 176
      case 1:
        return 384
    }
  },
  room123: (player) => {
    console.log('\x1Bc')
    console.log('The necklace is an amulet of strength.\n')
    player.inv.amuletOfStrength++
    statChange(player, "skill", 1)
    statChange(player, "stamina", 1)
    readlineSync.keyInPause()
    return 282
  },
  room124: () => {
    //  * * * * * * * * ADVANCED COMBAT ROOM  * * * * * * * *
    console.log('\x1Bc')
    console.log('You throw the trapdoor open and run up the steps into a bright, lantern-lit room. Two GOBLINS are sharpening their short swords on a stone set in the middle of the floor. You catch them momentarily off guard, but they quickly recover and both rush forward to attack you.\n')
    readlineSync.keyInPause()
    const monster1 = new Goblin(5, 4)
    monster1.type = 'First GOBLIN'
    const monster2 = new Goblin(6, 5)
    monster2.type = 'Second GOBLIN'
    const outcome1 = battle(player, monster1)
    switch (outcome1) {
      case 0:
        return -1
      case 1:
        const outcome2 = battle(player, monster2)
        switch (outcome2) {
          case 0:
            return -1
          case 1:
            return 81
        }
    }
  },
  room125: (player) => {
    console.log('\x1Bc')
    console.log('You tiptoe towards the door while IVY prattles on.\n')
    readlineSync.keyInPause()
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 69
    } else {
      return 139
    }
  },
  room126: (player) => {
    console.log('\x1Bc')
    console.log(`The pouch on the Barbarian's belt is empty apart from some strange-looking dried meat wrapped in a cloth.\n`)
    if (player.abilities.alcoveSearched) {
      const options = ['Eat the dried meat', 'Leave the chamber and head west']
      const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
      switch (index) {
        case 0:
          return 226
        case 1:
          return 83
      }
    } else {
      const options = ['Eat the dried meat', 'Leave the meat and walk over to the alcove', 'Leave the chamber and head west']
      const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
      switch (index) {
        case 0:
          return 226
        case 1:
          return 41
        case 2:
          return 83
      }
    }
  },
  room127: () => {
    console.log('\x1Bc')
    console.log('The only possible way out of the hall as far as you can see is by using the chute in the northern wall. You decide to give it a go and climb into the chute. You slide gently down and emerge into another room, landing on your back.\n')
    readlineSync.keyInPause()
    return 90
  },
  room128: () => {
    console.log('\x1Bc')
    console.log('At the back of the alcove are some steps leading down into a cellar. Cobwebs brush your face as you descend. The Cellar ceiling is quite low, and the floor is strewn with rubbish and debris. in the middle of the wall opposite you is an archway which leads into another crystal-lit tunnel. There are large mushrooms growing on the rubbish to your right.\n')
    const options = ['Step through the archway', 'Eat some of the mushrooms']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 35
      case 1:
        return 233
    }
  },
  room129: (player) => {
    console.log('\x1Bc')
    console.log('You tie the rope to the grappling iron and hurl it over the top of the wall. Its hooks dig into the stone and you begin to haul yourself up. Peering over the top of the wall, you see an enormous dinosaur-like monster thrashing about in a sand-covered pit. Its tough hide is a mottled green colour, and it stands some ten metres tall on its muscular hind legs. Rows of razor-sharp teeth line its gigantic jaws, which open and close with bone-snapping power. There is a large double door in the wall on the far side of the pit, which appears to be the only way out of this section of the dungeon.\n')
    if (player.inv.boneCharm) {
      const options = ['Lower yourself down on the rope into the put to fight the PIT FIEND', 'Throw your bone monkey charm into the pit', 'Try to hook the PIT FIEND with the grappling iron while sitting on top of the wall']
      const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
      switch (index) {
        case 0:
          return 349
        case 1:
          return 361
        case 2:
          return 167
      }
    } else {
      const options = ['Lower yourself down on the rope into the put to fight the PIT FIEND', 'Try to hook the PIT FIEND with the grappling iron while sitting on top of the wall']
      const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
      switch (index) {
        case 0:
          return 349
        case 1:
          return 167
      }
    }
  },
  room130: (player) => {
    console.log('\x1Bc')
    console.log('The HOBGOBLINS stop their fight immediately. They do not understand what you are saying and snarl at you viciously. Then they draw their short sowrds and run forward to attack you. Fight them one at a time.\n')
    const monster1 = new Hobgoblin(7, 5)
    monster1.type = 'First HOBGOBLIN'
    const monster2 = new Hobgoblin(6, 5)
    monster2.type = 'Second HOBGOBLIN'
    const outcome1 = battle(player, monster1)
    switch (outcome1) {
      case 0:
        return -1
      case 1:
        const outcome2 = battle(player, monster2)
        switch (outcome2) {
          case 0:
            return -1
          case 1:
            return 9
        }
    }
  },
  room131: () => {
    console.log('\x1Bc')
    console.log('The crossbow bolts fly over your head and thud into the opposite wall; fortunately, you are still crouching on the floor. Now that the trap has been sprung, you can leave the room by the door through which you entered. Back in the tunnel you head on west.\n')
    readlineSync.keyInPause()
    return 74
  },
  room132: (player) => {
    console.log('\x1Bc')
    console.log(`You just have time to hear the GNOME say, 'One crown and two skulls', before a white bolt of energy shoots out from the lock into your chest, knocking you unconscious.\n`)
    player.stamina -= (rollDie(1) + 1)
    console.log(chalk.red(`Your stamina is now: ${player.stamina}.`))
    readlineSync.keyInPause()
    if (player.stamina <= 0) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log(`You come to and are told by the GNOME to try again. You know you placed one gem in the correct slot, but which one? You sigh and tentatively try a new combination.\n`)
      const options = [
        `A: ${chalk.green('Emerald')}     B: ${chalk.white('Diamond')}     C: ${chalk.blue('Sapphire')}`,
        `A: ${chalk.white('Diamond')}     B: ${chalk.blue('Sapphire')}    C: ${chalk.green('Emerald')}`,
        `A: ${chalk.blue('Sapphire')}    B: ${chalk.green('Emerald')}     C: ${chalk.white('Diamond')}`,
        `A: ${chalk.green('Emerald')}     B: ${chalk.blue('Sapphire')}    C: ${chalk.white('Diamond')}`,
        `A: ${chalk.white('Diamond')}     B: ${chalk.green('Emerald')}     C: ${chalk.blue('Sapphire')}`,
        `A: ${chalk.blue('Sapphire')}    B: ${chalk.white('Diamond')}     C: ${chalk.green('Emerald')}`]
      const index = readlineSync.keyInSelect(options, 'Decide which gems you will place in the labelled slots:', { cancel: false })
      switch (index) {
        case 0:
          return 16
        case 1:
          return 392
        case 2:
          return 177
        case 3:
          return 287
        case 4:
          return 132
        case 5:
          return 249
      }
    }
  },
  room133: (player) => {
    console.log('`\x1Bc')
    console.log(`Once again, the mysterious voice calls out, only this time its tone is full of contempt and derision.\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('"So, we have a snivelling weed in our midst, do we?" sneers the voice. "My master has a special gift for you, loathsome creep."\n')
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('Suddenly water starts pouring into the room through a hole in the ceiling. It soon rises above your ankles, and there is no apparent way of escape. You wade back to the door. It is firmly locked, but in desperation you try ramming it with your shoulder.\n')
    readlineSync.keyInPause()
    const skillTest = rollDie(2)
    if (skillTest <= player.skill) {
      return 178
    } else {
      return 17
    }
  },
  room134: (player) => {
    console.log('\x1Bc')
    console.log('The tunnel leads into a large room, its ceiling supported by several marble pillars. As you enter the room, you suddenly see a strange beast to your right. It has the body of a lion with dragon-like wings attached to it, but its head is that of an old bearded man.\n')
    readlineSync.keyInPause()
    if (player.inv.manticorePoem) {
      return 222
    } else {
      return 247
    }
  },
  room135: () => {
    console.log('\x1Bc')
    console.log(`Passing the ROCK GRUB's borehole on your left, you soon arrive at the junction. You take a quick look down the tunnel leading south, but do not see anybody approaching. Quickening your step, you hurry on east.\n`)
    readlineSync.keyInPause()
    return 68
  },
  room136: () => {
    console.log('\x1Bc')
    console.log('The door opens into another tunnel, which rises gently into the distance. After walking uphill for a while, the tunnel levels out and you soon arrive at a door in the right-hand wall, to which a withered hand is nailed.\n')
    const options = ['Open the door', 'Continue north']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 210
      case 1:
        return 78
    }
  },
  room137: () => {
    console.log('\x1Bc')
    console.log('Walking along the tunnel, you are surprised to see a large iron bell hanging down from the ceiling.\n')
    const options = ['Ring the bell', 'Walk round it and continue WEST']
    const index = readlineSync.keyInSelect(options, 'What do you do?', { cancel: false })
    switch (index) {
      case 0:
        return 220
      case 1:
        return 362
    }
  },
  room138: (player) => {
    console.log('\x1Bc')
    console.log(`The book's pages are sealed together, but a small hole has been cut out in the middle of them, just large enough to hold a small corked bottle containing a clear liquid. You show it to Throm, who holds up his hand, indicating that he does not want you to come anywhere near him with it; his distrust of things unknown is strongly evident.\n`)
    let options = ['Drink the liquid', 'Rub the liquid into your wounds', 'Leave the bottle and book to continue north with Throm']
    if (!player.abilities.redBookRead) {
      options.splice(2, 0, 'Open the red book')
      const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
      switch (index) {
        case 0:
          return 397
        case 1:
          return 75
        case 2:
          return 52
        case 3:
          return 369
      }
    } else {
      const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
      switch (index) {
        case 0:
          return 397
        case 1:
          return 75
        case 2:
          return 369
      }
    }
  },
  room139: (player) => {
    console.log('\x1Bc')
    console.log('As you try to escape, IVY whirls round and picks up a broken stool. She is angry and attacks you ferociously.\n')
    const alive = statChange(player, 'stamina', -2)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      const monster = new Ivy(9, 9)
      const outcome = battle(player, monster)
      switch (outcome) {
        case 0:
          return -1
        case 1:
          return 201
      }
    }
  },
  room140: () => {
    console.log('\x1Bc')
    console.log('You try to force the point of your sword under the ' + chalk.green('emerald') + ' eye. Much to your surprise, it shatters on contact, releasing a jet of poisonous gas straight into your face. The gas knocks you out and you fall backwards, bouncing down the idol to land on the stone floor. Your adventure ends here.\n')
    readlineSync.keyInPause()
    return -1
  },
  room141: () => {
    console.log('\x1Bc')
    console.log('The MIRROR DEMON is almost on top of you when, summoning all your strength, you strike one final blow against the mirror with your sword.\n')
    const skillTest = rollDie(2)
    if (skillTest <= player.skill) {
      return 72
    } else {
      return 96
    }
  },
  room142: () => {
    console.log('\x1Bc')
    console.log('There is a new branch in the tunnel on your left, and ahead you see two bodies lying on the floor. You stop and peer down the new tunnel, but seeing no doors or creatures you decide against walking down it. With your sword drawn, you walk over to where the bodies lie.\n')
    readlineSync.keyInPause()
    return 338
  },
  room143: (player) => {
    // * * * * * ADVANCED COMBAT ROOM * * * * *
    console.log('\x1Bc')
    console.log('You call out to the DWARF, telling him to send in the SCORPION because you are ready to fight. Slowly the wooden door rises, and a huge, grotesque black SCORPION squeezes underneath it and enters the room. You draw your sword in readiness and prepare to fight the sinister creature with its huge pincers and deadly sting.\n')
    const monster = new Scorpion(10, 10)
    const outcome = battle(player, monster)
    switch (outcome) {
      case 0:
        return -1
      case 1:
        return 288
    }
  },
  room144: () => {
    console.log('\x1Bc')
    console.log(`Still smiling, the old man looks at you and says quietly, "Wrong."\n`)
    readlineSync.keyInPause()
    return 85
  },
  room145: (player) => {
    // * * * * * ADVANCED COMBAT ROOM * * * * *
    console.log('\x1Bc')
    console.log(`The DWARF is expecting your move. Furthermore, you are not as fast as you should be because of your recent ordeal, so he easily evades your punch saying, "I could kill you now if I wished, but I year for a hand-to-hand fight." Then he throws down his crossbow and draws an axe from his belt. Despite your fatigue, you think only of vengeance.\n`)
    readlineSync.keyInPause()
    const monster = new Dwarf(8, 6)
    const outcome = battle(player, monster)
    switch (outcome) {
      case 0:
        return -1
      case 1:
        return 28
    }
  },
  room146: (player) => {
    console.log('\x1Bc')
    console.log('The pain in your lungs forces you to rise to the surface for air. Fortunately, none of the TROGLODYTES see you and they all disperse. You climb out of the river and cross the bridge to the northern bank. Any remaining Provisions you may have are now inedible. You continue to walk through the vast cavern until at least you see a tunnel in the far wall. You walk down it until you come to a heavy wooden door which is locked.\n')
    player.provisions = 0
    console.log(`You now have ${player.provisions} provisions.\n`)
    readlineSync.keyInPause()
    if (player.inv.ironKey) {
      return 86
    } else {
      return 276
    }
  },
  room147: (player) => {
    console.log('\x1Bc')
    console.log('The water in the bamboo pipe is welcomingly refreshing.\n')
    statChange(player, 'stamina', 1)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    player.abilities.withstandHeat = true
    console.log('It also contains a magical solution which will enable you to be exposed to melting-point temperature without harm. Discarding the bamboo, you start off NORTH again in good spirits.\n')
    readlineSync.keyInPause()
    return 182
  },
  room148: (player) => {
    // * * * * * ADVANCED COMBAT ROOM * * * * *
    console.log('\x1Bc')
    console.log('There is nowhere to go except down the steps towards the barking dogs. You reach the bottom and, with your sword draw, face the two huge black GUARD DOGS, which leap at you one at a time.\n')
    const monster1 = new GuardDog(7, 7)
    monster1.type = 'First GUARD DOG'
    const monster2 = new GuardDog(7, 8)
    monster2.type = 'Second GUARD DOG'
    const outcome1 = battle(player, monster1)
    switch (outcome1) {
      case 0:
        return -1
      case 1:
        const options = ['Escape', 'Fight the Second GUARD DOG']
        const index = readlineSync.keyInSelect(options, "What do you want to do?", { cancel: false })
        switch (index) {
          case 0:
            console.log('\x1Bc')
            console.log('You decide to Escape by running east down the tunnel.\n')
            readlineSync.keyInPause()
            return 315
          case 1:
        }
        const outcome2 = battle(player, monster2)
        switch (outcome2) {
          case 0:
            return -1
          case 1:
            return 9
        }
    }
  },
  room149: (player) => {
    console.log('\x1Bc')
    console.log('You let go of the rope and hear it fall to the bottom of the pit. The Barbarian curses, promising to kill your paths should cross again. You step back and take a running jump. You land safely on the far side of the pit and continue west. Further down the tunnel, you step on a floor stone which tilts forward, triggering a trap which releases a boulder loosely set in the ceiling. You look up just as it is about to crash on top of you.\n')
    readlineSync.keyInPause()
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 70
    } else {
      return 353
    }
  },
  room150: (player) => {
    console.log('\x1Bc')
    console.log('Having had the sense not to put your sword arm into the hole, the effects of the tentacled arm are not too serious.\n')
    statChange(player, "skill", -1)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('You reach back into the hole and pull out the grappling iron and the leather pouch. Inside the pouch you find a tiny brass bell. You pack away your new possessions and continue north.\n')
    player.inv.grapplingIron++
    player.inv.brassBell++
    player.inv.leatherPouch++
    readlineSync.keyInPause()
    return 292
  },
  room151: (player) => {
    console.log('\x1Bc')
    console.log(`As you touch the idol's ${chalk.green('emerald')} eye you hear a creaking sound below you. Looking down, you are shocked to see the two stuffed birds flying off. Their wings flap in jerky movements, but they are soon above you and look set to attack. Fight the FLYING GUARDIANS one at a time, however your your skill is reduced during combat because of your restricted position.\n`)
    statChange(player, "skill", -2)
    readlineSync.keyInPause()
    const monster1 = new FlyingGuardian(7, 8)
    monster1.type = 'First FLYING GUARDIAN'
    const monster2 = new FlyingGuardian(8, 8)
    monster2.type = 'Second FLYING GUARDIAN'
    const outcome1 = battle(player, monster1)
    switch (outcome1) {
      case 0:
        return -1
      case 1:
        const outcome2 = battle(player, monster2)
        switch (outcome2) {
          case 0:
            return -1
          case 1:
            console.log('\x1Bc')
            console.log('You successfully defeated the FLYING GUARDIANS.\n')
            statChange(player, 'skill', 2)
            readlineSync.keyInPause()
            return 240
        }
    }
  },
  room152: (player) => {
    console.log('\x1Bc')
    console.log(`The DWARF congratulates you for guessing correctly. He tells you that you must now progress to the second stage of the test. He reaches for a wicker basket and tells you that a snake is held within it. He tips up the basket and the snake drops on to the floor; it is a cobra, and it rears up in the air ready to strike. The DWARF tells you that he wishes to test your reactions. Bare-handed, you must grasp the cobra below its head, avoiding its deadly fangs. You crouch down on the floor, tensing yourself for the moment to seize it.\n`)
    const skillTest = rollDie(2)
    if (skillTest <= player.skill) {
      return 55
    } else {
      return 202
    }
  },
  room153: (player) => {
    console.log('\x1Bc')
    console.log('The door opens into a small room in which there is a human skull with jewelled eyes resting on top of a marble plinth. A row of loaded crossbows is fixed to the left-hand wall, and two small wooden balls lie on the floor just inside the door.\n')
    const options = ['Walk into the room and pick up the skull', 'Throw a wooden ball at the skull from the doorway', 'Close the door and continue west, taking the wooden balls with you']
    const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
    switch (index) {
      case 0:
        return 390
      case 1:
        return 371
      case 2:
        player.inv.woodenBalls += 2
        return 74
    }
  },
  room154: () => {
    console.log('\x1Bc')
    console.log('Running down the tunnel, you soon catch up with the Barbarian and tell him that the eastern passage comes to a dead end. He nods his head in silent understanding and sets off towards the west with you at his side.\n')
    readlineSync.keyInPause()
    return 22
  },
  room155: () => {
    console.log('\x1Bc')
    console.log(`The words of the spirit girl's poem flash through your mind: "When corridor doth water meet, do not make a quick retreat..." Of course, it is here that she wants you to dive into the water. Now you must decide what to do.\n`)
    const options = ['Dive into the water', 'Walk back down the tunnel']
    const index = readlineSync.keyInSelect(options, "What do you decide?", { cancel: false })
    switch (index) {
      case 0:
        return 378
      case 1:
        return 322
    }
  },
  room156: () => {
    console.log('\x1Bc')
    console.log('The small plate slides open easily, and you find yourself peering into a room with a deep pit in the floor behind the door. On the opposite wall there are two iron hooks, on one of which hangs a coil of rope.\n')
    const options = ['Open the door, jump over the pit and take the rope', 'Continue north along the tunnel']
    const index = readlineSync.keyInSelect(options, "What would you rather do?", { cancel: false })
    switch (index) {
      case 0:
        return 208
      case 1:
        return 326
    }
  },
  room157: (player) => { 
    console.log('\x1Bc')
    console.log('The casket opens easily, and inside there is a black velvet bag containing a large pearl.\n')
    player.inv.largePearl++
    statChange(player, "luck", 1)
    console.log('After putting the pearl in your pocket, you press on through the cobwebs.\n')
    readlineSync.keyInPause()
    return 310
  },
  room158: (player) => {
    console.log('\x1Bc')
    console.log('You lift the jug to your lips and take a swig of liquid. It burns so much that you drop the jug and grab your throat in agony. You have swallowed acid!\n')
    statChange(player, 'skill', -1)
    const alive = statChange(player, 'stamina', -4)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      return 275
    }
  },
  room159: () => { },
  room160: () => {
    console.log('\x1Bc')
    console.log('Your armour and sword weigh you down, but you just manage to land safely on the far edge of the pit. You waste no time and head east.\n')
    readlineSync.keyInPause()
    return 237
  },
  room161: () => { },
  room162: (player) => {
    console.log('\x1Bc')
    console.log(`Removing the box lid by the light of the tunnel, you find an iron key and a large gem. It is a ${chalk.blue('sapphire')}.\n`)
    statChange(player, "luck", 1)
    player.inv.ironKey++
    player.inv.sapphire++
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('Placing the items carefully in your backpack, you set off north once again.\n')
    readlineSync.keyInPause()
    return 142
  },
  room163: () => { },
  room164: () => {
    console.log('\x1Bc')
    console.log('As you walk along, droplets of water again start falling from the tunnel ceiling. You see wet footprints, made by the same boots that you followed earlier, heading west. The footprints lead to a closed iron door in the right-hand wall of the tunnel, but do not seem to go any further.\n')
    const options = ['Open the door', 'Keep going west']
    const index = readlineSync.keyInSelect(options, "What would you rather do?", { cancel: false })
    switch (index) {
      case 0:
        return 299
      case 1:
        return 83
    }
  },
  room165: () => { },
  room166: () => {
    console.log('\x1Bc')
    console.log(`As you touch the ${chalk.green('emerald')} of the idol, you hear a creaking sound below you. Looking down, you are shocked to see the two stuffed birds taking flight. Their wings flap in jerky movements, but they are soon above you and look set to attack. Fight the FLYING GUARDIANS one at a time, however your your skill is reduced during combat because of your restricted position.\n`)
    statChange(player, "skill" - 3)
    readlineSync.keyInPause()
    const monster1 = new FlyingGuardian(7, 8)
    monster1.type = 'First FLYING GUARDIAN'
    const monster2 = new FlyingGuardian(8, 8)
    monster2.type = 'Second FLYING GUARDIAN'
    const outcome1 = battle(player, monster1)
    switch (outcome1) {
      case 0:
        return -1
      case 1:
        const outcome2 = battle(player, monster2)
        switch (outcome2) {
          case 0:
            return -1
          case 1:
            console.log('\x1Bc')
            console.log('You successfully defeated the FLYING GUARDIANS.\n')
            statChange(player, 'skill', 3)
            readlineSync.keyInPause()
            return 11
        }
    }
  },
  room167: () => { },
  room168: () => { },
  room169: () => { },
  room170: () => { },
  room171: () => { },
  room172: () => { },
  room173: () => { },
  room174: () => { },
  room175: () => { },
  room176: () => { },
  room177: (player) => {
    console.log('\x1Bc')
    console.log(`You just have time to hear the GNOME yell, 'Three crowns!', before the lock clicks open. As the heavy door swings slowly outwards, the GNOME rushes towards it, hurling the glass ball at your feet. Green gas escapes from the broken glass, and you try to avoid inhaling it.\n`)
    readlineSync.keyInPause()
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 243
    } else {
      return 103
    }
  },
  room178: () => { },
  room179: () => { },
  room180: () => { },
  room181: () => { },
  room182: (player) => {
    console.log('\x1Bc')
    console.log('The temperature continues to rise and you find yourself dripping with sweat. As you struggle on, the heat intensifies until it feels like white heat and becomes so unbearable that you begin to pass out.\n')
    readlineSync.keyInPause()
    if (player.abilities.withstandHeat) {
      return 25
    } else {
      return 242
    }
  },
  room183: () => { },
  room184: () => { },
  room185: () => { },
  room186: (player) => {
    console.log('\x1Bc')
    console.log('Slowly and carefully, you begin to climb the idol. You are about to grab hold of its large when suddenly your foot slips.\n')
    readlineSync.keyInPause()
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 260
    } else {
      return 358
    }
  },
  room187: () => { },
  room188: () => { },
  room189: (player) => {
    console.log('\x1Bc')
    console.log(`The ORC's morning star sinks agonizingly into your left thigh.\n`)
    const alive = statChange(player, 'stamina', -2)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log('You stagger backwards, but manage to regain your balance in time to defend yourself. Fortunately, the tunnel is too narrow for both ORCS to attack you at once. Fight them one at a time.\n')
      const monster1 = new Orc(5, 5)
      monster1.type = 'First ORC'
      const monster2 = new Orc(6, 4)
      monster2.type = 'Second ORC'
      const outcome1 = battle(player, monster1)
      switch (outcome1) {
        case 0:
          return -1
        case 1:
          const outcome2 = battle(player, monster2)
          switch (outcome2) {
            case 0:
              return -1
            case 1:
              return 257
          }
      }
    }
  },
  room190: (player) => {
    console.log('\x1Bc')
    console.log('Your body vibrates wildly and you are unable to stop yourself passing out.\n')
    const alive = statChange(player, 'stamina', -3)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      return 50
    }
  },
  room191: () => {
    console.log('\x1Bc')
    const roll = rollDie(2)
    console.log(`You roll two dice. The total is: ${roll}.\n`)
    readlineSync.keyInPause()
    if (roll < 8) {
      return 152
    } else {
      return 121
    }
  },
  room192: () => {
    console.log('\x1Bc')
    console.log('Walking along the tunnel, you notice an iron grille in the floor.\n')
    const options = ['Stop and lift it up', 'Keep walking']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 120
      case 1:
        return 292
    }
  },
  room193: () => {
    console.log('\x1Bc')
    console.log('The acid burns through your stomach wall, eating its way into your vital organs. You collapse unconscious, never to recover. Your adventure ends here.\n')
    readlineSync.keyInPause()
    return -1
  },
  room194: () => {
    console.log('\x1Bc')
    console.log('On a stone ledge in the tunnel wall you see two dusty leather-bound books. Throm grunts his contempt for the written word, urging you to leave the books and hurry on.\n')
    const options = ['Open the red leather book', 'Open the black leather book', 'Continue north along the tunnel']
    const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
    switch (index) {
      case 0:
        return 52
      case 1:
        return 138
      case 2:
        return 369
    }
  },
  room195: (player) => {
    console.log('\x1Bc')
    console.log(`You draw your sword and rush towards the old man. He raises his left arm and suddenly you hit and bounce off an invisible shield. "Do not be foolish, my powers are great," the old man says calmly. "If you do not believe me, watch this." From out of nowhere a flying fist appears, whichi smashes into your face before you can duck.\n`)
    const alive = statChange(player, 'stamina', -1)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log('You shake your head and rub your jaw. You appear to have no alternative but to try to answer his question.\n')
      readlineSync.keyInPause()
      return 382
    }
  },
  room196: (player) => {
    console.log('\x1Bc')
    console.log(`You raise your shield in front of you just in time to protect yourself from a volley of spikes released from the MANTICORE'S tail and aimed straight at your heart. They sink into your shield and you remain unharmed. Swiftly you draw your sword and advance on the MANTICORE.\n`)
    readlineSync.keyInPause()
    const monster = new Manticore(11, 11)
    const outcome = battle(player, monster)
    switch (outcome) {
      case 0:
        return -1
      case 1:
        return 364
    }
  },
  room197: () => {
    console.log('\x1Bc')
    console.log('Mercifully, the temperature now starts to drop rapidly, and soon it feels almost cool again. On the left-hand side of the tunnel is a closed door. It has a small iron plate in it, which m ight possible slide open.\n')
    const options = ['Try to open the door', 'Try to slide the iron plate', 'Continue NORTH up the tunnel']
    const index = readlineSync.keyInSelect(options, 'What will you do?', { cancel: false })
    switch (index) {
      case 0:
        return 171
      case 1:
        return 156
      case 2:
        return 326
    }
  },
  room198: () => {
    console.log('\x1Bc')
    console.log('Once the gas has cleared, you walk back to the chest and look inside. There is a pendant chain lying in the bottom of it, but somebody has already removed the stone from its setting. This annoys you so much that you throw the chain on to the floor and storm out of the room and up the tunnel.\n')
    readlineSync.keyInPause()
    return 230
  },
  room199: (player) => {
    console.log('\x1Bc')
    const roll = rollDie(1)
    console.log(`The crossbow bolts are far too many to evade. ${roll} bolts sink into your body.\n`)
    const alive = statChange(player, 'stamina', (-2 * roll))
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log(`You must rest here a long time to recover from your wounds.\n`)
      statChange(player, 'luck', -1)
      console.log('WHen you eventually feel strong enough to carry on, you leave the room and continue west along the tunnel.\n')
      readlineSync.keyInPause()
      return 74
    }
  },
  room200: () => {
    console.log('\x1Bc')
    console.log('The door opens into a small room with a straw-covered floor. In the centre of the room there is a large draped cage standing some two metres high. There is a cord fixed to the top of the drape which runs up through an iron ring in the ceiling and hangs down to the floor.\n')
    const options = ['Pull the drape up', 'Leave the room and head north along the tunnel']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 321
      case 1:
        return 316
    }
  },
  room201: (player) => {
    console.log('\x1Bc')
    console.log(`You search through the cupboards and boxes in IVY's room, but you find nothing except an old bone, which you may take with you if you wish.\n`)
    const boolYes = readlineSync.keyInYNStrict(['Take the bone?'])
    if (boolYes) {
      player.inv.oldBone++
    }
    console.log('\x1Bc')
    console.log('Leaving the chamber by the east door, you now find yourself standing at the end of another tunnel.\n')
    readlineSync.keyInPause()
    return 305
  },
  room202: (player) => {
    console.log('\x1Bc')
    console.log('The cobra\'s reactions are quicker than yours, and its hooded head shoots forward to bite you.\n')
    readlineSync.keyInPause()
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 18
    } else {
      return 42
    }
  },
  room203: (player) => {
    console.log('\x1Bc')
    console.log('You stagger to your feet and draw your sword. You are only just in time, for the fearsome beast is closing in on you fast. This is going to be one of the toughest fights of your life.\n')
    const monster = new PitFiend(12, 15)
    const outcome = battle(player, monster)
    switch (outcome) {
      case 0:
        return -1
      case 1:
        return 258
    }
  },
  room204: (player) => {
    console.log('\x1Bc')
    console.log('There is an unseen pressure plate on top of the plinth, and as soon as the skull is put back on it, the device is sprung. Immediately the crossbows release a shower of bolts across the room.\n')
    readlineSync.keyInPause()
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 131
    } else {
      return 199
    }
  },
  room205: () => {
    console.log('\x1Bc')
    console.log('Running after the LEPRECHAUNS, you hear more laughter, only now its behind you. You look round and see six more LEPRECHAUNS emerging from behind a hidden door in the tunnel wall. Suddenly, yet another LEPRECHAUN drops on your back from a ledge fixed to the ceiling. Shaking him off your back, you draw your sword, whereupon the LEPRECHAUNS laugh even louder.\n')
    const options = ['Attack them', 'Try and walk past them']
    const index = readlineSync.keyInSelect(options, "What would you rather do?", { cancel: false })
    switch (index) {
      case 0:
        return 306
      case 1:
        return 161
    }
  },
  room206: (player) => {
    console.log('\x1Bc')
    console.log(`The stalactites continue to fall around you, but you haven't enough strength to do more than crawl towards the archway. Suddenly you feel an arm around your waist picking you up, and realise in your semi-conscious state that Throm is carrying you. He lays you down in the safety of the tunnel and tends your wounds. You decide to eat some of your Provisions to help regain your strength, and you also give one portion to Throm in gratitude for his rescuing you.\n`)
    player.provisions -= 2
    statChange(player, "stamina", 4)
    console.log(`You now have ${player.provisions} provisions.\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`He apologizes for starting the rock-fall and offers you his hand to shake. Despite the pain, you manage a smile and shake his hand. When you have finally recovered, you stand up and head east, with Throm leading the way.\n`)
    readlineSync.keyInPause()
    return 60
  },
  room207: (player) => {
    console.log('\x1Bc')
    console.log('You take off your shirt and tear it in half. You wrap a piece around each foot to give yourself some sort of protection against the corrosive slime, and dash across it in giant leaps. On the firm ground beyond the slime, you frantically try to rip the burning shirt off your feet with your sword. However, some of the slime has eaten its way through to your ankle.\n')
    const alive = statChange(player, 'stamina', -3)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log('Setting off north again, you come to a junction.\n')
      const options = ['Go west', 'Continue north']
      const index = readlineSync.keyInSelect(options, "Where do you wish to go?", { cancel: false })
      switch (index) {
        case 0:
          return 386
        case 1:
          return 218
      }
    }
  },
  room208: (player) => {
    console.log('\x1Bc')
    console.log('The door swings open into the room, and you step back and jump over the pit. You put the rope in your backpack and jump back over the pit to leave the room and head north.\n')
    player.inv.rope++
    readlineSync.keyInPause()
    return 326
  },
  room209: (player) => {
    // COMPLICATED INVENTORY ROOM
    console.log('\x1Bc')
    console.log('You are dismayed to find that not only are all of your remaining Provisions saturated and inedible, but one of the treasures you found is missing.\n')
    // randomly select a potion or jewel once full list is ready
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('You carefull repack your remaining possessions and set off north again.\n')
    readlineSync.keyInPause()
    return 356
  },
  room210: () => {
    console.log('\x1Bc')
    console.log('You enter a room in which a man in tattered clothing is standing chained to the wall by his left arm. You see that his right hand is missing and realize that his must be the hand nailed to the door. Pleading for mercy, he cowers back from you as far as his chains will allow.\n')
    const options = ['Cut him free from his chains', 'Leave the room to head north']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 27
      case 1:
        return 78
    }
  },
  room211: (player) => {
    console.log('\x1Bc')
    console.log(`You manage to free yourself from IVY'S grip and draw your sword. Picking up a broken stool as a weapon, she advances towards you.\n`)
    readlineSync.keyInPause()
    const monster = new Ivy(9, 9)
    const outcome = battle(player, monster)
    switch (outcome) {
      case 0:
        return -1
      case 1:
        return 201
    }
  },
  room212: () => {
    console.log('\x1Bc')
    console.log('Gripping the rope firmly, you step back to take a running jump. However, in the dim light you do not notice that someone has cut the rope almost in two just a little way above the section you are holding. As you swing out across the pit it suddenly breaks, and you scream with fear as you plunge headlong to the depths below.\n')
    readlineSync.keyInPause()
    return 285
  },
  room213: () => {
    console.log('\x1Bc')
    console.log('The tunnel soon divides into two. You hear a buzzing sound coming from the western branch.\n')
    const options = ['Walk west to investigate who or what is making the noise', 'Continue north']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 108
      case 1:
        return 14
    }
  },
  room214: () => {
    console.log('\x1Bc')
    console.log(`Walking along, you see a red line painted across the tunnel floor and notice a sign on the wall which reads: 'No weapons beyond this point'.\n`)
    const options = ['Abandon any weapons before continuing north', 'Ignore the notice and carry on north']
    const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
    switch (index) {
      case 0:
        return 389
      case 1:
        return 181
    }
  },
  room215: (player) => {
    console.log('\x1Bc')
    console.log('Your sword easily pierces the thin outer casing of the giant spore ball. A thick brown cloud of spores bursts out of the ball and envelopes you. Some of the spores stick to your skin and start to itch terribly. Great lumps come up on your face and arms, and your skin feels as if it is on fire.\n')
    const alive = statChange(player, 'stamina', -2)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log('Frantically scatching your itching lumps, you step over the now deflated spore ball and head EAST.\n')
      readlineSync.keyInPause()
      return 13
    }
  },
  room216: () => { },
  room217: () => { },
  room218: () => { },
  room219: () => { },
  room220: (player) => {
    console.log('\x1Bc')
    console.log('A dull \'bong\' sounds from the bell like a death toll. Everything around you starts to vibrate, and you grit your teeth as your head too starts to shudder. Your whole body is trembling and you fall to the floor. You quiver and shake, writhing convulsively on the floor as the vibrations intensify.\n')
    statChange(player, 'skill', -2)
    const alive = statChange(player, 'stamina', -2)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log('You search desperately for a way of stopping the bell.\n')
      const options = ['Scream as loud as you can', 'Try to deaden the bell with your boot']
      const index = readlineSync.keyInSelect(options, 'What will you do?', { cancel: false })
      switch (index) {
        case 0:
          return 61
        case 1:
          return 346
      }
    }
  },
  room221: () => {
    console.log('\x1Bc')
    console.log('The tunnel leads into a damp, high-ceilinged cavern with a rock-strewn floor. Long dripping teeth-like stalactites hang down threateningly, their constant dripping creating milky pools on the floor. The tunnel carries on through an archway carved in the shape of a demonic mouth.\n')
    const options = ['Search the chamber', ' Head straight for the archway']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        return 374
      case 1:
        return 60
    }
  },
  room222: () => { },
  room223: () => { },
  room224: () => { },
  room225: () => { },
  room226: (player) => {
    if (!player.abilities.barbarianSearched) {
      console.log('\x1Bc')
      console.log('The meat contains herbs which will increase your strength.\n')
      statChange(player, 'stamina', 3)
      player.abilities.barbarianSearched = true
      readlineSync.keyInPause()
    }
    console.log(`\x1Bc`)
    if (player.abilities.alcoveSearched) {
      console.log('With nothing of interest left in the chamber you leave to continue west.\n')
      readlineSync.keyInPause()
      return 83
    } else {
      const options = ['Walk over to the alcove', 'Leave the chamber to continue west']
      const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
      switch (index) {
        case 0:
          return 41
        case 1:
          return 83
      }
    }
  },
  room227: () => { },
  room228: () => { },
  room229: (player) => {
    console.log('\x1Bc')
    console.log(`As soon as your head goes under the blue light, you hear the sound of muffled voices. The faces are no longer laughing, but have changed their expressions to ones of despair and anguish. A young girl's sad face hovers in front of you, and she begins to whisper a poem.\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`Transfixed you listen intently, believing that she has a special message for you as she recites:\n`)
    console.log(`\t'When corridor doth water meet,\n\tDo not make a quick retreat.\n\tTake a breath and jump deep in\n\tIf your Trial you hope to win.'\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`Memorising the spirit girl's poem, you step through the shaft of light and quickly head on north.\n`)
    player.inv.spiritGirlPoem++
    readlineSync.keyInPause()
    return 107
  },
  room230: (player) => {
    console.log('\x1Bc')
    console.log('The tunnel starts to widen, and ahead you see it open into a huge cavern from where you can hear the sound of many high-pitched voices. You creep up to the entrance and take a look inside. There are about twenty tiny people with long noses and ears running in a circle around a large golden effigy.\n')
    if (player.inv.doppelgangerPotion) {
      const options = ['Walk up and talk to them', 'Try to creep past them', 'Drink a Doppelganger Potion']
      const index = readlineSync.keyInSelect(options, 'What will you do?', { cancel: false })
      switch (index) {
        case 0:
          return 88
        case 1:
          return 5
        case 2:
          return 385
      }
    } else {
      const options = ['Walk up and talk to them', 'Try to creep past them']
      const index = readlineSync.keyInSelect(options, 'What will you do?', { cancel: false })
      switch (index) {
        case 0:
          return 88
        case 1:
          return 5
      }
    }
  },
  room231: () => {
    console.log('\x1Bc')
    console.log('You find a pool behind the dead HOBGOBLINS and take great gulps of the cool water as fast as you can. This neutralises the acid and slowly you begin to recover. Still in pain, you stand up and set off NORTH.\n')
    readlineSync.keyInPause()
    return 110
  },
  room232: (player) => {
    if (player.abilities.unarmed) {
      return 286
    } else {
      return 320
    }
  },
  room233: () => {
    console.log('\x1Bc')
    console.log('You break off a large piece of the mushroom and bite into it eagerly. Immediately your stomach feels bloated and you can even see it beginning to bulge below your belt. Your whole body starts to expand, bursting out of your clothes with a loud ripping sound. You grow bigger and bigger, and soon your face is pressed against the celing. The mushrooms you have eaten are much sought after by wizards for their growth potions, but to you they spell doom. You are too large to ever leave the cellar, and your adventure ends here.')
    readlineSync.keyInPause()
    return -1
  },
  room234: (player) => {
    console.log('\x1Bc')
    console.log(`A little farther on you come to a section of the tunnel which is covered with thick green slime. It looks threatening, so you decide to test it first with a piece of cloth. The slime's corrosive jelly burns the cloth instantly, leaving no trace.\n`)
    readlineSync.keyInPause()
    if (player.inv.stilts) {
      return 183
    } else {
      return 207
    }
  },
  room235: (player) => {
    console.log('\x1Bc')
    console.log('You have no time to react before the dart thuds into your thigh.\n')
    player.abilities.alcoveSearched = true
    const alive = statChange(player, 'stamina', -2)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      return 73
    }
  },
  room236: (player) => {
    // * * * * * ADVANCED COMBAT ROOM * * * * *
    console.log('\x1Bc')
    console.log('The fist retracts and prepares to strike again. With your free hand you draw your sword and try to cut the handle of the door. Although you do not recognize it, you are being attacked by the fluid form of an IMITATOR.\n')
    readlineSync.keyInPause()
    const monster = new Imitator(9, 8)
    const outcome = battle(player, monster)
    switch (outcome) {
      case 0:
        return -1
      case 1:
        return 314
    }
  },
  room237: () => {
    console.log('\x1Bc')
    console.log('The tunnel makes a sudden left turn and continues north for as far as you can see. You soon arrive at a closed wooden door in the left-hand wall.\n')
    const options = ['Open the door', 'Keep going north']
    const index = readlineSync.keyInSelect(options, "What do you want to do?", { cancel: false })
    switch (index) {
      case 0:
        return 12
      case 1:
        return 100
    }
  },
  room238: (player) => {
    console.log('x1Bc')
    console.log('As you fall, you manage to grab the rope with your hands. Slowly you haul yourself over to the far side and scramble up on to the floor. You lift the helmet off the pole and put it on your head. It has been made by a highly skilled ironsmith.\n')
    player.inv.wingedHelmet++
    statChange(player, "skill", 1)
    readlineSync.keyInPause()
    console.log('Not wishing to risk walking back across the tightrope, you decide to crawl along it. Safely back on firm ground, you step through the archway and head north up the tunnel.\n')
    readlineSync.keyInPause()
    return 291
  },
  room239: () => {
    console.log("\x1Bc")
    console.log("Not much farther down the tunnel you come to a closed door on your left. Putting your ear to the door, you listen intently but hear nothing.\n")
    const options = ["Open the door", "Keep walking north"]
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 102
      case 1:
        return 344
    }
  },
  room240: (player) => {
    console.log('\x1Bc')
    console.log(`You look down and see the crumpled bodies of the two FLYING GUARDIANS lying motionless on the floor. You start to prise out the idol's ${chalk.green('emerald')} eye with the tip of your sword. At last it comes free and you are surprised by its weight when it falls into your hand. Hoping it may be of use later, you put it in your backpack.\n`)
    player.inv.emerald++
    const options = ['Prise out right eye', 'Climb down the idol']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do next?', { cancel: false })
    switch (index) {
      case 0:
        return 34
      case 1:
        return 89
    }
  },
  room241: () => {
    console.log('\x1Bc')
    console.log('A brown velvet curtain is draped over an archway in the eastern wall of the tunnel.\n')
    const options = ['Pull back the curtain and walk through the archway', 'Continue north']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        return 393
      case 1:
        return 291
    }
  },
  room242: (player) => {
    console.log('\x1Bc')
    console.log('You shake your head, trying desperately to stop yourself from blacking out, but the heat is too much for you and you fall unconscious to the floor.\n')
    readlineSync.keyInPause()
    const skillTest = rollDie(2)
    if (skillTest <= player.skill) {
      return 48
    } else {
      return 366
    }
  },
  room243: () => {
    console.log('\x1Bc')
    console.log(`Covering your nose and mouth with your hand to avoid breathing in the gas, you follow the GNOME through the open door. You enter another tunnel, at the end of which is the welcome sight of daylight. Much to your surprise, you see the GNOME lying dead halfway down the tunnel. A crossbow bolt protrudes from the side of his head. The GNOME, in his bid for freedom, has fallen foul of Baron Sukumvit's final trap.\n\nYou walk past him and out into brilliant sunshine.\n`)
    readlineSync.keyInPause()
    return 400
  },
  room244: (player) => {
    console.log('\x1Bc')
    console.log(`He takes your Gold Piece and tells you that in a northern tunnel there is a wooden chair carved in the shape of a demon bird. In the arm of the chair is a secret panel which contains a potion in a glass phial. "It's a Doppelganger Potion, if I remember right. Good luck. I hope we meet again outside these infernal tunnels."\n`)
    player.abilities.crippledServantSpokenTo = true
    player.gold--
    console.log(chalk.yellow(`\nYou now have ${player.gold} Gold Pieces.`))
    console.log('\The man shuffles off and you continue your journey.\n')
    readlineSync.keyInPause()
    return 109
  },
  room245: () => { },
  room246: () => { },
  room247: () => { },
  room248: () => { },
  room249: (player) => {
    console.log('\x1Bc')
    console.log(`You just have time to hear the GNOME say, 'One crown and two skulls', before a white bolt of energy shoots out from the lock into your chest, knocking you unconscious.\n`)
    player.stamina -= (rollDie(1) + 1)
    console.log(chalk.red(`Your stamina is now: ${player.stamina}.`))
    readlineSync.keyInPause()
    if (player.stamina <= 0) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log(`You come to and are told by the GNOME to try again. You know you placed one gem in the correct slot, but which one? You sigh and tentatively try a new combination.\n`)
      const options = [
        `A: ${chalk.green('Emerald')}     B: ${chalk.white('Diamond')}     C: ${chalk.blue('Sapphire')}`,
        `A: ${chalk.white('Diamond')}     B: ${chalk.blue('Sapphire')}    C: ${chalk.green('Emerald')}`,
        `A: ${chalk.blue('Sapphire')}    B: ${chalk.green('Emerald')}     C: ${chalk.white('Diamond')}`,
        `A: ${chalk.green('Emerald')}     B: ${chalk.blue('Sapphire')}    C: ${chalk.white('Diamond')}`,
        `A: ${chalk.white('Diamond')}     B: ${chalk.green('Emerald')}     C: ${chalk.blue('Sapphire')}`,
        `A: ${chalk.blue('Sapphire')}    B: ${chalk.white('Diamond')}     C: ${chalk.green('Emerald')}`]
      const index = readlineSync.keyInSelect(options, 'Decide which gems you will place in the labelled slots:', { cancel: false })
      switch (index) {
        case 0:
          return 16
        case 1:
          return 392
        case 2:
          return 177
        case 3:
          return 287
        case 4:
          return 132
        case 5:
          return 249
      }
    }
  },
  room250: () => { },
  room251: () => { },
  room252: () => { },
  room253: () => { },
  room254: () => { },
  room255: () => { },
  room256: (player) => {
    console.log('\x1Bc')
    console.log(`Remembering the old man's advice, you search the arm of the chair for a secret panel. You find an almost invisible crack in the arm, which you start to press and squeeze. Suddenly a tiny panel springs out of the arm and you see a glass phial lying in a cavity. You pick it out and read the label: 'Doppelganger Potion - one dose only. This liquid will make you assume the shape of any nearby living being.' You place the strange potion in your backpack and continue north.\n`)
    player.inv.doppelgangerPotion++
    readlineSync.keyInPause()
    return 188
  },
  room257: (player) => {
    console.log('\x1Bc')
    console.log(`Inside one of the ORCs' pockets you find one Gold Piece and a hollow wooden tube. You put your findings in your backpack and set off west.\n`)
    player.gold++
    player.inv.hollowWoodenTube++
    console.log(chalk.black.bgYellow(`\nYou now have ${player.gold} gold.\n`))
    readlineSync.keyInPause()
    return 164
  },
  room258: () => {
    console.log('\x1Bc')
    console.log('You are exhausted and sit down for a rest on the tail of the dead beast. Looking down at your feet, you suddenly notice an iron ring poking up through the sand.\n')
    const options = ['Pull the ring', 'Leave the pit via the double doors']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 95
      case 1:
        return 248
    }
  },
  room259: () => {
    console.log('\x1Bc')
    console.log('Ignoring the pain, you run on. Ahead you see an underground river running east to west through the cavern, with a wooden bridge crossing over it. You look behind and see the TROGLODYTES in hot pursuit.\n')
    const options = ['Run over the bridge', 'Dive into the river']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 318
      case 1:
        return 47
    }
  },
  room260: () => {
    console.log('\x1Bc')
    console.log(`You just manage to grab the idol's earlobe and regain your footing. You scramble over its face and sit down on the bridge of its nose. You draw your sword and consider which jewelled eye to prise out.\n`)
    const options = ['Prise out the left eye', 'Prise out the right eye']
    const index = readlineSync.keyInSelect(options, "Which eye will you prise out?", { cancel: false })
    switch (index) {
      case 0:
        return 166
      case 1:
        return 140
    }
  },
  room261: (player) => {
    console.log('\x1Bc')
    console.log(`Despite all your efforts, you cannot get the lasso off the idol's beck. Finally you give up and abandon it to whoever may come after you. There is nothing else of interest in the cavern, so you walk over to the northwen wall and enter the tunnel.\n`)
    player.inv.rope--
    readlineSync.keyInPause()
    return 239
  },
  room262: () => { },
  room263: () => {
    console.log('\x1Bc')
    console.log('The door opens into another tunnel. Walking west, you soon arrive at a door in the north wall.\n')
    const options = ['Open the door', 'Continue west']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 153
      case 1:
        return 74
    }
  },
  room264: () => {
    console.log('\x1Bc')
    console.log('Ahead in the dim light you see two HOBGOBLINS fighting, punching and kicking each other furiously. There is a leather bag lying on the floor, and it seems to be this that they are fighting over.\n')
    const options = ['Try to talk to them', 'Attack them with your sword', 'Try to slip by them unnoticed']
    const index = readlineSync.keyInSelect(options, 'What will you do?', { cancel: false })
    switch (index) {
      case 0:
        return 130
      case 1:
        return 51
      case 2:
        return 355
    }
  },
  room265: () => { },
  room266: (player) => {
    console.log('\x1Bc')
    console.log(`You search through the cupboards and boxes in IVY's room, but you find nothing except an old bone, which you may take with you if you wish.\n`)
    const boolYes = readlineSync.keyInYNStrict(['Take the bone?'])
    if (boolYes) {
      player.inv.oldBone++
    }
    console.log('\x1Bc')
    console.log('Leaving the chamber by the east door, you now find yourself standing at the end of another tunnel.\n')
    readlineSync.keyInPause()
    return 305
  },
  room267: () => {
    console.log('\x1Bc')
    console.log('The tunnel ends shortly at a junction. Looking left and right, you see a narrow passage disappearing into the dim distance.\n')
    const options = ['Head west', 'Go east']
    const index = readlineSync.keyInSelect(options, "Where do you wish to go?", { cancel: false })
    switch (index) {
      case 0:
        return 352
      case 1:
        return 68
    }
  },
  room268: () => { },
  room269: () => { },
  room270: (player) => {
    console.log('\x1Bc')
    console.log('The lid of the box lifts off easily. Inside you find two Gold Pieces and a note written on a small piece of parchment addressed to you. After placing the gold in your pocket, you read the message, which says: \'Well done. At least you have the sense to stop and take advantage of the token aid given to you. Now I can advise you that you will need to find and use several items if you hope to pass triumphantly through my Deathtrap Dungeon. Signed Sukumvit.\' Memorising the advice on the note, you tear it into tiny pieces and continue north along the tunnel.\n')
    player.gold += 2
    console.log(chalk.black.bgYellow(`\nYou now have ${player.gold} gold.\n`))
    readlineSync.keyInPause()
    return 66
  },
  room271: () => { },
  room272: () => { },
  room273: () => {
    console.log('\x1Bc')
    console.log(`The wooden ball smashes into the skull, knocking it off the plinth and on to the floor. Much to your surprise, the crossbows do not release their deadly bolts. You step into the room cautiously and pick the skull up off the floor. You recognize the yellow stones as ${chalk.yellow('topaz')}, and eagerly pluck them from their sockets.You put them in your backpack, wondering whether or not a trap still awaits you in this room.\n`)
    player.inv.topaz++
    const options = ['Get down on all fours and crawl out of the room holding the skull', 'Replace the skull on the plinth before leaving the room']
    const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
    switch (index) {
      case 0:
        return 15
      case 1:
        return 204
    }
  },
  room274: () => { },
  room275: (player) => {
    console.log('\x1Bc')
    console.log('Thick smoke rises up from the floor where the acid has fallen from the broken jug. You crawl along the floor desperately trying to find drinkable water in the shallow pools of the the dripping tunnel.\n')
    readlineSync.keyInPause()
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 231
    } else {
      return 309
    }
  },
  room276: () => { },
  room277: () => { },
  room278: () => { },
  room279: () => {
    console.log('\x1Bc')
    console.log('You arrive at a junction in the tunnel. A new branch leads WEST, but the wet footprints you have been following continue NORTH. You decide to keep following the footprints.\n')
    readlineSync.keyInPause()
    return 32
  },
  room280: () => { },
  room281: () => { },
  room282: () => { },
  room283: () => { },
  room284: () => { },
  room285: (player) => {
    console.log('\x1Bc')
    console.log('You land heavily on your back, but luckily your backpack cushions your fall.\n')
    statChange(player, 'skill', -1)
    const alive = statChange(player, 'stamina', -2)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log('The darkness is almost pitch black at the bottom of the pit, and you crawl along the floor, groping in front of you. Suddenly your hand touches something cold, hard and smooth. The object is small and round, but you cannot figure out what it is. You place it in your backpack, hoping to see what it is once out of the pit. You continue to crawl forward and soon reach the pit wall. It is too smooth to climb, and you have to cut hand-and-toe-holds in it with your sword. This takes a long time, but you finally climb out of the pit on the east side.\n')
      readlineSync.keyInPause()
      console.log('\x1Bc')
      console.log('You immediately check out the object in your backpack, and discover that you have found an orb of blood-red ruby. You are absolutely delighted and head off east in high spirits, whistling softly under your breath.\n')
      player.inv.ruby++
      readlineSync.keyInPause()
      return 237
    }
  },
  room286: (player) => {
    console.log('\x1Bc')
    console.log('It was obviously a mistake to drop your weapons earlier, but at least you can now take those of the dead NINJA. You select one of his long knives and his long curved sword. Its steel cutting edge is expectionally hard, and you cannot help but admire its awesome beauty.\n')
    statChange(player, 'skill', 4)
    player.abilities.unarmed = false
    readlineSync.keyInPause()
    return 320
  },
  room287: (player) => {
    console.log('\x1Bc')
    console.log(`You just have time to hear the GNOME say, 'One crown and two skulls', before a white bolt of energy shoots out from the lock into your chest, knocking you unconscious.\n`)
    player.stamina -= (rollDie(1) + 1)
    console.log(chalk.red(`Your stamina is now: ${player.stamina}.`))
    readlineSync.keyInPause()
    if (player.stamina <= 0) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log(`You come to and are told by the GNOME to try again. You know you placed one gem in the correct slot, but which one? You sigh and tentatively try a new combination.\n`)
      const options = [
        `A: ${chalk.green('Emerald')}     B: ${chalk.white('Diamond')}     C: ${chalk.blue('Sapphire')}`,
        `A: ${chalk.white('Diamond')}     B: ${chalk.blue('Sapphire')}    C: ${chalk.green('Emerald')}`,
        `A: ${chalk.blue('Sapphire')}    B: ${chalk.green('Emerald')}     C: ${chalk.white('Diamond')}`,
        `A: ${chalk.green('Emerald')}     B: ${chalk.blue('Sapphire')}    C: ${chalk.white('Diamond')}`,
        `A: ${chalk.white('Diamond')}     B: ${chalk.green('Emerald')}     C: ${chalk.blue('Sapphire')}`,
        `A: ${chalk.blue('Sapphire')}    B: ${chalk.white('Diamond')}     C: ${chalk.green('Emerald')}`]
      const index = readlineSync.keyInSelect(options, 'Decide which gems you will place in the labelled slots:', { cancel: false })
      switch (index) {
        case 0:
          return 16
        case 1:
          return 392
        case 2:
          return 177
        case 3:
          return 287
        case 4:
          return 132
        case 5:
          return 249
      }
    }
  },
  room288: () => {
    console.log('\x1Bc')
    console.log('You look to your left and see Throm standing over the CAVE TROLL he has slain. Blood is pouring out from a deep cut in his shoulder, but does not seem to worry him. You search the bodies of the CAVE TROLLS, but find nothing apart from a bone ring on a leather cord hanging round the neck of one of them. The ring is engraved with a symbol which Throm recognizes. He explains that it must have belonged to druids of the north and that an ancient talisman such as this will increase your powers if your body is able to accept it. Throm will not touch it, and advises you to leave it well alone.\n')
    const options = ['Put the ring on', 'Continue east with Throm']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        return 64
      case 1:
        return 221
    }
  },
  room289: (player) => {
    console.log('\x1Bc')
    console.log('The drape rises to the top of the cage and there, to your horror, you see the face of an aged woman whose hair is a mass of seething snakes. It is the dreaded MEDUSA!\n')
    readlineSync.keyInPause()
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 216
    } else {
      return 19
    }
  },
  room290: () => {
    console.log('\x1Bc')
    const roll = rollDie(2)
    console.log(`You roll two dice. The total is: ${roll}.\n`)
    readlineSync.keyInPause()
    if (roll !== 8) {
      return 152
    } else {
      return 121
    }
  },
  room291: () => {
    console.log('\x1Bc')
    console.log('The tunnel continues north a long way before turning sharp right. Around the corner you come to a dead end. Only the mouth of a wooden chute in the wall offers any hope of further progress. You decide to take a chance and climb into the chute. You slide gently down and emerge into a room, landing on your back.\n')
    readlineSync.keyInPause()
    return 90
  },
  room292: () => {
    console.log('\x1Bc')
    console.log('A door comes into view in the left-hand wall of the tunnel. You listen carefully at the door but hear nothing. The door is not locked and the handle turns easily.\n')
    options = ['Open the door', 'Keep walking along the tunnel']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        return 93
      case 1:
        return 230
    }
  },
  room293: () => {
    console.log('\x1Bc')
    console.log('Following the three sets of wet footprints along the WEST passage of the tunnel, you soon arrive at a junction.\n')
    const options = ['Continue WEST, following two sets of footprints', 'Head NORTH, following the third set of footprints']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        return 137
      case 1:
        return 387
    }
  },
  room294: (player) => {
    // * * * * * ADVANCED COMBAT ROOM * * * * *
    console.log('\x1Bc')
  },
  room295: (player) => {
    console.log('\x1Bc')
    console.log('Running towards the archway, you stumble over a rock and lose your footing. You land sprawled on the floor, and before you have time to get up again, a stalactite crashes down on top of you, its pointed tip piercing your leg.\n')
    const alive = statChange(player, 'stamina', -5)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      return 206
    }
  },
  room296: () => {
    console.log('\x1Bc')
    console.log('Ahead you see that the tunnel turns a corner, beyond which it continues north. You stop before the corner, startled by the sound of high-pitched voices whispering and sniggering.\n')
    const options = ['Draw your sword and look round the corner.', 'Walk back to the junction to head north']
    const index = readlineSync.keyInSelect(options, 'What would you rather do?', { cancel: false })
    switch (index) {
      case 0:
        return 49
      case 1:
        return 241
    }
  },
  room297: (player) => {
    console.log('\x1Bc')
    console.log('Losing your hard-earned possessions is becoming a bit of a problem.\n')
    statChange(player, 'luck', -1)
    console.log('Without even pausing to thank you, IVY pushes you out of her chamber through a door in the east wall, and you find yourself standing at the end of another tunnel.\n')
    readlineSync.keyInPause()
    return 305
  },
  room298: () => {
    console.log('\x1Bc')
    console.log('You see a backpack propped up against the tunnel wall. You wonder if it belongs to one of your rivals.\n')
    const options = ['Look inside the backpack', 'Continue NORTH']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        return 304
      case 1:
        return 279
    }
  },
  room299: () => {
    console.log('\x1Bc')
    console.log('The door opens into a large chamber, where you are shocked to see one of your rivals, who has obviously met a sudden gory death. it is one of the Barbarians, and he is impaled on several long iron spikes which are fixed to a frame that has sprung out of the floor. A lot of rubbish and debris litters the floor, concealing a hidden trip-wire which he must have stepped on and thus released the spiked frame. In the far wall is an alcove, in which you can see a silver goblet standing on a small wooden table.\n')
    const options = ['Walk over to search the Barbarian', 'Walk towards the alcove', 'Close the door and continue west']
    const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
    switch (index) {
      case 0:
        return 126
      case 1:
        return 41
      case 2:
        return 83
    }
  },
  room300: () => {
    console.log('\x1Bc')
    console.log('You swing your sword against the mirror with all your might, but to no effect: the mirror does not break, and the MIRROR DEMON keeps advancing.\n')
    const options = ['Try and smash the mirror again', 'Attack the MIRROR DEMON']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        return 141
      case 1:
        return 327
    }
  },
  room301: () => {
    console.log('\x1Bc')
    console.log('The pipe is wet and slimy, but you crawl on into the dank darkness, slithering and sliding as you go. Suddenly your hand touches something hard and square which feels as if it is made of wood. It rattles as you shake it, and you decide you must be holding a box.\n')
    const options = ['Crawl back out of the pipe and examine your find', 'Press on further down the pipe, taking the box with you to examine later']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 162
      case 1:
        return 4
    }
  },
  room302: () => {
    console.log('\x1Bc')
    console.log(`After about twenty minutes the DWARF reappears on the balcony. He calls down to you saying, "Well, I do have an interesting problem on my hands. Prepare to fight your next opponent."\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`The wooden door rises once again and you are surprised to see a familiar face. It is Throm! He is cut and badly bruised, and doesn't seem to recognize you. He is clearly delirious as he staggers forward with his axe raised to attack you. The DWARF laughs and says, "The cobra bit him, but he has the strength of an ox and managed to carry on, even though most men would have died. Now you must fight him to decide finally which of you will continue the Trial of Champions."`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('You should abuse at the DWARF, protesting against the cruelty of such a contest. He merely laughs, and you have no option but to defend yourself against poor Throm. Despite his wounds, Throm is immensely strong.\n')
    readlineSync.keyInPause()
    const monster = new Throm(10, 12)
    const outcome = battle(player, monster)
    switch (outcome) {
      case 0:
        return -1
      case 1:
        return 379
    }
  },
  room303: () => {
    console.log('\x1Bc')
    console.log('With your free hand, you reach into your backpack and take out the jug. Uncorking it with your teeth, you pour the acid over the door, which is in fact the fluid form of an IMITATOR. A jet of smoke rises from it with a loud hissing sound as the acid immediately starts to burn the IMITATOR. It melts rapidly and you are able to step away unharmed. Having no choice, you somewhat apprehensively turn the handle of the other door.\n')
    readlineSync.keyInPause()
    return 262
  },
  room304: (player) => {
    console.log('\x1Bc')
    console.log('There is a single Gold Piece lying in the bottom of the backpack. As you reach for it, you suddenly feel a light tickling movement on the back of your hand.  You withdraw your hand slowly, trying to control your mounting panic, and are horrified to see a BLACK WIDOW SPIDER. Before you can shake it off, it sinks its poisonous fangs deep into your wrist.\n')
    const alive = statChange(player, 'stamina', -6)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      return 20
    }
  },
  room305: (player) => {
    console.log('\x1Bc')
    console.log('The tunnel ends at a flight of stone steps leading downwards. From the floor below you can hear the sound of barking dogs.\n')
    if (player.inv.oldBone) {
      return 253
    } else {
      return 148
    }
  },
  room306: () => { },
  room307: (player) => {
    console.log('\x1Bc')
    console.log('The cupboard contains a wooden mallet and 10 iron spikes, which you put in your backpack while wondering which door to open.\n')
    if (!player.inv.woodenMallet) {
      player.inv.woodenMallet++
      player.inv.ironSpikes += 10
    }
    const options = ['Open the west door', 'Open the north door']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 263
      case 1:
        return 136
    }
  },
  room308: () => { },
  room309: (player) => {
    console.log('\x1Bc')
    console.log('You scramble frantically around the floor in search of a pool of water, but do not find one. The acid burns with a searing pain deep down in your throat.\n')
    const alive = statChange(player, 'stamina', -3)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      const luck = testYourLuck(player)
      if (luck === 'lucky') {
        return 231
      } else {
        return 193
      }
    }
  },
  room310: () => { },
  room311: () => { },
  room312: () => { },
  room313: () => { },
  room314: () => { },
  room315: () => { },
  room316: () => { },
  room317: () => { },
  room318: () => { },
  room319: () => {
    console.log('\x1Bc')
    console.log('Your armour and sword weigh you down more than you think. In mid-air you realize with horror that you are not going to reach the other side of the pit. YOu crash into the side of the pit, some two metres below the rim, and tumble head over heels to the bottom.\n')
    readlineSync.keyInPause()
    return 285
  },
  room320: () => { },
  room321: () => { },
  room322: () => { },
  room323: () => { },
  room324: (player) => {
    if (player.abilities.crippledServantSpokenTo) {
      return 256
    } else {
      return 79
    }
  },
  room325: () => { },
  room326: () => {
    console.log('\x1Bc')
    console.log('Ahead you see that the tunnel turns sharply to the left. You turn the corner and almost bump straight into two fierce-looking ORCS, armed with morning stars and wearing leather armour. You are totally unprepared, and as you draw your sword, one of them swings its morning star at you.\n')
    readlineSync.keyInPause()
    const result = rollDie(1)
    if (result <= 2) {
      return 91
    } else if (result <= 4) {
      return 189
    } else {
      return 380
    }
  },
  room327: () => { },
  room328: () => { },
  room329: () => { },
  room330: () => { },
  room331: (player) => {
    console.log('\x1Bc')
    console.log('Touching the parchment has precisely the effect you had feared. The SKELETON lurches forward and, rising from its chair in a series of jerky movements, raises its sword to strike you. Lunging sideways, you draw your sword to defend yourself.\n')
    readlineSync.keyInPause()
    const monster = new Skeleton(8, 6)
    const outcome = battle(player, monster)
    switch (outcome) {
      case 0:
        return -1
      case 1:
        return 71
    }
  },
  room332: () => { },
  room333: () => { },
  room334: () => { },
  room335: () => { },
  room336: (player) => {
    console.log('\x1Bc')
    console.log('The wristband was made and cursed by a HAG. It slows down your reactions and dulls your senses.\n')
    statChange(player, 'skill', -4)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('You kick the tunnel wall in anger and stomp off NORTH.\n')
    readlineSync.keyInPause()
    return 298
  },
  room337: () => { },
  room338: () => {
    console.log('\x1Bc')
    console.log('The bodies are those of two ORC guards. At least one of your rivals in the Trial of Champions must still be ahead of you. A quick search of the bodies produces nothing apart from a necklace of teeth hanging around the neck of one of the ORCS.\n')
    const options = ['Wear the necklace yourself', 'Set off north without the necklace']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 123
      case 1:
        return 282
    }
  },
  room339: () => { },
  room340: () => { },
  room341: () => { },
  room342: () => { },
  room343: () => { },
  room344: () => {
    console.log('\x1Bc')
    console.log('The tunnel twists and turns but keeps steadily north. Ahead you see a thing shaft of blue light streaming down from the ceiling to the floor. It sparkles and shimmers, and you can see images of laughing faces in the light.\n')
    const options = ['Walk through the light', 'Walk round the light']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 229
      case 1:
        return 107
    }
  },
  room345: () => {
    console.log('\x1Bc')
    console.log('You are about to enter the room when the Potion of Trap Detection begins to work and you are filled with a terrible premonition of danger. The room is set with a deadly trap. You decide not to go in and continue north along the tunnel.\n')
    readlineSync.keyInPause()
    return 252
  },
  room346: () => {
    console.log('\x1Bc')
    console.log('You pull your boot off your foot and force yourself to each up and hold it against the bell. Slowly the bell stops vibrating and the pain in your body gradually eases. You manage to stand up, but you do not release your boot from the bell until it becomes completely still. You put your boot back on your foot and then continue your journey WEST.\n')
    readlineSync.keyInPause()
    return 362
  },
  room347: () => {
    console.log('\x1Bc')
    console.log(`The DWARF shakes his head, saying, "All brawn and no brain is not enough to master the Trial of Champions. I regret you have failed. You will not be allowed to leave in case you impart its secrets to others. However, you have done well to get so far and I will appoint you my servant for the coming years to prepare the dungeon for its new contestants.\n`)
    readlineSync.keyInPause()
    return -1
  },
  room348: (player) => {
    console.log('\x1Bc')
    console.log('You lunge at the BLOODBEAST, trying to avoid the tongue which flicks out to grab your leg.\n')
    readlineSync.keyInPause()
    const skillTest = rollDie(2)
    if (skillTest <= player.skill) {
      return 225
    } else {
      return 159
    }
  },
  room349: (player) => {
    console.log('\x1Bc')
    console.log('You lower yourself down the rope into the pit with one hand, using the other to grip your sword. The PIT FIEND is one of the most fearsome beasts you have ever seen, and you know this is to be one of the hardest fights of your life.\n')
    readlineSync.keyInPause()
    const monster = new PitFiend(12, 15)
    const outcome = battle(player, monster)
    switch (outcome) {
      case 0:
        return -1
      case 1:
        return 258
    }
  },
  room350: (player) => {
    console.log('\x1Bc')
    console.log('The GIANT FLY dives down and seizes you with four of its legs. It climbs quickly back to the roof of the cavern and you find yourself dangling helplessly in its grasp. Then, to your horror, it suddenly releases its grip and you fall ten metres to the floor, landing heavily.\n')
    const roll = rollDie(1) * -1
    const alive = statChange(player, 'stamina', roll)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log('You draw your sword just in time as the GIANT FLY swoops down to try and recapture you.\n')
      readlineSync.keyInPause()
      return 39
    }
  },
  room351: (player) => {
    console.log('\x1Bc')
    console.log('The idol is very smooth and will be difficult to climb without a rope.\n')
    readlineSync.keyInPause()
    if (player.inv.rope) {
      return 396
    } else {
      return 186
    }
  },
  room352: () => {
    console.log('\x1Bc')
    console.log('Ahead you hear the sound of rocks being ground and crushed. The noise grows louder and suddenly you realise that the wall on your right is starting to collapse. Terrified, yo uwatch as a large, hideous worm-like creature with a gaping mouth and extraordinarily powerful mandibles slithers through a hole in the wall. Its great jaws continue to crunch the rock as it turns its head slowly from side to side, feeling the cool air in the tunnel. It appears to be totally blind, but seems to know of your presence, perhaps sensing the heat of your body. It starts to slither towards you with its mandibles wide apart to attack.\n')
    const options = ['Fight the ROCK GRUB', 'Run back down the tunnel to the junction to head east']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 254
      case 1:
        return 68
    }
  },
  room353: (player) => {
    console.log('\x1Bc')
    console.log('Before you have time to get out of the way, the boulder smashes into your shoulder.\n')
    statChange(player, "skill", -1)
    const alive = statChange(player, 'stamina', -4)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      return 325
    }
  },
  room354: (player) => {
    console.log('\x1Bc')
    console.log('The pill makes you feel as though the whole world is against you.\n')
    statChange(player, "luck", -2)
    console.log('The DWARF tells you that you can now go on to the second stage of the test. He reaches for a wicker basket which, he informs you, contains a snake. He tips up the basket and the snake drops out on to the floor. It is a cobra and it rears up in the air, ready to strike. The DWARF tells you that he wishes to test your reactions. You must grasp the cobra bare-handed below its head, avoiding its deadly fangs. You crouch down on the floor, tensing yourself for the moment at which to seize it.\n')
    readlineSync.keyInPause()
    const skillTest = rollDie(2)
    if (skillTest <= player.skill) {
      return 55
    } else {
      return 202
    }
  },
  room355: () => {
    console.log('\x1Bc')
    console.log('You creep up behind the fighting HOBGOBLINS and, leaping out of the shadows, push them into the wall as you run by. You look back to see them sprawled on the floor and chuckle to yourself as you hurry on north.\n')
    readlineSync.keyInPause()
    return 110
  },
  room356: () => {
    console.log('\x1Bc')
    console.log(`There is an opening on the left-hand side of the tunnel wall. You are standing at the entrance of a large cavern, from which you hear a girl's voice crying for help. You can just make out the shape of a human figure rolling about on the floor at the back of the cavern.\n`)
    const options = ['Enter the cavern and investigate', 'Continue north along the tunnel']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 170
      case 1:
        return 192
    }
  },
  room357: (player) => {
    console.log('\x1Bc')
    console.log('The BLOODBEAST flops around awkwardly in its pool, and the smell of the poisonous fumes makes you retch as gas bubbles break the surface and contaminate the atmosphere.\n')
    if (player.inv.diamond || player.inv.emerald || player.inv.ruby || player.inv.sapphire || player.inv.topaz) {
      const options = ['Run round the side of its pool towards the tunnel', 'Throw a gem into its pool', 'Attack it with your sword']
      const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
      switch (index) {
        case 0:
          return 255
        case 1:
          return 332
        case 2:
          return 180
      }
    } else {
      const options = ['Run round the side of its pool towards the tunnel', 'Attack it with your sword']
      const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
      switch (index) {
        case 0:
          return 255
        case 1:
          return 180
      }
    }
  },
  room358: (player) => {
    console.log('\x1Bc')
    console.log('You lose your balance and tumble headlong to the floor.\n\n')
    const alive = statChange(player, 'stamina', -2)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log('You decide against trying to climb the idol again, and run forward to the tunnel in the northern wall.\n')
      readlineSync.keyInPause()
      return 239
    }
  },
  room359: () => {
    console.log('\x1Bc')
    console.log('You fall off the rope and tumble head over heels into the chasm. You smash your head on a rocky outcrop, and by the time you hit the bottom of the chasm you are already dead.\n')
    readlineSync.keyInPause()
    return -1
  },
  room360: () => {
    console.log('\x1Bc')
    console.log(`After paying off the old man, you climb into the wicker basket and watch as he tilts his head back and shouts, "Pull it up, Ivy!" The rope goes taut and the basket rises jerkily off the ground. As you are hauled higher and higher, the old man calls out to you, saying, "You'll like Ivy, she's a nice girl. We call her Poison Ivy!" He starts to laugh uncontrollably and you wonder somewhat apprehensively just who is hauling you up.\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`The basket goes through the ceiling and you find yourself in a small chamber, face to face with an ugly old female TROLL. Her face is hairy and covered with warts. With a huge hand she reaches forward and hauls you out of the basket, which she then lets fall to the floor below. She grabs you round the and says in a husky voice, "I want paying too!"\n`)
    const options = ['Offer her something from your backpack', 'Try to talk your way out of giving her anything', 'Attack her with your sword']
    const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
    switch (index) {
      case 0:
        return 297
      case 1:
        return 328
      case 2:
        return 211
    }
  },
  room361: (player) => {
    console.log('\x1Bc')
    console.log(`The PIT FIEND'S jaws snap at the monkey charm and pluck it out of the air. Suddenly its jaws springs open again, forced apart by the charm, which has expanded to fill its mouth. While the PIT FIEND thrashes around in the pit, trying to get rid of the charm, you lower yourself down into the pit to reach the double doors. In its mad rage, the PIT FIEND tries to crush you against the side of the wall with its massive body.\n`)
    player.inv.boneCharm--
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 82
    } else {
      return 377
    }
  },
  room362: () => {
    console.log('\x1Bc')
    console.log('The tunnel veers sharply to the right and continues NORTH for as far as you can see. You hear a tremendous commotion in the distance, growling and snarling and howling. You draw your sword and set off in the directino of the noise.\n')
    readlineSync.keyInPause()
    return 264
  },
  room363: (player) => {
    console.log('\x1Bc')
    console.log('The food and drink are excellent, and you feel much better.\n')
    statChange(player, "stamina", 2)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`Fully satisfied, you sit down and await the DWARF's return\n`)
    readlineSync.keyInPause()
    return 302
  },
  room364: (player) => {
    console.log('\x1Bc')
    console.log(`As you are wiping the MANTICORE'S blood from your sword, you are surprised to see a small man with a large nose suddenly jump out from behind one of the marble pillars. He is dressed in a tight-fitting green tunic and looks quite harmless, although you are wary of the way he is holding an opaque glass ball with a shimmering green light.\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`"Greetings," he says cheerfully. "My name is Igbut the Gnome, and I am the Trialmaster for your final test. Needless to say, my magical powers are great, so you should not try to attack me. You may have learnt during your quest that gems play an essential part in the Trial of Champions. The iron door in front of you is the victory exit, but there is only one way of opening it. Three gems have to be put into the lock mechanism, in a particular order, for the door to open. Each gem radiates a unique energy which will trigger the mechanism - if you do it correctly, that is. I will help you to a degree, but first we need the correct gems. Have you an ${chalk.green('emerald')}?\n`)
    readlineSync.keyInPause()
    if (player.inv.emerald) {
      return 31
    } else {
      return 3
    }
  },
  room365: () => {
    console.log('\x1Bc')
    console.log(`You tell Throm that there is no point in killing the DWARF as you will never find your way out of the chamber alone. You argue that an opportunity of tricking the DWARF might arise later, once you have found the exit from the chamber, so you intend to go through with the DWARF's test. You tell the DWARF that you are ready and he beckons you to follow him, telling Throm to wait for his return. A secret door opens in the chamber wall and you follow the DWARF into a small circular room. He closes the door behind you and hands you two bone dice, telling you to throw them on to the floor. You roll a six and a two: a total of eight. The DWARF asks you to roll them again, but this time you must predict whether the total will be the same as, or less or more than eight.\n`)
    const options = ['It will be the same', 'It will total less than eight', 'It will total more than eight']
    const index = readlineSync.keyInSelect(options, "What do you guess?", { cancel: false })
    switch (index) {
      case 0:
        return 290
      case 1:
        return 191
      case 2:
        return 84
    }
  },
  room366: () => {
    console.log('\x1Bc')
    console.log('The temperature continues to rise steadily, far beyond the limits of human tolerance. Lying on the near-molten floor of the tunnel, you fail to regain consciousness. Your adventure ends here.\n')
    readlineSync.keyInPause()
    return -1
  },
  room367: (player) => {
    console.log('\x1Bc')
    console.log(`He looks at you warily when you tell him you are a contestant in the Trial of Champions. You ask him what he is doing in the tunnels, and he replies rather reluctantly that he is a servant of one of the Trialmasters, Baron Sukumvit's appointed controllers of sections of his dungeon. After chatting for a whilem he admits that he would like to escape, but no one is allowed to leave the dungeon in case they reveal the secrets of its construction. He tells you that he hopes one day to bribe his way out, and that for one Gold Piece he will tell you where some treasure is hidden.\n`)
    const options = [`Pay for the old man's advice`, 'Wish him well and continue west']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        if (player.gold > 0) {
          return 244
        } else {
          console.log('\x1Bc')
          console.log(`Unfortunately you do not have any Gold Pieces in your inventory. You regrettabley tell the old man that you can't give him any coin and wish him well. You continue on west.\n`)
          readlineSync.keyInPause()
          return 109
        }
      case 1:
        return 109
    }
  },
  room368: (player) => {
    console.log('\x1Bc')
    console.log(`Leaning against the left-hand wall of the tunnel, you see a pair of bamboo stilts. They are securely chained, and you see a label attached to a padlock which reads: 'The price of these stilts is one Gold Piece. Place the coin in the slot to release the lock.'\n`)
    const options = ['Buy the stilts', 'Keep walking north']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?', { cancel: false })
    switch (index) {
      case 0:
        if (player.gold > 0) {
          return 165
        } else {
          console.log('\x1Bc')
          console.log('Unfortunately you do not have any Gold Pieces in your inventory. You carry on walking north.\n')
          readlineSync.keyInPause()
          return 234
        }
      case 1:
        return 234
    }
  },
  room369: (player) => {
    console.log('\x1Bc')
    console.log(`The tunnel turns sharply to the right, continuing east for as far as you can see. Throm stops and tells you to halt as well. He turns his head slowly from side to side, listening. "I hear footsteps coming down the tunnel towards us," he whispers. "Draw your sword."\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log("You both crouch down to hide in the shadows, and not a minute too soon, for a moment later you see the silhouette of two armed figures approaching. Throm jumps up and dashes forward, screaming a loud battle-cry. There are two CAVE TROLLS in front of you. Throm attacks the first one with his battleaxe, and you run to his aid and attack the second CAVE TROLL.\n")
    readlineSync.keyInPause()
    const monster = new CaveTroll(10, 11)
    const outcome = battle(player, monster)
    switch (outcome) {
      case 0:
        return -1
      case 1:
        return 288
    }
  },
  room370: (player) => {
    console.log('\x1Bc')
    console.log('As you run round the side of the pool, the BLOODBEAST flicks out its long tongue once again.\n')
    readlineSync.keyInPause()
    const skillTest = rollDie(2)
    if (skillTest <= player.skill) {
      return 104
    } else {
      return 342
    }
  },
  room371: (player) => {
    console.log('\x1Bc')
    console.log('You take aim and hurl the wooden ball at the skull.\n')
    readlineSync.keyInPause()
    const skillTest = rollDie(2)
    if (skillTest <= player.skill) {
      return 273
    } else {
      return 113
    }
  },
  room372: () => {
    console.log('\x1Bc')
    console.log(`You finally reach the warrior's body, but as soon as you touch the jewel, both it and the warrior vanish into thin air. You hear the door slam behind you, followed by a sudden ominous rumbling above you. You look up and see the ceiling start to lower. You run to the door to try to escape, but it is locked and there is no handle on the inside. The ceiling gradually drops, until you are forced to lie on the ground, trying to halt the ceiling's progress with your hands and feet. But it is a hopeless task, and you are crushed to death in the stone vice.\n`)
    readlineSync.keyInPause()
    return -1
  },
  room373: () => {
    console.log('\x1Bc')
    console.log('You clamber on to the soft boulder, half expecting to be engulfed by it at any moment. Getting over it is difficult, as your limbs sink into its soft casing, but eventually you manage to struggle over it. Relieved to be back on firm ground, you head EAST.\n')
    readlineSync.keyInPause()
    return 13
  },
  room374: () => {
    console.log('\x1Bc')
    console.log(`You walk around the cavern, but find nothing of interest. Throm calls out behind you, saying that he has found a leather pouch under a pile of rocks. Opening the pouch he laughs out loud as a tiny mouse runs through his fingers and scurries off into a crevice between two boulders. Suddenly you hear the sound of cracking rock above you, and look up to see stalactites breaking off the roof. Throm's booming laugh, which still echoes through the chamber, has made the stalactites vibrate and break off. You yell at Throm to run through the archway as the stalactites start to crash to the floor.\n`)
    readlineSync.keyInPause()
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 118
    } else {
      return 295
    }
  },
  room375: (player) => {
    console.log('\x1Bc')
    console.log('Acrid smoke rises from the jug as you lower the cloth into it. The liquid is unmistakably acid. You recork the jug and place it in your backpack, hoping it may be of use later. You sheathe your sword and press on NORTHWARDS.\n')
    player.inv.acid++
    readlineSync.keyInPause()
    return 110
  },
  room376: (player) => {
    console.log('\x1Bc')
    console.log(`The GNOME, still smiling, says excitedly, "Excellent! Just one to go. Do you possess a ${chalk.white('diamond')}?"\n`)
    readlineSync.keyInPause()
    if (player.inv.diamond) {
      return 62
    } else {
      return 3
    }
  },
  room377: (player) => {
    console.log('\x1Bc')
    console.log('The huge beast slams its body against your arm, and you lose your grip on the rope. Crying out in pain, you tumble to the bottom of the pit.\n')
    const alive = statChange(player, 'stamina', -5)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      return 203
    }
  },
  room378: (player) => {
    console.log('\x1Bc')
    console.log('Somewhat nervously, you take a deep breath and dive into the dark pool. The northern wall does not project very far beneath the surface of the water, and you decide to take the risk and swim under it. You soon start gasping for air, and are forced to swim upwards. You try not to think that you may be trapped in an old submerged tunnel and are very relieved when you surface into cool air. You are on the other side of the wall, and can see the tunnel rising out of the water and continuing north into the distance. You wade out of the water and check the contents of your wetbackpack.\n')
    readlineSync.keyInPause()
    const luck = testYourLuck(player)
    if (luck === 'lucky') {
      return 112
    } else {
      return 209
    }
  },
  room379: () => {
    console.log('\x1Bc')
    console.log(`Exhausted by your long duel, you fall to your knees. As you stare at Throm's still body, a bitter loathing for the DWARF fills your heart. Somehow you will avenge Throm. Engulfed in your hatred, you do not notice the DWARF enter the arena until he is standing right in front of you, a loaded crossbow aimed at your chest.\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`"I know what you are thinking," he says calmly, "but remember that only I know the way out of here. Get up, it's time for you to leave." Once on your feet, the DWARF indicates that you should walk ahead of him.\n`)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`Back in the chamber, he crosses over to the northern wall and pushes against one of its stones. A door-like section of the wall swings out, opening into another crystal-lit tunnel. With his crossbow still aimed at your chest, the DWARF smiles, saying, "Good luck."\n`)
    const options = ['Walk straight into the tunnel', 'Take a punch at the DWARF']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 213
      case 1:
        return 145
    }
  },
  room380: (player) => {
    console.log('\x1Bc')
    console.log(`The ORC's morning star crashes into your shield and bounces off harmlessly. The tunnel is too narrow for both of them to attack you at once, so you are able to fight them one at a time.\n`)
    const monster1 = new Orc(5, 5)
    monster1.type = 'First ORC'
    const monster2 = new Orc(6, 4)
    monster2.type = 'Second ORC'
    const outcome1 = battle(player, monster1)
    switch (outcome1) {
      case 0:
        return -1
      case 1:
        const outcome2 = battle(player, monster2)
        switch (outcome2) {
          case 0:
            return -1
          case 1:
            return 257
        }
    }
  },
  room381: () => {
    console.log('\x1Bc')
    console.log('You look round the room and see nothing of interest apart from an alcove in the west wall and a stone chair in the middle of the room. Sitting in the chair is the skeleton of an armed warrior, possibly a contestant from years gone by. The skeletal fingers of its right hand are gripped round a piece of parchment.\n')
    const options = ['Take the parchment from the skeleton', 'Walk over to the alcove']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {

    }
  },
  room382: () => {
    console.log('\x1Bc')
    console.log(`The old man points at one of the statues, and you recognise it immediately. It is the knight who started the Trial of Champions, the agonised look on his face locked in stone for eternity. The old man smiles, saying, "This man weighs 100 pounds plus half his weight. How much does he weigh?"\n`)
    const options = ['100 pounds', '150 pounds', '200 pounds']
    const index = readlineSync.keyInSelect(options, "What will you answer?", { cancel: false })
    switch (index) {
      case 0:
        return 144
      case 1:
        return 227
      case 2:
        return 391
    }
  },
  room383: () => {
    console.log('\x1Bc')
    console.log('Much to your surprise, nothing extraordinary happens to you while you are sitting in the chair. There is nothing else to do but continue north up the tunnel.\n')
    readlineSync.keyInPause()
    return 188
  },
  room384: (player) => {
    console.log('\x1Bc')
    console.log('The fourth step suddenly gives way under your weight. Your leg sinks into a deep hole, and before you have time to pull it out, you feel a pain in your foot as unseen sharp teeth sink into it. The high pitched squeaking you hear below is being made by rats. They are starved, and rip into your foot, hungry for your flesh.\n')
    const alive = statChange(player, 'stamina', -2)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log('You regain your balance and manage to pull your leg out of the hole. Three rats are still hanging on to your foot with their teeth. Kicking frantically, you smash their heads against the banister until they let go. You then wrap crude bandages torn from your shirt around your bleeding foot and climb the steps to set off north again.\n')
      readlineSync.keyInPause()
      return 277
    }
  },
  room385: (player) => {
    console.log('\x1Bc')
    player.inv.doppelgangerPotion--
    console.log('You pour the contents of the glass phial into your mouth and swallow the clear liquid. Although you do not feel any immediate change, you hope that the potion will create the illusion that you are a TROGLODYTE just like the ones in front of you. Taking a deep breath, you step boldly into the cavern. The TROGLODYTES continue their tribal dance, believing you to be one of them. You walk past them casually and head north. Unfortunately, the effects of the potion are short-lived. Suddenly you hear a shriek behind you as one of the TROGLODYTES spots you, and you are forced to run across the cavern floor. Ahead you see an underground river running east to west through the cavern and a wooden bridge crossing over it.\n')
    const options = ['Run over the bridge', 'Dive into the river']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 318
      case 1:
        return 47
    }
  },
  room386: (player) => {
    console.log('\x1Bc')
    console.log('You walk no more than three metres west before you hit an invisible barrier. If starts fizzing and crackling, and you are thrown back. You have hit an energy screen.\n')
    const alive = statChange(player, 'stamina', -1)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log('There is no alternative but to walk back to the junction and head north.\n')
      readlineSync.keyInPause()
      return 218
    }
  },
  room387: (player) => {
    console.log('\x1Bc')
    console.log('Ahead you hear the thud of heavy footsteps approaching. Out of the gloom steps a large, primitive being dressed in animal hide and carrying a stone club. On seeing you, he grunts and spits on the floor, then raises his club and lumbers on towards you, looking anything but friendly.\n\nYou draw your sword and prepare to fight the CAVEMAN.\n')
    readlineSync.keyInPause()
    const monster = new Caveman(7, 7)
    const outcome = battle(player, monster)
    switch (outcome) {
      case 0:
        return -1
      case 1:
        return 114
    }
  },
  room388: () => {
    console.log('\x1Bc')
    console.log('The tunnel soon comes to a dead end. A piece of paper, brown and curled with age, is pinnsed to the end wall.\n')
    const options = ['Pull it off the wall to see whether there is a message written on it', 'Hurry back down the tunnel to join the Barbarian']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 23
      case 1:
        return 154
    }
  },
  room389: (player) => {
    console.log('\x1Bc')
    console.log('Without your weapons you are more vulnerable, and the loss of your sword leaves you feeling almost naked.\n')
    player.abilities.unarmed = true
    statChange(player, "skill", -4)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('Wondering whether you have made the right decision, you follow the tunnel north.\n')
    readlineSync.keyInPause()
    return 181
  },
  room390: (player) => {
    console.log('\x1Bc')
    console.log(`You crouch down beside the plinth below the crossbows' line of fire. You reach up and pull the skill off the plinth, expecting your action to trigger off the crossbows. Much to your surprise, nothing happens.\n`)
    statChange(player, "luck", 1)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(`Still crouching, you plug the jewelled eyes out of the skull. You recognize the yellow stones as ${chalk.yellow('topaz')}, and place them in your backpack. Looking at the row of crossbows, you wonder whether a trap still awaits you in this room.\n`)
    player.inv.topaz++
    const options = ['Crawl out of the room holding the skull', 'Replace the skull on the plinth before crawling out of the room']
    const index = readlineSync.keyInSelect(options, "What will you do?", { cancel: false })
    switch (index) {
      case 0:
        return 15
      case 1:
        return 204
    }
  },
  room391: (player) => {
    console.log('\x1Bc')
    console.log(`Still smiling, the old man looks at you and says,"Well done, Stranger. You have answered correctly. I wish you good fortune during the rest of the Trial of Champions, and, to this end, I shall increase your powers." He then mutters a few more unintelligible words and you feel a powerful surge soar through your body.\n`)
    statChange(player, "skill", 1)
    statChange(player, "stamina", 1)
    statChange(player, "luck", 1)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log('You bid the old man farewell and leave his room to continue north along the passage.\n')
    readlineSync.keyInPause()
    return 100
  },
  room392: (player) => {
    console.log('\x1Bc')
    console.log(`You just have time to hear the GNOME say, 'Three skulls' before a white bolt of energy shoots out from the lock into your chest, knocking you unconscious.\n`)
    player.stamina -= (rollDie(1) + 1)
    console.log(chalk.red(`Your stamina is now: ${player.stamina}.`))
    readlineSync.keyInPause()
    if (player.stamina <= 0) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log(`You come to and are told by the GNOME to try again. You chose the wrong gems last time, so you won't that combination again.\n`)
      const options = [
        `A: ${chalk.green('Emerald')}     B: ${chalk.white('Diamond')}     C: ${chalk.blue('Sapphire')}`,
        `A: ${chalk.white('Diamond')}     B: ${chalk.blue('Sapphire')}    C: ${chalk.green('Emerald')}`,
        `A: ${chalk.blue('Sapphire')}    B: ${chalk.green('Emerald')}     C: ${chalk.white('Diamond')}`,
        `A: ${chalk.green('Emerald')}     B: ${chalk.blue('Sapphire')}    C: ${chalk.white('Diamond')}`,
        `A: ${chalk.white('Diamond')}     B: ${chalk.green('Emerald')}     C: ${chalk.blue('Sapphire')}`,
        `A: ${chalk.blue('Sapphire')}    B: ${chalk.white('Diamond')}     C: ${chalk.green('Emerald')}`]
      const index = readlineSync.keyInSelect(options, 'Decide which gems you will place in the labelled slots:', { cancel: false })
      switch (index) {
        case 0:
          return 16
        case 1:
          return 392
        case 2:
          return 177
        case 3:
          return 287
        case 4:
          return 132
        case 5:
          return 249
      }
    }
  },
  room393: () => {
    console.log('\x1Bc')
    console.log('You enter a cold room divided by a deep chasm. A rope is stretched taut across the chasm to the far side, where a magnificent winged helmet rests on top of a pole.\n')
    const options = ['Walk across the tightrope', 'Return to the tunnel to continue north']
    const index = readlineSync.keyInSelect(options, "What do you wish to do?", { cancel: false })
    switch (index) {
      case 0:
        return 274
      case 1:
        return 291
    }
  },
  room394: (player) => {
    console.log('\x1Bc')
    console.log('You smash the glass with the hilt of your sword, making a hole big enough to climb through. Immediately the GIANT INSECTS start swarming and jumping towards you. Wasting no time, you clamber into the room, grabbing one of the lit torches to defend yourself. The fire keeps most of the INSECTS at bay, but by the time you have snatched the crown and climbed back into the corridor, some will certainly have stung you.\n')
    readlineSync.keyInPause()
    const stings = (rollDie(1) + 2)
    console.log('\x1Bc')
    console.log(`You have been stung ${stings} times.\n`)
    const alive = statChange(player, 'stamina', (stings * -1))
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      console.log('\x1Bc')
      console.log(`The GIANT INSECTS do not chase you, preferring the bright light of the room they are in. You examine the crown, and see with disgust that it is merely painted iron, and the 'diamond' is just glass and totally worthless. You throw it on the ground in a rage and wonder which way to go next.\n`)
      const options = ['Head west', 'Return to the junction to head north']
      const index = readlineSync.keyInSelect(options, "Where do you wish to go?", { cancel: false })
      switch (index) {
        case 0:
          return 59
        case 1:
          return 14
      }
    }
  },
  room395: (player) => {
    console.log('\x1Bc')
    console.log('On hearing the noise of your scabbard, one of the TROGLODYTES raises the alarm. You stand up and run as fast as you can through the cavern. One of their bowmen lets fly an arrow as you run. It pierces your shoulder with deadly accuracy.\n')
    const alive = statChange(player, 'stamina', -3)
    readlineSync.keyInPause()
    if (!alive) {
      return -1
    } else {
      return 259
    }
  },
  room396: () => {
    console.log('\x1Bc')
    console.log(`You make the rope into a lasso, whirl it above your head and throw it at the idol's head, smiling happily as it falls around its neck. You then tighten the noose and start to climb, hauling yourself up the rope. You are soon at the top of the idol, sitting on the bridge of its nose and holding on to the rope. You draw your sword and wonder which jewelled eye to prise out first.\n`)
    const options = ['Prise out the left eye', 'Prise out the right eye']
    const index = readlineSync.keyInSelect(options, "Which eye will you prise out?", { cancel: false })
    switch (index) {
      case 0:
        return 151
      case 1:
        return 34
    }
  },
  room397: (player) => {
    console.log('\x1Bc')
    console.log('The liquid is a magical potion which will enable you to detect hidden traps.\n')
    if (!player.abilities.blackBookRead) {
      statChange(player, 'luck', 2)
      player.abilities.blackBookRead = true
      player.abilities.trapDetection = true
    }
    readlineSync.keyInPause()
    console.log('\x1Bc')
    if (player.abilities.redBookRead) {
      console.log('You must continue north with Throm.\n')
      readlineSync.keyInPause()
      return 369
    } else {
      const options = ['Open the red book', 'Continue north with Throm']
      const index = readlineSync.keyInSelect(options, "What do you want to do?", { cancel: false })
      switch (index) {
        case 0:
          return 52
        case 1:
          return 369
      }
    }
  },
  room398: () => {
    console.log('\x1Bc')
    console.log(`Although you cannot see any visible trap, you have a strong feeling that the chest contains a hidden danger. The Potion of Trap Detection is working well. You stand to one side of the chest and lift the lid with your sword, holding it at arm's length. As the lid rises, an iron ball hanging on a cord swings back and breaks a glass capsule fixed inside the lid, instantly releasing a gas. Fortunately, you have time to jump back without inhaling the poisonous fumes. Once the gas has cleared, you walk back to the chest and look inside it. There is a pendant chain lying in the bottom, but somebody has taken the stone from its setting. You feel so annoyed that you throw the chain on to the floor and storm out of the room up the tunnel.\n`)
    readlineSync.keyInPause()
    return 230
  },
  room399: (player) => {
    console.log('\x1Bc')
    console.log('The bread contains secret elven healing herbs.\n')
    statChange(player, 'stamina', 3)
    player.inv.mirror++
    player.inv.boneCharm++
    console.log('Feeling sad yet strong, you pack away the mirror and the charm and leave the cavern to head NORTH.\n')
    readlineSync.keyInPause()
    return 192
  },
  room400: (player) => {
    console.log('\x1Bc')
    console.log('As soon as you appear at the tunnel exit, a large crowd of people begins to cheer and shout. You walk down a path lined with jubilant people towards a small rostrum, and there, sitting under a colourful bamboo umbrella, is Baron Sukumvit. He looks astonished, as if he never expected anybody to come through his Deathtrap Dungeon alive. Now the secret of Fang is known. As the Baron rises from his chair, you climb the steps to the rostrum, bow down before him and watch as his cold eyes stare at you in utter disbelief. You smile grimly as he offers you his outstretched hand. To the deafening noise of the cheering people of Fang, Baron Sukumvit opens the chest containing your prize of ' + chalk.yellow.bold('10,000 Gold Pieces') + '. Then he places a laurel crown on your head and proclaims you the Champion of Deathtrap Dungeon.\n')
    player.gold += 10000
    console.log(chalk.black.bgYellow(`\nYou now have ${player.gold} gold.\n`))
    readlineSync.keyInPause()
    return -2
  }
}
const selectedRoom = index => rooms[`room${index}`]

const getRoom = (room, player) => {
  let choice = 0
  switch (room) {
    case -2:
      choice = rooms.winner(player)
      break
    case -1:
      choice = rooms.gameover(player)
      break
    case 0:
      choice = rooms.room0(player)
      break
    default:
      choice = selectedRoom(room)(player)
  }
  return choice
}

module.exports = {
  getRoom,
  rooms
}
