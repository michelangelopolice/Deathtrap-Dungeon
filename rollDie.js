module.exports = function (number) {
    let result = 0;
    for(i=0; i<number; i++) {
         result += Math.floor(Math.random() * 6) + 1;
    }
    return result;
}