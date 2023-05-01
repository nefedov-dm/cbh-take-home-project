const { createHash } = require("./hash");
const { prepare } = require("./partition-key");

describe("Partition Key utils", () => {
  it("Returns the string literal when given no input", () => {
    const prepared = prepare();
    expect(prepared).toBe(undefined);
  });

  it("Returns the string literal when given null", () => {
    const value = null;
    const prepared = prepare(value);
    expect(prepared).toBe(null);
  });

  it("Returns the string literal when given string", () => {
    const value = 'value';
    const prepared = prepare(value);
    expect(prepared).toBe(value);
  });

  it("Returns the string literal when given larg string", () => {
    const value = 'v'.repeat(257);
    const prepared = prepare(value);
    expect(prepared).toBe(createHash(value));
  });

  it("Returns the string literal when given number", () => {
    const value = 1234567890;
    const prepared = prepare(value);
    expect(prepared).toBe(JSON.stringify(value));
  });

  it("Returns the string literal when given object", () => {
    const value = { value: 'value' };
    const prepared = prepare(value);
    expect(prepared).toBe(JSON.stringify(value));
  });

  it("Returns the string literal when large object", () => {
    const value = { value: 'v'.repeat(257) };
    const prepared = prepare(value);
    expect(prepared).toBe(createHash(value));
  });
});
