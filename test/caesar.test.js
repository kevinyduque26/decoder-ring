const { caesar } = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar() tests written by Kevin", () => {

    describe("error handling", () => {

        it("should return false if the shift amount is 0", () => {
            const message = "Kevin Duque";
            const expected = false;
            const actual = caesar(message, 0);
            expect(actual).to.be.false;
        });
    
        it("should return false if the shift amount is above 25", () => {
            const message = "Kevin Duque";
            const expected = false;
            const actual = caesar(message, 26);
            expect(actual).to.be.false;
        });
    
        it("should return false if the shift amount is less than -25", () => {
            const message = "Kevin Duque";
            const expected = false;
            const actual = caesar(message, -26);
            expect(actual).to.be.false;
        });

    });

    describe("encoding a message", () => {

        it("should encode a message by shifting the letters", () => {
            const message = "Kevin Duque";
            const expected = "lfwjo evrvf"
            const actual = caesar(message, 1, true);
            expect(actual).to.equal(expected)
        });

        it("should leaves spaces and other symbols as is", () => {
            const message = "Kevin Duque!";
            const expected = "lfwjo evrvf!"
            const actual = caesar(message, 1, true);
            expect(actual).to.equal(expected)
        });

        it("should ignore capital letters", () => {
            const message = "KEVIN DUQUE!";
            const expected = "lfwjo evrvf!"
            const actual = caesar(message, 1, true);
            expect(actual).to.equal(expected)
        });

        it("should appropriately handle letters at the end of the alphabet", () => {
            const message = "xyz";
            const expected = "cde"
            const actual = caesar(message, 5, true);
            expect(actual).to.equal(expected)
        });

        it("should appropriately handle letters at the end of the alphabet", () => {
            const message = "xyz";
            const expected = "stu"
            const actual = caesar(message, -5, true);
            expect(actual).to.equal(expected)
        });    
       
    });

    describe("decoding a message", () => {

        it("should decode a message by shifting the letters in the opposite direction", () => {
            const message = "fgh";
            const expected = "efg"
            const actual = caesar(message, 1, false);
            expect(actual).to.equal(expected)
        });

        it("should leaves spaces and other symbols as is", () => {
            const message = "f gh!";
            const expected = "e fg!"
            const actual = caesar(message, 1, false);
            expect(actual).to.equal(expected)
        });

        it("should ignore capital letters", () => {
            const message = "FGH";
            const expected = "efg"
            const actual = caesar(message, 1, false);
            expect(actual).to.equal(expected)
        });

        it("should appropriately handle letters at the end of the alphabet", () => {
            const message = "abc";
            const expected = "vwx"
            const actual = caesar(message, 5, false);
            expect(actual).to.equal(expected)
        });

        it("should allow for a negative shift that will shift to the left", () => {
            const message = "fgh";
            const expected = "ghi"
            const actual = caesar(message, -1, false);
            expect(actual).to.equal(expected)
        });    
       
    });

});


