const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
   
  it("Returns a hash when given a normal string ", () => {
    const trivialKey = deterministicPartitionKey('hello');
    expect(trivialKey).toBe("ea80224d30664a6d5d6ed2460016177b429fdce58b820ecf490d470718e28886291085ef696f338781821c81cdeff08577a0acec0ff1906e05505d17a1d129a0");
  });


  it("Returns a key value when given a key value pair", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:123});
    expect(trivialKey).toBe("123");
  });


});
