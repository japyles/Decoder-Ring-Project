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

describe("caesar", () => {
    it('should conserve spaces when present in input', () => {

        const expected = 'ibqqz 24ui cjsuiebz, szboo!';
        const actual = caesar('Happy 24th Birthday, Ryann!');
        expect(actual).to.equal(expected);
    });
});

describe("caesar", () => {
    it('should conserve numbers when present in input', () => {

        const expected = 'ibqqz 24ui cjsuiebz, szboo!';
        const actual = caesar('Happy 24th Birthday, Ryann!');
        expect(actual).to.equal(expected);
    });
});

describe("caesar", () => {
    it('should conserve special symbols when present in input', () => {

        const expected = 'ibqqz 24ui cjsuiebz, szboo!';
        const actual = caesar('Happy 24th Birthday, Ryann!');
        expect(actual).to.equal(expected);
    });
});

