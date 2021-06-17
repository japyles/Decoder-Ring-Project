const substitution = require("../src/substitution");
const expect = require("chai").expect; 

// WHEN ENCODE === true
describe("substitution", () => {
    it("should return 'jrm tpuys ohlif clb kpand lzmh jrm wxve qlg' when encode is equal to true", () => {

        const expected = 'jrm tpuys ohlif clb kpand lzmh jrm wxve qlg';
        const actual = substitution('The quick brown fox jumps over the lazy dog', 'xoyqmcgrukswaflnthdjpzibev');
        expect(actual).to.equal(expected);
    });
});

// WHEN ENCODE === false 
describe("substitution", () => {
    it("should return 'The quick brown fox jumps over the lazy dog' when encode is equal to false", () => {

        const expected = 'The quick brown fox jumps over the lazy dog';
        const actual = substitution('jrm tpuys ohlif clb kpand lzmh jrm wxve qlg', 'xoyqmcgrukswaflnthdjpzibev', false);
        expect(actual).to.equal(expected);
    });
});