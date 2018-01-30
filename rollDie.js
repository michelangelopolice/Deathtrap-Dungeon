module.exports = function (number) {
  let result = 0
  for (let i = 0; i < number; i += 1) {
    result += Math.floor(Math.random() * 6) + 1
  }
  return result
}
