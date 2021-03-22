const { DataUtils } = require("../dataUtils");
const sampleData = require("./data/ai");

describe("aiData test", () => {
    test("should return targets in order of weight", () => {
        const data = new DataUtils();
        data.addData(sampleData);
        const result = data.getTerm("ai");
        // console.log(result);
        expect(result.length).toBe(5);
        expect(result).toEqual([
            'artificial intelligence',
            'a term',
            'semisolid',
            'musical artist',
            'writer'
        ]);
    });
});



