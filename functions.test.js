const { sum, capitalize, reverseString, calculator} = require('./functions');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('capitalize', () => {
    expect(capitalize("bobby")).toBe("Bobby");
  });

  test('reverseString', () => {
    expect(reverseString("Adik")).toBe("kidA");
    expect(reverseString("Hello")).toBe("olleH");
    expect(reverseString("")).toBe(""); // Empty string test
    expect(reverseString("A")).toBe("A"); // Single character test
  });

  test('calculator',() => {
    expect(calculator.divide(9,0)).toBe(Infinity);
    expect(calculator.multiply(9,0)).toBe(0);
    expect(calculator.substract(9,0)).toBe(9);
    expect(calculator.add(9,0)).toBe(9);
  })
  
  