module.exports = (first,...args) => {
    let result = null;
    let divisible = true;
    args.map(p => {
        if (Number(p) == 0) {
            console.log('Cannot divide by zero');
            divisible = false;
        }
    });
    if (divisible) {
        result = args.reduce((acc, val) => {
            return acc /= Number(val);
        }, first);
    }
    return result;
}

