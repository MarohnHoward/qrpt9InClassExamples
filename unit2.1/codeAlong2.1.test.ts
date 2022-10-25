it("asserts on size", () => {
    const smaller: number = 5;
    const greaterOrEqual: number = 5;
    const bigger: number = 321654987;

    // Add an assertion that "smaller" is less than "bigger"
    expect(smaller).toBeLessThan(bigger)
    // Add another assertion that "greaterOrEqual" is greater than or equal to "smaller"
    expect(greaterOrEqual).toBeGreaterThanOrEqual(smaller)
    // Add a final assertion that "bigger" is *not* less than "smaller"
    expect(bigger).not.toBeLessThan(smaller)
  });
  it("asserts on truth", () => {
    const hello: string = "Hello World";
    const sentence: string = "The quick brown fox jumped over the lazy dog.";

    // One of these statements is true, and one is not. Wrap each in the appropriate assertion!
    hello.includes("Hi There");
    sentence.includes("fox");
    expect(hello.includes("Hi There")).toBeFalsy()
    expect(sentence.includes("fox")).toBeTruthy()
  });
  it("asserts on things being the same", () => {
    const numberCompare1: number = 3.14159;
    const numberCompare2: number = 3.14;
    const stringCompare1: string = "Hi";
    const stringCompare2: string = "Hi";

    // Add a passing assertion comparing numberCompare1 and numberCompare2 based on being equal
    expect(numberCompare1).not.toEqual(numberCompare2)
    // Add a passing assertion comparing stringCompare1 and stringCompare2 based on being equal
    expect(stringCompare1).toEqual(stringCompare2)
  });