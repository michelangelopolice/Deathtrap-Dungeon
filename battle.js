module.exports = function battle(player,monster) {
    console.log(`\x1Bc`);
    console.log(`You encounter a ${monster.type}!   SKILL: ${monster.skill}  STAMINA: ${monster.stamina}\n`);
    readlineSync.keyInPause();
    while(player.stamina > 0 && monster.stamina > 0){
        console.log(`\x1Bc`);
        console.log(`${monster.type}    SKILL: ${monster.skill} STAMINA: ${monster.stamina}`);
        console.log(`${player.name}     SKILL: ${player.skill}  STAMINA: ${player.stamina}  LUCK: ${player.luck}\n`)
        let monsterAttack = rollDie(2) + monster.skill;
        let playerAttack = rollDie(2) + player.skill;
        console.log(monster.type + `'s attack is: ` + monsterAttack);
        console.log(player.name + `'s attack is: ` + playerAttack + `\n`);
        if (monsterAttack > playerAttack) {
            player.stamina -= 2;
            console.log(`You got hit! Your health is now: ${player.stamina}\n`);
        }
        else if (playerAttack > monsterAttack) {
            monster.stamina -= 2;
            console.log(`You hit the ${monster.type} It's stamina is now: ${monster.stamina}\n`);
        }
        else {
            console.log(`You both miss!\n`);
        }
        readlineSync.keyInPause();
    }
    if (player.stamina <=0) {
        console.log(`\x1Bc`);
        console.log(`${player.name} died! GAME OVER!\n`);
        readlineSync.keyInPause();
        console.log(`\x1Bc`);
    }
    else {
        console.log(`\x1Bc`);
        console.log(`${monster.type} was defeated! ${player.name} WINS!\n`);
        readlineSync.keyInPause();
    }
}