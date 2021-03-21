
const usage = `Required argument is missing.
Usage:
> node ./concept-net/main.js <searchTerm>

Examples:
> node ./concept-net/main.js "sausage"`;


if (process.argv.length < 3) {
    console.log(usage);
    process.exit(0);
}
const term = process.argv[2];

const doProcess = require('./process');
console.log(doProcess(term));
