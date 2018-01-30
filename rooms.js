const readlineSync = require('readline-sync')
const battle = require('./battle')

// test monster object
const manticoreTest = {
  type: 'MANTICORE',
  skill: 11,
  stamina: 11
}

const rooms = {
  gameover: () => {
    console.log('\x1Bc')
    console.log('GAME OVER.\n')
    readlineSync.keyInPause()
    return 'death'
  },
  room0: () => {
    console.log('\x1Bc')
    console.log('Despite its name, Fang was an ordinary small town in the Northern Province of Chiang Mai. Situated on the banks of the River Kok it made a convenient stop over for river traders and passengers throughout most of the year. A few barges, rafts and sometimes even a large sail boat could usually be found moored at Fang. But all that was long ago, before the creation of the Trial of Champions. Now once a year the river is crammed with boats as people arrive from hundreds of miles around, hoping to witness the breaking of an ancient tradition in Fang and see a victor in the Trial of Champions.\n')
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
    console.log('This is Room 2.\n')
    readlineSync.keyInPause()
    return 4
  },
  room3: () => {
    console.log('\x1Bc')
    console.log('This is Room 3.\n')
    readlineSync.keyInPause()
    return 4
  },
  room4: () => {
    console.log('\x1Bc')
    console.log('This is Room 4.\n')
    readlineSync.keyInPause()
    return -1
  },
  room66: (player) => {
    console.log('\x1Bc')
    console.log('You see a MANTICORE! Prepare for battle.')
    readlineSync.keyInPause()
    const outcome = battle(player, manticoreTest)
    switch (outcome) {
      case 0:
        return -1
      case 1:
        console.log(`Well done. Your STAMINA is now at: ${player.stamina}`)
        readlineSync.keyInPause()
        break
      default:
        console.log('error')
        break
    }
    console.log('you continue on')
    readlineSync.keyInPause()
    return -1
  },
  room270: (player) => {
    console.log('\x1Bc')
    console.log(`You start with ${player.gold} gold.`)
    console.log('The lid of the box lifts off easily. Inside you find two Gold Pieces and a note written on a small piece of parchment addressed to you. After placing the gold in your pocket, you read the message, which says: \'Well done. At least you have the sense to stop and take advantage of the token aid given to you. Now I can advise you that you will need to find and use several items if you hope to pass triumphantly through my Deathtrap Dungeon. Signed Sukumvit.\' Memorising the advice on the note, you tear it into tiny pieces and continue north along the tunnel.\n')
    player.gold += 2
    readlineSync.keyInPause()
    console.log(`You now have ${player.gold} gold.`)
    readlineSync.keyInPause()
    return 66
  }
}
const selectedRoom = index => rooms[`room${index}`]

const getRoom = (room, player) => {
  let choice = 0
  switch (room) {
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
