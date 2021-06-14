const polybius = require("../src/polybius");
const expect = require("chai").expect;

// IF ENCODE = TRUE 
describe("polybius", () => {
    it("should return 11 if input contains an 'a'", () => {
    
        const expected = 11;
        const actual = polybius('a', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 21 if input contains a 'b'", () => {
    
        const expected = 21;
        const actual = polybius('b', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 31 if input contains a 'c'", () => {
    
        const expected = 31;
        const actual = polybius('c', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 41 if input contains a 'd'", () => {
    
        const expected = 41;
        const actual = polybius('d', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 51 if input contains an 'e'", () => {
    
        const expected = 51;
        const actual = polybius('e', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 12 if input contains an 'f'", () => {
    
        const expected = 12;
        const actual = polybius('f', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 22 if input contains a 'g'", () => {
    
        const expected = 22;
        const actual = polybius('g', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 32 if input contains an 'h'", () => {
    
        const expected = 32;
        const actual = polybius('h', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 42 if input contains an 'i'", () => {
    
        const expected = 42;
        const actual = polybius('i', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 42 if input contains a 'j'", () => {
    
        const expected = 42;
        const actual = polybius('j', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 52 if input contains a 'k'", () => {
    
        const expected = 52;
        const actual = polybius('k', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 13 if input contains an 'l'", () => {
    
        const expected = 13;
        const actual = polybius('l', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 23 if input contains an 'm'", () => {
    
        const expected = 23;
        const actual = polybius('m', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 33 if input contains an 'n'", () => {
    
        const expected = 33;
        const actual = polybius('n', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 43 if input contains an 'o'", () => {
    
        const expected = 43;
        const actual = polybius('o', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 53 if input contains an 'p'", () => {
    
        const expected = 53;
        const actual = polybius('p', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 14 if input contains a 'q'", () => {
    
        const expected = 14;
        const actual = polybius('q', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 24 if input contains an 'r'", () => {
    
        const expected = 24;
        const actual = polybius('r', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 34 if input contains an 's'", () => {
    
        const expected = 34;
        const actual = polybius('s', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 44 if input contains a 't'", () => {
    
        const expected = 44;
        const actual = polybius('t', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 54 if input contains an 'u'", () => {
    
        const expected = 54;
        const actual = polybius('u', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 15 if input contains a 'v'", () => {
    
        const expected = 15;
        const actual = polybius('v', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 25 if input contains a 'w'", () => {
    
        const expected = 25;
        const actual = polybius('w', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 35 if input contains an 'x'", () => {
    
        const expected = 35;
        const actual = polybius('x', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 45 if input contains a 'y'", () => {
    
        const expected = 45;
        const actual = polybius('y', true);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 55 if input contains a 'z'", () => {
    
        const expected = 55;
        const actual = polybius('z', true);
        expect(actual).to.equal(expected);
    });
});


// IF ENCODE = FALSE
describe("polybius", () => {
    it("should return false if the length of the input is odd", () => {
    
        const expected = false;
        const actual = polybius('abc', false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'a' if input contains an 11", () => {
    
        const expected = 'a';
        const actual = polybius(11, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'b' if input contains a 21", () => {
    
        const expected = 'b';
        const actual = polybius(21, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'c' if input contains a 31", () => {
    
        const expected = 'c';
        const actual = polybius(31, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'd' if input contains a 41", () => {
    
        const expected = 'd';
        const actual = polybius(41, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'e' if input contains a 51", () => {
    
        const expected = 'e';
        const actual = polybius(51, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'f' if input contains a 12", () => {
    
        const expected = 'f';
        const actual = polybius(12, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'g' if input contains a 22", () => {
    
        const expected = 'g';
        const actual = polybius(22, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'h' if input contains a 32", () => {
    
        const expected = 'h';
        const actual = polybius(32, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return '(i/j)' if input contains a 42", () => {
    
        const expected = '(i/j)';
        const actual = polybius(42, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'j' if input contains a 42", () => {
    
        const expected = 'j';
        const actual = polybius(42, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'k' if input contains a 52", () => {
    
        const expected = 'k';
        const actual = polybius(52, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'l' if input contains a 13", () => {
    
        const expected = 'l';
        const actual = polybius(13, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'm' if input contains a 23", () => {
    
        const expected = 'm';
        const actual = polybius(23, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'n' if input contains a 33", () => {
    
        const expected = 'n';
        const actual = polybius(33, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'o' if input contains a 43", () => {
    
        const expected = 'o';
        const actual = polybius(43, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'p' if input contains a 53", () => {
    
        const expected = 'p';
        const actual = polybius(53, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'q' if input contains a 14", () => {
    
        const expected = 'q';
        const actual = polybius(14, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'r' if input contains a 24", () => {
    
        const expected = 'r';
        const actual = polybius(24, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 's' if input contains a 34", () => {
    
        const expected = 's';
        const actual = polybius(34, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 't' if input contains a 44", () => {
    
        const expected = 't';
        const actual = polybius(44, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'u' if input contains a 54", () => {
    
        const expected = 'u';
        const actual = polybius(54, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'v' if input contains a 15", () => {
    
        const expected = 'v';
        const actual = polybius(15, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'w' if input contains a 25", () => {
    
        const expected = 'w';
        const actual = polybius(25, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'x' if input contains a 35", () => {
    
        const expected = 'x';
        const actual = polybius(35, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'y' if input contains a 45", () => {
    
        const expected = 'y';
        const actual = polybius(45, false);
        expect(actual).to.equal(expected);
    });
});

describe("polybius", () => {
    it("should return 'z' if input contains a 55", () => {
    
        const expected = 'z';
        const actual = polybius(55, false);
        expect(actual).to.equal(expected);
    });
});