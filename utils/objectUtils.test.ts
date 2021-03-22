import {filterDuplicates} from './objectUtils';

const testData = {
    ai: [
        {endLabel: 'artificial intelligence', weight: 2},
        {endLabel: 'artificial intelligence', weight: 2},
        {endLabel: 'artificial intelligence', weight: 2},
        {endLabel: 'a term', weight: 1},
        {endLabel: 'semisolid', weight: 1},
        {endLabel: 'a term', weight: 1},
        {endLabel: 'semisolid', weight: 1},
        {endLabel: 'a term', weight: 1},
        {endLabel: 'semisolid', weight: 1},
        {endLabel: 'musical artist', weight: 0.5},
        {endLabel: 'writer', weight: 0.5},
        {endLabel: 'musical artist', weight: 0.5},
        {endLabel: 'writer', weight: 0.5},
        {endLabel: 'musical artist', weight: 0.5},
        {endLabel: 'writer', weight: 0.5}
    ],
    agi: [
        {endLabel: 'ai', weight: 1},
        {endLabel: 'ai', weight: 1},
        {endLabel: 'ai', weight: 1}
    ],
    asi: [
        {endLabel: 'ai', weight: 1},
        {endLabel: 'ai', weight: 1},
        {endLabel: 'ai', weight: 1}
    ]
};

const expectedData = {
    ai: [
        {endLabel: 'artificial intelligence', weight: 2},
        {endLabel: 'a term', weight: 1},
        {endLabel: 'semisolid', weight: 1},
        {endLabel: 'musical artist', weight: 0.5},
        {endLabel: 'writer', weight: 0.5}
    ],
    agi: [{endLabel: 'ai', weight: 1}],
    asi: [{endLabel: 'ai', weight: 1}]
}

describe("objectUtils test", () => {
    test("should return array without duplicates", () => {
        for (const [key, value] of Object.entries(testData)) {
            testData[key] = filterDuplicates(value);
        }
        expect(testData).toEqual(expectedData);
    });
});



