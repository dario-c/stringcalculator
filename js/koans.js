
describe("The Awesome Calculator(tm)", function(){
  it("returns a number when passed an number as text", function() {
    expect(calculator("10")[2]).toBe(10);
  });

  it("detects the mathematical PLUS operator passed as string", function() {
    expect(calculator("10+10")[0]).toBe('+');
  });

  it("detects the mathematical MINUS operator passed as string", function() {
    expect(calculator("10-10")[0]).toBe('-');
  });

  it("detects the mathematical MULTIPLIER operator passed as string", function() {
    expect(calculator("10*10")[0]).toBe('*');
  });

  it("detects the mathematical DIVISION operator passed as string", function() {
    expect(calculator("10/10")[0]).toBe('/');
  });

  it("detects the index of the mathematical operator", function() {
    expect(calculator("1+1")[1]).toBe(1);
  });

  it("detects the first number in the string", function() {
    expect(calculator("15+19")[2]).toBe(15);
  });

  it("detects the second number in the string", function() {
    expect(calculator("15+19")[3]).toBe(19);
  });

  it("returns the product of two numbers passed as text with an ADDITION operator", function() {
    expect(calculator("10+10")[4]).toBe(20);
  });

  it("returns the product of two numbers passed as text with a MINUS operator", function() {
    expect(calculator("20-10")[4]).toBe(10);
  });

  it("returns the product of two numbers passed as text with a MULTIPLICATION operator", function() {
    expect(calculator("100*10")[4]).toBe(1000);
  });

  it("returns the product of two numbers passed as text with a DIVISION operator", function() {
    expect(calculator("100/10")[4]).toBe(10);
  });

})