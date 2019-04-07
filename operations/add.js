module.exports = (...args) =>
{
    const result = args.reduce((acc, val) => {
        return acc += Number(val);
    }, 0);
    return result;
}