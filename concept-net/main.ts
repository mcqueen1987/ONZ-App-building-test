
const usage = `Required argument is missing.
Usage:
> node ./concept-net/main.ts <searchTerm>

Examples:
> node ./concept-net/main.ts "sausage"`;

if (process.argv.length < 3) {
    console.log(usage);
    process.exit(0);
}

const term = process.argv[2];

const doProcess = require('./process.ts');
console.log(doProcess(term));
