//main version
const usageInfo = `Required argument is missing or invalidate.
Usage:
> node main.js <searchTerm> [<app-name>]

Examples:
> node main.js "sausage" concept-net
> node main.js "AI" > output.json
> npm run concept-net "testing"
`;

const processFile = process.argv[3];
// todo hard coding app name now, will refactor when more app added in future
if (process.argv.length < 3 || processFile !== 'concept-net') {
	console.log(usageInfo);
	process.exit(0);
}

const term = process.argv[2];
let processPath = './concept-net/process';

const doProcess = require(processPath);
const result = doProcess(term);
if (typeof result.then === 'function') {
	result.then(res => console.log(JSON.stringify(res.json, null, 2)));
} else {
	console.log(JSON.stringify(result.json, null, 2))
}

