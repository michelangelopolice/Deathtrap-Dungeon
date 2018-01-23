const rollDie = require(`./rollDie`);
let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
let total = 0;
for (let i = 0; i < 100000; i++) {    
    let roll = rollDie(1);
    console.log(roll);
    if (roll == 1) {
        one++;
    }
    else if (roll == 2) {
        two++;
    }
    else if (roll == 3) {
        three++;
    }
    else if (roll == 4) {
        four++;
    }
    else if (roll == 5) {
        five++;
    }
    else if (roll == 6) {
        six++;
    }
    else {
        console.log(`Something went wrong.\n`);
    }
    total++;
}
let onepercent = ((one/total) * 100).toPrecision(5);
let twopercent = ((two/total) * 100).toPrecision(5);
let threepercent = ((three/total) * 100).toPrecision(5);
let fourpercent = ((four/total) * 100).toPrecision(5);
let fivepercent = ((five/total) * 100).toPrecision(5);
let sixpercent = ((six/total) * 100).toPrecision(5);
console.log(`Times Rolled 1: ${one}\t(${onepercent}%)\nTimes Rolled 2: ${two}\t(${twopercent}%)\nTimes Rolled 3: ${three}\t(${threepercent}%)\nTimes Rolled 4: ${four}\t(${fourpercent}%)\nTimes Rolled 5: ${five}\t(${fivepercent}%)\nTimes Rolled 6: ${six}\t(${sixpercent}%)\n`);