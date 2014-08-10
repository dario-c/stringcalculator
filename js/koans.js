
describe("The Awesome Calculator(tm)", function(){
  it("returns a number when passed an number as text", function() {
    expect(calculator("10")[3]).toBe(10);
  });

  it("detects the mathematical plus operator passed as string", function() {
    expect(calculator("10+10")[0]).toBe('+');
  });

  it("detects the mathematical minus operator passed as string", function() {
    expect(calculator("10-10")[0]).toBe('-');
  });

  it("detects the mathematical multiplier operator passed as string", function() {
    expect(calculator("10*10")[0]).toBe('*');
  });

  it("detects the mathematical division operator passed as string", function() {
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

  it("returns the product of two numbers passed as text with an addition operator", function() {
    expect(calculator("1+1")[4]).toBe(2);
  });

})