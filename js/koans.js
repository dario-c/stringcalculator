
describe("The Awesome Calculator(tm)", function(){
  it("returns a number when passed an number as text", function() {
    expect(calculates("10")).toBe(10);
  });

  it("returns the product of two numbers passed as text with an addition operator", function() {
    expect(calculates("1+1")).toBe(2);
  });

})
