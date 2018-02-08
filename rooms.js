const readlineSync = require('readline-sync')
const chalk = require('chalk')
const rollDie = require('./rollDie')
const statChange = require('./statChange')
const testYourLuck = require('./testYourLuck')
const battle = require('./battle')
const { Manticore, Giantfly, Minotaur, Caveman, Hobgoblin } = require('./monsters')

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
    const index = readlineSync.keyInSelect(options, 'What do you do?')
    switch (index) {
      case 0:
        return 270
      case 1:
        return 66
      default:
        return 1
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
    console.log(`The Gnome shakes his head and says, 'I am afraid you have failed the Trial of Champions. Baron Sukumvit's Deathtrap Dungeon will keep its secrets for another year, as you will not be allowed to leave here. You are appointed my servant for the rest of your days, to prepare and modify the dungeon for future contestants. Perhaps in another life you will succeed . . .\n`)
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
    const index = readlineSync.keyInSelect(options, 'What do you do?')
    switch (index) {
      case 0:
        return 158
      case 1:
        return 375
      default:
        return 9
    }
  },
  room10: (player) => {
    console.log('\x1Bc')
    console.log('Still running as fast as you can, you reach into your backpack and pull out the wooden tube. You plan to lie under the surface of the water, breathing through the tube. With luck, the TROGLODYTES will assume that you will be swept to your death down-river as the torrent disappears into the depths of the mountain. You seize the tube between your teeth and lower yourself into the water. Holding onto one of the underwater bridge pillars, you keep perfectly still for ten minutes. When you finally think the Troglodytes have gone, you rise to the surface and look around.')
    readlineSync.keyInPause()
    console.log('\x1Bc')
    player.provisions = 0
    console.log('There is nobody to be seen, so you climb out of the river and cross the bridge to the northern bank. Any remaining Provisions you may have are now sodden and inedible. You continue to walk through the vast cavern until at least you see a tunnel in the far wall. You walk down it until you come to a heavy wooden door, which is locked.')
    readlineSync.keyInPause()
    if (player.inv.ironKey === 1) {
      return 86
    } else {
      return 276
    }
  },
  room11: (player) => {
    console.log('\x1Bc')
    player.inv.emeraldEye++
    console.log(`You look down and see the crumpled bodies of the FLYING GUARDIANS lying motionless on the floor. You start to prise out the idol's ` + chalk.green('emerald') + ` eye with the tip of your sword. At last it comes free, and you are surprised by its weight. Hoping that it may be of use later, you put it in your backpack.\n`)
    const options = ['Prise out right eye', 'Climb down the idol']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do next?')
    switch (index) {
      case 0:
        return 140
      case 1:
        return 46
      default:
        return 11
    }
  },
  room12: () => {
    console.log('\x1Bc')
    console.log(`The door opens into a large, candle-lit room filled with the most extraordinary lifelike statues of knights and warriors. A white-haired old man dressed in tattered rags suddenly jumps out from behind one of the statues and starts to giggle. Though he looks like a fool, the sparkle in his eyes makes you think there is more to him than is apparent. In a high-pitched voice he says, 'Oh good, another stone for my garden. I'm glad you havecome to join your friends. Now, I'm a fair man and so I'll ask you a question. If you answer correctly, I'll let you go free - but if your answer is wrong, I'll turn you to stone!' He starts to chuckle again, obviously pleased with your arrival.\n`)
    const options = ['Wait for his question', 'Attack him with your sword', 'Make a run for the door']
    const index = readlineSync.keyInSelect(options, 'What do you do?')
    switch (index) {
      case 0:
        return 382
      case 1:
        return 195
      case 2:
        return 250
      default:
        return 12
    }
  },
  room13: () => {
    console.log('\x1Bc')
    console.log('The tunnel makes a sudden turn to the left and heads NORTH for as far as you can see. The footprints you are following start to peter out as the tunnel becomes gradually drier. Soon you are beyond the dripping roof and the pools on the floor. You notice the air becoming hotter and you find yourself panting even though you are walking quite slowly. In a small recess on the left-hand wall you see a section of bamboo standing on its end. Lifting it down, you see it is filled with a clear liquid. Your throat is painfully dry and you feel a little dizzy from the heat in the tunnel.\n')
    const options = ['Drink the liquid', 'Do not risk drinking the liquid and continue NORTH']
    const index = readlineSync.keyInSelect(options, 'What will you do?')
    switch (index) {
      case 0:
        return 147
      case 1:
        return 182
      default:
        return 13
    }
  },
  room14: () => {
    console.log('\x1Bc')
    console.log('The tunnel leads into a dark chamber covered in thick cobwebs. Clawing your way through them, you trip over a wooden casket.\n')
    const options = ['Try and open the casket', 'Continue NORTH']
    const index = readlineSync.keyInSelect(options, 'What do you do?')
    switch (index) {
      case 0:
        return 157
      case 1:
        return 310
      default:
        return 14
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
      const options = ['Emerald\tDiamond\tSapphire', 'Diamond\tSapphire\tEmerald', 'Sapphire\tEmerald\tDiamond', 'Emerald\tSapphire\tDiamond', 'Diamond\tEmerald\tSapphire', 'Sapphire\tDiamond\tEmerald']
      const index = readlineSync.keyInSelect(options, 'What do you choose?')
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
        default:
          return 16
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
    const index = readlineSync.keyInSelect(options, 'What will you do?')
    switch (index) {
      case 0:
        return 63
      case 1:
        return 184
      case 2:
        return 311
      default:
        return 22
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
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?')
    switch (index) {
      case 0:
        return 324
      case 1:
        return 188
      default:
        return 24
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
    console.log('You try to force the point of your sword under the ' + chalk.green('emerald') + ' eye. Much to your surprise, the ' + chalk.green('emerald') + 'shatters on contact, releasing a jet of poisonous gas straight into your face. The gas knocks you out and you release the rope, bounce down the idol and crash on to the stone floor. Your adventure ends here.\n')
    readlineSync.keyInPause()
    return -1
  },
  room35: () => {
    console.log('\x1Bc')
    console.log('The tunnel continues WEST for several hundred metres, finally ending at some steps leading up to a closed trapdoor. You climb the steps slowly, hearing muffled voices above you. In the dim light you can see that the trapdoor is not locked.\n')
    const options = ['Knock on the trapdoor', 'Burst through the trapdoor with your sword drawn']
    const index = readlineSync.keyInSelect(options, 'What do you do?')
    switch (index) {
      case 0:
        return 333
      case 1:
        return 124
      default:
        return 35
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
    console.log('The passage opens out into a wide cavern which is darker but much drier. Ahead you see the footprints gradually fade, then disappear. There is a large idon in the centre of the cavern, standing approximately six metres high. It has jewelled eyes, each as big as your fist. There are two giant stuffed bird-like creatures standing on either side of the idol.\n')
    const options = ['Climb the idol to take the jewels', 'Walk through the cavern to the tunnel in the opposite wall']
    const index = readlineSync.keyInSelect(options, 'What do you do?')
    switch (index) {
      case 0:
        return 351
      case 1:
        return 239
      default:
        return 37
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
    const index = readlineSync.keyInSelect(options, 'What do you do?')
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
      default:
        return 39
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
  room41: () => {
    console.log('\x1Bc')
    console.log('You walk slowly over to the alcove, carefully checking the floor for any more hidden traps. You see that the goblet contains a sparkling liquid.\n')
    const options = ['Drink the red liquid', 'Leave the goblet and walk back to search the BARBARIAN', 'Leave the chamber to continue WEST']
    const index = readlineSync.keyInSelect(options, 'What will you do?')
    switch (index) {
      case 0:
        return 98
      case 1:
        return 126
      case 2:
        return 83
      default:
        return 41
    }
  },
  room42: () => {
    console.log('\x1Bc')
    console.log('The cobra\'s fangs sink deep into your wrist and you feel its poison starting to creep through your body.\n ')
    const alive = statChange(player, 'stamina', -5)
    readlineSync.keyInPause()
    if(!alive) {
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
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?')
    switch (index) {
      case 0:
        return 200
      case 1:
        return 316
      default:
        return 43
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
    const alive = statChange(player, 'stamina' -4)
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
    const index = readlineSync.keyInSelect(options, 'What would you rather do?')
    switch (index) {
      case 0:
        return 205
      case 1:
        return 241
      default:
        return 49
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
  room52: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room53: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room54: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room55: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room56: () => {
    console.log('\x1Bc')
    console.log('You see that the obstruction is a large, brown, boulder-like object. You touch it with your hand and are surprised to find that it is soft and spongy.\n')
    const options = ['Climb over it', 'Slice it open with your sword']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?')
    switch (index) {
      case 0:
        return 373
      case 1:
        return 215
      default:
        return 56
    }
  },
  room57: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room58: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room59: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room60: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room61: () => {
    console.log('\x1Bc')
    console.log('Despite the terrible ringing sound in your ears, you hear footsteps coming down the tunnel. Your loud screams have attracted a tunnel guardian. Standing over you is a HOBGOBLIN. His face bears a sickly smile as he presses the point of his sword against your neck. You are unable to defend yourself and prevent the HOBGOBLIN from running you through. Your adventure ends here.\n')
    readlineSync.keyInPause()
    return -1
  },
  room62: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room63: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room64: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room65: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room66: () => {
    console.log('\x1Bc')
    console.log('After walking down the tunnel for a few minutes, you come to a junction. A white arrow painted on one wall points WEST. On the floor you can see wet footprints made by those who entered before you. It is hard to be sure, but it looks as though three of them followed the direction of the arrow, while one decided to go EAST.\n')
    const options = ['Head WEST', 'Head EAST']
    const index = readlineSync.keyInSelect(options, 'Which way do you choose?')
    switch (index) {
      case 0:
        return 293
      case 1:
        return 119
      default:
        return 66
    }
  },
  room67: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room68: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room69: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room70: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room71: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room72: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room73: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room74: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room75: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room76: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room77: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room78: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room79: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room80: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room81: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room82: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room83: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room84: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room85: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room86: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room87: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room88: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room89: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room90: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room91: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room92: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room93: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room94: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room95: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room96: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room97: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room98: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room99: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room100: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room101: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room102: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room103: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room104: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room105: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room106: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room107: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room108: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room109: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room110: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room111: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room112: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room113: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room114: () => {
    console.log('\x1Bc')
    console.log('The CAVEMAN is wearing a leather wristband with four small rats\' skulls hanging from it.\n')
    const options = ['Put it on your own wrist', 'Set off NORTH again']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?')
    switch (index) {
      case 0:
        return 336
      case 1:
        return 298
      default:
        return 114
    }
  },
  room115: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room116: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room117: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room118: () => {
    console.log('\x1Bc')
    console.log('')
  },
  room119: () => {
    console.log('\x1Bc')
    console.log('Ahead you can see a large obstruction on the tunnel floor, although it is too dark to make out exactly what it is. The wet footprints you have been following carry on towards the obstruction.\n')
    const options = ['Continue EAST', 'Go back to the junction and head WEST']
    const index = readlineSync.keyInSelect(options, 'Which would you rather do?')
    switch (index) {
      case 0:
        return 56
      case 1:
        return 293
      default:
        return 119
    }
  },
  room120: () => {
    console.log('\x1Bc')
    console.log(chalk`Lying in a hole about a metre deep, you see a {bold grappling iron} and a {bold leather pouch}.\n`)
    const options = ['Reach down for them', 'Ignore them and continue NORTH']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?')
    switch (index) {
      case 0:
        return 228
      case 1:
        return 292
      default:
        return 120
    }
  },
  room121: () => {},
  room122: () => {},
  room123: () => {},
  room124: () => {},
  room125: () => {},
  room126: () => {},
  room127: () => {},
  room128: () => {},
  room129: () => {},
  room130: (player) => {
    console.log('\x1Bc')
    console.log('The HOBGOBLINS stop their fight immediately. They do not understand what you are saying and snarl at you viciously. Then they draw their short sowrds and run forward to attack you.\n')
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
        switch(outcome2) {
          case 0:
            return -1
          case 1:
            return 9
        }
    }
  },
  room131: () => {},
  room132: () => {},
  room133: () => {},
  room134: () => {},
  room135: () => {},
  room136: () => {},
  room137: () => {
    console.log('\x1Bc')
    console.log('Walking along the tunnel, you are surprised to see a large iron bell hanging down from the ceiling.\n')
    const options = ['Ring the bell', 'Walk round it and continue WEST']
    const index = readlineSync.keyInSelect(options, 'What do you do?')
    switch (index) {
      case 0:
        return 220
      case 1:
        return 362
      default:
        return 137
    }
  },
  room138: () => {},
  room139: () => {},
  room140: () => {
    console.log('\x1Bc')
    console.log('You try to force the point of your sword under the ' + chalk.green('emerald') + 'eye. Much to your surprise, it shatters on contact, releasing a jet of poisonous gas straight into your face. The gas knocks you out and you fall backwards, bouncing down the idol to land on the stone floor. Your adventure ends here.\n')
    readlineSync.keyInPause()
    return -1
  },
  room141: () => {},
  room142: () => {},
  room143: () => {},
  room144: () => {},
  room145: () => {},
  room146: () => {},
  room147: (player) => {
    console.log('\x1Bc')
    console.log('The water in the bamboo pipe is welcomingly refreshing.\n')
    statChange(player, 'stamina', 1)
    readlineSync.keyInPause()
    console.log('\x1Bc')
    player.abilities.withstandHeat++
    console.log('It also contains a magical solution which will enable you to be exposed to melting-point temperature without harm. Discarding the bamboo, you start off NORTH again in good spirits.\n')
    readlineSync.keyInPause()
    return 182
  },
  room148: () => {},
  room149: () => {},
  room150: () => {},
  room151: () => {},
  room152: () => {},
  room153: () => {},
  room154: () => {},
  room155: () => {},
  room156: () => {},
  room157: () => {},
  room158: (player) => {
    console.log('\x1Bc')
    console.log('You lift the jug to your lips and take a swig of liquid. It burns so much that you drop the jug and grab your throat in agony. You have swallowed acid!\n')
    statChange(player, 'skill', -1)
    const alive = statChange(player, 'stamina', -4)
    readlineSync.keyInPause()
    if(!alive) {
      return -1
    } else {
      return 275
    }
  },
  room159: () => {},
  room160: () => {},
  room161: () => {},
  room162: () => {},
  room163: () => {},
  room164: () => {},
  room165: () => {},
  room166: () => {},
  room167: () => {},
  room168: () => {},
  room169: () => {},
  room170: () => {},
  room171: () => {},
  room172: () => {},
  room173: () => {},
  room174: () => {},
  room175: () => {},
  room176: () => {},
  room177: () => {},
  room178: () => {},
  room179: () => {},
  room180: () => {},
  room181: () => {},
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
  room183: () => {},
  room184: () => {},
  room185: () => {},
  room186: () => {},
  room187: () => {},
  room188: () => {},
  room189: () => {},
  room190: () => {},
  room191: () => {},
  room192: () => {},
  room193: () => {
    console.log('\x1Bc')
    console.log('The acid burns through your stomach wall, eating its way into your vital organs. You collapse unconscious, never to recover. Your adventure ends here.\n')
    readlineSync.keyInPause()
    return -1
  },
  room194: () => {},
  room195: () => {},
  room196: () => {},
  room197: () => {
    console.log('\x1Bc')
    console.log('Mercifully, the temperature now starts to drop rapidly, and soon it feels almost cool again. On the left-hand side of the tunnel is a closed door. It has a small iron plate in it, which m ight possible slide open.\n')
    const options = ['Try to open the door', 'Try to slide the iron plate', 'Continue NORTH up the tunnel']
    const index = readlineSync.keyInSelect(options, 'What will you do?')
    switch (index) {
      case 0:
        return 171
      case 1:
        return 156
      case 2:
        return 326
      default:
        return 197
    }
  },
  room198: () => {},
  room199: () => {},
  room200: () => {},
  room201: () => {},
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
  room203: () => {},
  room204: () => {},
  room205: () => {},
  room206: () => {},
  room207: () => {},
  room208: () => {},
  room209: () => {},
  room210: () => {},
  room211: () => {},
  room212: () => {},
  room213: () => {},
  room214: () => {},
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
  room216: () => {},
  room217: () => {},
  room218: () => {},
  room219: () => {},
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
      const index = readlineSync.keyInSelect(options, 'What will you do?')
      switch (index) {
        case 0:
          return 61
        case 1:
          return 346
        default:
          return 220
      }
    }
  },
  room221: () => {},
  room222: () => {},
  room223: () => {},
  room224: () => {},
  room225: () => {},
  room226: () => {},
  room227: () => {},
  room228: () => {},
  room229: () => {},
  room230: () => {},
  room231: () => {
    console.log('\x1Bc')
    console.log('You find a pool behind the dead HOBGOBLINS and take great gulps of the cool water as fast as you can. This neutralises the acid and slowly you begin to recover. Still in pain, you stand up and set off NORTH.\n')
    readlineSync.keyInPause()
    return 110
  },
  room232: () => {},
  room233: () => {},
  room234: () => {},
  room235: () => {},
  room236: () => {},
  room237: () => {},
  room238: () => {},
  room239: () => {
    console.log('\x1Bc')
    console.log('ROOM 239.\n')
    readlineSync.keyInPause()
    console.log('\x1Bc')
    console.log(chalk.green(`YOU FUCKIN DIE BITCH!\n`))
    readlineSync.keyInPause()
    return -1
  },
  room240: () => {},
  room241: () => {},
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
  room243: () => {},
  room244: () => {},
  room245: () => {},
  room246: () => {},
  room247: () => {},
  room248: () => {},
  room249: () => {},
  room250: () => {},
  room251: () => {},
  room252: () => {},
  room253: () => {},
  room254: () => {},
  room255: () => {},
  room256: () => {},
  room257: () => {},
  room258: () => {},
  room259: () => {},
  room260: () => {},
  room261: () => {},
  room262: () => {},
  room263: () => {},
  room264: () => {
    console.log('\x1Bc')
    console.log('Ahead in the dim light you see two HOBGOBLINS fighting, punching and kicking each other furiously. There is a leather bag lying on the floor, and it seems to be this that they are fighting over.\n')
    const options = ['Try to talk to them', 'Attack them with your sword', 'Try to slip by them unnoticed']
    const index = readlineSync.keyInSelect(options, 'What will you do?')
    switch (index) {
      case 0:
        return 130
      case 1:
        return 51
      case 2:
        return 355
      default:
        return 264
    }
  },
  room265: () => {},
  room266: () => {},
  room267: () => {},
  room268: () => {},
  room269: () => {},
  room270: (player) => {
    console.log('\x1Bc')
    console.log('The lid of the box lifts off easily. Inside you find two Gold Pieces and a note written on a small piece of parchment addressed to you. After placing the gold in your pocket, you read the message, which says: \'Well done. At least you have the sense to stop and take advantage of the token aid given to you. Now I can advise you that you will need to find and use several items if you hope to pass triumphantly through my Deathtrap Dungeon. Signed Sukumvit.\' Memorising the advice on the note, you tear it into tiny pieces and continue north along the tunnel.\n')
    player.gold += 2
    console.log(chalk.black.bgYellow(`\nYou now have ${player.gold} gold.\n`))
    readlineSync.keyInPause()
    return 66
  },
  room271: () => {},
  room272: () => {},
  room273: () => {},
  room274: () => {},
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
  room276: () => {},
  room277: () => {},
  room278: () => {},
  room279: () => {
    console.log('\x1Bc')
    console.log('You arrive at a junction in the tunnel. A new branch leads WEST, but the wet footprints you have been following continue NORTH. You decide to keep following the footprints.\n')
    readlineSync.keyInPause()
    return 32
  },
  room280: () => {},
  room281: () => {},
  room282: () => {},
  room283: () => {},
  room284: () => {},
  room285: () => {},
  room286: () => {},
  room287: () => {},
  room288: () => {},
  room289: () => {},
  room290: () => {},
  room291: () => {},
  room292: () => {},
  room293: () => {
    console.log('\x1Bc')
    console.log('Following the three sets of wet footprints along the WEST passage of the tunnel, you soon arrive at a junction.\n')
    const options = ['Continue WEST, following two sets of footprints', 'Head NORTH, following the third set of footprints']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?')
    switch (index) {
      case 0:
        return 137
      case 1:
        return 387
      default:
        return 293
    }
  },
  room294: () => {},
  room295: () => {},
  room296: () => {},
  room297: () => {},
  room298: () => {
    console.log('\x1Bc')
    console.log('You see a backpack propped up against the tunnel wall. You wonder if it belongs to one of your rivals.\n')
    const options = ['Look inside the backpack', 'Continue NORTH']
    const index = readlineSync.keyInSelect(options, 'What do you wish to do?')
    switch (index) {
      case 0:
        return 304
      case 1:
        return 279
      default:
        return 298
    }
  },
  room299: () => {},
  room300: () => {},
  room301: () => {},
  room302: () => {},
  room303: () => {},
  room304: (player) => {
    console.log('\x1Bc')
    console.log('There is a single Gold Piece lying in the bottom of the backpack. As you reach for it, you suddenly feel a light tickling movement on the back of your hand.  You withdraw your hand slowly, trying to control your mounting panic, and are horrified to see a BLACK WIDOW SPIDER. Before you can shake it off, it sinks its poisonous fangs deep into your wrist.\n')
    const alive = statChange(player, 'stamina', -6)
    readlineSync.keyInPause()
    if(!alive) {
      return -1
    } else {
      return 20
    }
  },
  room305: () => {},
  room306: () => {},
  room307: () => {},
  room308: () => {},
  room309: (player) => {
    console.log('\x1Bc')
    console.log('You scramble frantically around the floor in search of a pool of water, but do not find one. The acid burns with a searing pain deep down in your throat.\n')
    const alive = statChange(player, 'stamina', -3)
    readlineSync.keyInPause()
    if(!alive) {
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
  room310: () => {},
  room311: () => {},
  room312: () => {},
  room313: () => {},
  room314: () => {},
  room315: () => {},
  room316: () => {},
  room317: () => {},
  room318: () => {},
  room319: () => {},
  room320: () => {},
  room321: () => {},
  room322: () => {},
  room323: () => {},
  room324: () => {},
  room325: () => {},
  room326: () => {},
  room327: () => {},
  room328: () => {},
  room329: () => {},
  room330: () => {},
  room331: () => {},
  room332: () => {},
  room333: () => {},
  room334: () => {},
  room335: () => {},
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
  room337: () => {},
  room338: () => {},
  room339: () => {},
  room340: () => {},
  room341: () => {},
  room342: () => {},
  room343: () => {},
  room344: () => {},
  room345: () => {},
  room346: () => {
    console.log('\x1Bc')
    console.log('You pull your boot off your foot and force yourself to each up and hold it against the bell. Slowly the bell stops vibrating and the pain in your body gradually eases. You manage to stand up, but you do not release your boot from the bell until it becomes completely still. You put your boot back on your foot and then continue your journey WEST.\n')
    readlineSync.keyInPause()
    return 362
  },
  room347: () => {},
  room348: () => {},
  room349: () => {},
  room350: () => {},
  room351: () => {},
  room352: () => {},
  room353: () => {},
  room354: () => {},
  room355: () => {},
  room356: () => {},
  room357: () => {},
  room358: () => {},
  room359: () => {},
  room360: () => {},
  room361: () => {},
  room362: () => {
    console.log('\x1Bc')
    console.log('The tunnel veers sharply to the right and continues NORTH for as far as you can see. You hear a tremendous commotion in the distance, growling and snarling and howling. You draw your sword and set off in the directino of the noise.\n')
    readlineSync.keyInPause()
    return 264
  },
  room363: () => {},
  room364: () => {},
  room365: () => {},
  room366: () => {
    console.log('\x1Bc')
    console.log('The temperature continues to rise steadily, far beyond the limits of human tolerance. Lying on the near-molten floor of the tunnel, you fail to regain consciousness. Your adventure ends here.\n')
    readlineSync.keyInPause()
    return -1
  },
  room367: () => {},
  room368: () => {},
  room369: () => {},
  room370: () => {},
  room371: () => {},
  room372: () => {},
  room373: () => {
    console.log('\x1Bc')
    console.log('You clamber on to the soft boulder, half expecting to be engulfed by it at any moment. Getting over it is difficult, as your limbs sink into its soft casing, but eventually you manage to struggle over it. Relieved to be back on firm ground, you head EAST.\n')
    readlineSync.keyInPause()
    return 13
  },
  room374: () => {},
  room375: (player) => {
    console.log('\x1Bc')
    console.log('Acrid smoke rises from the jug as you lower the cloth into it. The liquid is unmistakably acid. You recork the jug and place it in your backpack, hoping it may be of use later. You sheathe your sword and press on NORTHWARDS.\n')
    player.inv.acid++
    readlineSync.keyInPause()
    return 110
  },
  room376: () => {},
  room377: () => {},
  room378: () => {},
  room379: () => {},
  room380: () => {},
  room381: () => {},
  room382: () => {},
  room383: () => {},
  room384: () => {},
  room385: () => {},
  room386: () => {},
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
  room388: () => {},
  room389: () => {},
  room390: () => {},
  room391: () => {},
  room392: () => {},
  room393: () => {},
  room394: () => {},
  room395: () => {},
  room396: () => {},
  room397: () => {},
  room398: () => {},
  room399: (player) => {
    console.log('\x1Bc')
    console.log('The bread contains secret elven healing herbs.\n')
    statChange(player, 'stamina', 3)
    player.inv.mirror++
    player.inv.boneCharm++
    console.log('Feeling sad yet strong, you pack away the MIRROR and the CHARM and leave the cavern to head NORTH.\n')
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
