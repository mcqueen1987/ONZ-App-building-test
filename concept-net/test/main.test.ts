const exec = require('child_process').exec;
const axios = require('axios');

const data = {};
jest.mock('axios');
axios.get.mockResolvedValue({data});

describe('concept-net test', () => {
    test('should log usage info if argument is missing', async (done) => {
        await exec('node ./concept-net/main.ts', (err, stdout, stderr) => {
            expect(err).toBeFalsy();
            expect(stderr).toEqual('');
            expect(stdout).toContain('Required argument is missing');
            done();
        });
    });
});
