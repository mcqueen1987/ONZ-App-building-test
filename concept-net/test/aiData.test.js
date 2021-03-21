const Data = require("../dataEntity");
const sampleData = require("./data/ai");

let data = null;

beforeAll(() => {
    data = new Data();
    data.addData(sampleData);
});

afterAll(() => {
    data = null;
});

describe("aiData test", () => {
    test("should return targets in order of weight", () => {
        const result = data.getTerm("ai");
        console.log(result);
        expect(result.length).toBe(3);
        expect(result).toEqual([ 'semisolid', 'musical artist', 'writer' ]);
    });
});



