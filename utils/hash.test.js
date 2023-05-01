const crypto = require("crypto");

const { createHash } = require("./hash");

describe("Hash utils", () => {
  it("Returns hash when given no input", () => {
    const hash = createHash();
    expect(hash).toBe(
      crypto.createHash("sha3-512").update('').digest("hex")
    );
  });

  it("Returns hash when given null", () => {
    const hash = createHash();
    expect(hash).toBe(
      crypto.createHash("sha3-512").update('').digest("hex")
    );
  });

  it("Returns hash when given empty string", () => {
    const value = '';
    const hash = createHash(value);
    expect(hash).toBe(
      crypto.createHash("sha3-512").update('').digest("hex")
    );
  });

  it("Returns hash when given no empty string", () => {
    const value = 'value';
    const hash = createHash(value);
    expect(hash).toBe(
      crypto.createHash("sha3-512").update(value).digest("hex")
    );
  });

  it("Returns hash when given object", () => {
    const value = {};
    const hash = createHash(value);
    expect(hash).toBe(
      crypto.createHash("sha3-512").update(JSON.stringify(value)).digest("hex")
    );
  });
});
