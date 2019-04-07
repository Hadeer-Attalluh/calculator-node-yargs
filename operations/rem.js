module.exports = (...args) => {
    let result = null;
    let divisible = true;
    Number(args[1]) == 0 ? divisible = false : divisible = true;
    if (divisible) {
        result = args[0] % args[1];
    }
    return result;
}