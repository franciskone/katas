const romanToArabicNumbersConverter = require('./romanToArabicNumbersConverter')

describe("romanToArabicNumbersConverter", () => {
  it("XXI -> 21", () => expect(romanToArabicNumbersConverter("XXI")).toBe(21));
  it("I -> 1", () => expect(romanToArabicNumbersConverter("I")).toBe(1));
  it("IV -> 4", () => expect(romanToArabicNumbersConverter("IV")).toBe(4));
  it("MMVIII -> 2008", () => expect(romanToArabicNumbersConverter("MMVIII")).toBe(2008));
  it("MDCLXVI -> 1666", () => expect(romanToArabicNumbersConverter("MDCLXVI")).toBe(1666));

});