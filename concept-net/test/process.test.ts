const doProcess = require("../process");
const axios = require("axios");
const data = require("./data/ai");

jest.mock("axios");
axios.get.mockResolvedValue({data});

describe("concept-net processing", () => {
    test("should return empty net when no results are found", async () => {
        const result = await doProcess("unknown");
        expect(result).toEqual([]);
    });

    test("should return right value", async () => {
        const result = await doProcess("ai");
        expect(result).toEqual([
            'artificial intelligence',
            'a term',
            'semisolid',
            'musical artist',
            'writer'
        ]);
    });
});
