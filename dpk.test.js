const crypto = require("crypto");

const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  describe("Returns the string literal when given event", () => {
    describe("with partition key", () => {
      it("of string type", () => {
        const partitionKey = 'partitionKey';
        const event = { partitionKey };
        const key = deterministicPartitionKey(event);
        expect(key).toBe(partitionKey);
      });

      it("of large string type", () => {
        const partitionKey = 'p'.repeat(257);
        const event = { partitionKey };
        const key = deterministicPartitionKey(event);
        expect(key).toBe(
          crypto.createHash("sha3-512").update(partitionKey).digest("hex")
        );
      });
  
      it("of number type", () => {
        const partitionKey = 1234567890;
        const event = { partitionKey };
        const key = deterministicPartitionKey(event);
        expect(key).toBe(JSON.stringify(partitionKey));
      });

      it("of object type", () => {
        const partitionKey = { test: 'test' };
        const event = { partitionKey };
        const key = deterministicPartitionKey(event);
        expect(key).toBe(JSON.stringify(partitionKey));
      });

      it("of array type", () => {
        const partitionKey = [];
        const event = { partitionKey };
        const key = deterministicPartitionKey(event);
        expect(key).toBe(JSON.stringify(partitionKey));
      });

      it("of null", () => {
        const partitionKey = { test: 'test' };
        const event = { partitionKey };
        const key = deterministicPartitionKey(event);
        expect(key).toBe(JSON.stringify(partitionKey));
      });
    });

    describe("without partition key", () => {
      it("of object type", () => {
        const event = { test: 'test' };
        const key = deterministicPartitionKey(event);
        expect(key).toBe(
          crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex")
        );
      });

      it("of array type", () => {
        const event = [];
        const key = deterministicPartitionKey(event);
        expect(key).toBe(
          crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex")
        );
      });

      it("of null", () => {
        const event = null;
        const key = deterministicPartitionKey(event);
        expect(key).toBe("0");
      });
    });
  });
});
