const { substitution } = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution() tests written by Kevin", () => {

    describe("error handling a message", () => {

        it("should return false if the substitution alphabet is missing", () => {
            const expected = false;
            const actual = substitution("abc");
            expect(actual).to.equal(expected);
        });

        it("should return false if the substitution alphabet is not exactly 26 characters", () => {
            const expected = false;
            const actual = substitution("abc", "xoyqmcgrukswaflnthdjpzibeve");
            expect(actual).to.equal(expected);
        });

        it("should return false if the substitution alphabet does not contain unique characters", () => {
            const expected = false;
            const actual = substitution("abc", "xoyqmcgrukswafllthdjpzibev");
            expect(actual).to.equal(expected);
        });

    });

    describe("encoding a message", () => {

        it("should encode a message by using the given substitution alphabet", () => {
            const expected = "xoy"
            const actual = substitution("abc", "xoyqmcgrukswaflnthdjpzibev");
            expect(actual).to.equal(expected);
        });

        it("should work with any kind of key with unique characters", () => {
            const expected = "$oy"
            const actual = substitution("abc", "$oyqmcgrukswaflnthdjpzibev");
            expect(actual).to.equal(expected);
        });

        it("should preserve spaces", () => {
            const expected = "xo y"
            const actual = substitution("ab c", "xoyqmcgrukswaflnthdjpzibev");
            expect(actual).to.equal(expected);
        });       

    });

    describe("decoding a message", () => {

        it("should decode a message by using the given substitution alphabet", () => {
            const expected = "abc"
            const actual = substitution("xoy", "xoyqmcgrukswaflnthdjpzibev", false);
            expect(actual).to.equal(expected);
        });

        it("should work with any kind of key with unique characters", () => {
            const expected = "abc"
            const actual = substitution("$oy", "$oyqmcgrukswaflnthdjpzibev", false);
            expect(actual).to.equal(expected);
        });

        it("should preserve spaces", () => {
            const expected = "ab c"
            const actual = substitution("xo y", "xoyqmcgrukswaflnthdjpzibev", false);
            expect(actual).to.equal(expected);
        });       

    });

   
});



