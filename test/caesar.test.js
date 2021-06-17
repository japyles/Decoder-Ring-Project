const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it('should return false if shift is less than -25', () => {

        const expected = false;
        const actual = caesar('Happy 24th Birthday, Ryann!', -27, encode=true);
        expect(actual).to.equal(expected);
    });
});

describe("caesar", () => {
    it('should return false if shift is greater than 25', () => {

        const expected = false;
        const actual = caesar('Happy 24th Birthday, Ryann!', 27, encode=true);
        expect(actual).to.equal(expected);
    });
});

describe("caesar", () => {
    it('should return false if shift equals 0', () => {

        const expected = false;
        const actual = caesar('Happy 24th Birthday, Ryann!', 0, encode=true);
        expect(actual).to.equal(expected);
    });
});


// TEST FOR WHEN ENCODE=TRUE 
describe("caesar", () => {
    it('should conserve spaces when present in input', () => {

        const expected = 'ibqqz 24ui cjsuiebz, szboo!';
        const actual = caesar('Happy 24th Birthday, Ryann!', 1, encode=true);
        expect(actual).to.equal(expected);
    });
});

describe("caesar", () => {
    it('should conserve numbers when present in input', () => {

        const expected = 'ibqqz 24ui cjsuiebz, szboo!';
        const actual = caesar('Happy 24th Birthday, Ryann!', 1, encode=true);
        expect(actual).to.equal(expected);
    });
});

describe("caesar", () => {
    it('should conserve special symbols when present in input', () => {

        const expected = 'ibqqz 24ui cjsuiebz, szboo!';
        const actual = caesar('Happy 24th Birthday, Ryann!', 1, encode=true);
        expect(actual).to.equal(expected);
    });
});


// TESTS FOR WHEN ENCODE=FALSE 
describe("caesar", () => {
    it('should conserve spaces when present in input', () => {

        const expected = 'happy 24th birthday, ryann!';
        const actual = caesar('ibqqz 24ui cjsuiebz, szboo!', 1, encode=false);
        expect(actual).to.equal(expected);
    });
});

describe("caesar", () => {
    it('should conserve numbers when present in input', () => {

        const expected = 'happy 24th birthday, ryann!';
        const actual = caesar('ibqqz 24ui cjsuiebz, szboo!', 1, encode=false);
        expect(actual).to.equal(expected);
    });
});

describe("caesar", () => {
    it('should conserve special symbols when present in input', () => {

        const expected = 'happy 24th birthday, ryann!';
        const actual = caesar('ibqqz 24ui cjsuiebz, szboo!', 1, encode=false);
        expect(actual).to.equal(expected);
    });
});


