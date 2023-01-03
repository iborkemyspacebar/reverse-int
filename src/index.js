module.exports = function reverse (n) {
const reversedInt = parseFloat(n
    .toString()
    .split('')
    .reverse()
    .join(''));
    return reversedInt
}
