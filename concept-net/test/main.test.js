const exec = require('child_process').exec;
const axios = require('axios');

const data = {};
jest.mock('axios');
axios.get.mockResolvedValue({data});

describe('concept-net test', () => {
    test('should log usage info if argument is missing', async (done) => {
        await exec('node ./concept-net/main.js', (err, stdout, stderr) => {
            expect(err).toBeFalsy();
            expect(stderr).toEqual('');
            expect(stdout).toContain('Required argument is missing');
            done();
        });
    });

    test('should NOT log usage when given argument', (done) => {
        exec('node ./concept-net/main.js ai', (err, stdout, stderr) => {
            expect(err).toBeFalsy();
            expect(stderr).toEqual('');
            expect(stdout).not.toContain('Required argument is missing');
            done();
        });
    });
});
