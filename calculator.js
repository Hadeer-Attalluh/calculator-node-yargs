const calc = require('./operations/index');
const yargs = require('yargs');

const coerceAndValidateOperands = (args) => {
    let operands = args.map(Number);
    if (operands.some(isNaN)) throw new Error('operands must be number')
    return operands;
};
yargs.array('add')
    .array('sub')
    .array('div')
    .array('mult')
    .array('reminder')
    .coerce({
        add: coerceAndValidateOperands,
        sub: coerceAndValidateOperands,
        div: coerceAndValidateOperands,
        mult: coerceAndValidateOperands,
        reminder: coerceAndValidateOperands,
    });

for (var operation in calc) {
    if (yargs.argv.hasOwnProperty(operation)) {
        debugger;
        try {
            console.log(calc[operation](...yargs.argv[operation]));
        }
        catch (e) {
            console.log(e);
        }
    }
}


// const pattern = /[0-9]/g;
// let valid = true;
// const params = process.argv.slice(2);

// const operationIndex = params.findIndex(o => o.startsWith("--"));
// let [operation] = params.splice(operationIndex, 1);
// operation = operation.slice(2);

// const operands = params;
// operands.map(n => {
//     if (isNaN(Number(n))) {
//         valid = false;
//     }
// });
// if (valid)
//     console.log(calc[operation](...operands));
// else
// console.log('operands must be numbers');
