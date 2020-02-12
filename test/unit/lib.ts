import "mocha";

import { expect } from "chai";
import { isStringLengthValid } from "../../src/lib";

describe("isStringLengthValid", () => {
  it("should return true, valid string, its length is within the set range", () => {
    expect(isStringLengthValid("boom", 0, 4)).to.be.true;
  });

  it("should return false, invalid string, string is shorter than expected", () => {
    expect(isStringLengthValid("boom", 10, 20)).to.be.false;
  });

  it("should return false, invalid string, string is longer than expected", () => {
    expect(isStringLengthValid("boom", 1, 3)).to.be.false;
  });
});
