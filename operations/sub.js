module.exports = (first,...args) =>
{
    const result = args.reduce((acc, val) => {
        return acc -= Number(val);
    }, first);
    return result;
}