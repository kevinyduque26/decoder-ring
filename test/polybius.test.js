const { polybius } = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius() tests written by Kevin", () => {

    describe("encoding a message", () => {

        it("should encode a message by translating each letter to number pairs", () => {
            const expected = "112131";
            const actual = polybius("abc");
            expect(actual).to.equal(expected);
        });

        it("should translate both 'i' and 'j' to 42", () => {
            const expected = "4242";
            const actual = polybius("ij");
            expect(actual).to.equal(expected);
        });

        it("should leave spaces as is", () => {
            const expected = "1121 31";
            const actual = polybius("ab c");
            expect(actual).to.equal(expected);
        });

    });

    describe("decoding a message", () => {

        it("should decode a message by translating each pair of numbers into a letter", () => {
            const expected = "abc";
            const actual = polybius("112131", false);
            expect(actual).to.equal(expected);
        });

        it("should translate 42 to both 'i' and 'j'", () => {
            const expected = "(i/j)";
            const actual = polybius("42", false);
            expect(actual).to.include("i" && "j");
        });

        it("should leave spaces as is", () => {
            const expected = "ab c";
            const actual = polybius("1121 31", false);
            expect(actual).to.equal(expected);
        });

        it("should return false if the length of all numbers is odd", () => {
            const expected = false;
            const actual = polybius("11213", false);
            expect(actual).to.equal(expected);
        });      

    });

});


