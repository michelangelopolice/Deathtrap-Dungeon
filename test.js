const readlineSync = require('readline-sync');

const options = ['Open Box', 'Continue On'];
const index = readlineSync.keyInSelect(options, 'What do you do?');

if (index === 0) {
  console.log('You open the box.');
} else if (index === 1) {
  console.log('You ignore the box and carry on.');
} else {
  console.log('You give up and die.');
}
