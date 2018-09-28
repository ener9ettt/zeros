module.exports = function getZerosCount(number) {
    var zeros = Math.floor(number / 5);
    if (zeros >= 5) return zeros + Math.floor(getZerosCount(zeros));
    return zeros;
}