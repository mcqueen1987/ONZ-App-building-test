const { DataUtils } = require("../dataUtils");
const sampleData = require("./data/example");

let data = null;

beforeAll(() => {
    data = new DataUtils();
    data.addData(sampleData);
});

afterAll(() => {
    data = null;
});

describe("exampleData test", () => {
    test("should define getTerm", () => {
        expect(typeof data.getTerm).toEqual("function");
        const result = data.getTerm("sample");
        expect(result).toEqual(["example"]);
    });

    test("should return targets in order of weight", () => {
        const result = data.getTerm("example");
        // console.log(result);
        expect(result.length).toBe(2);
        //lowest weight last
        expect(result).toEqual([ 'information', 'admonition' ]);
    });
});
