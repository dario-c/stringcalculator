function calculator(text) {
  var text = text;
  // transformTextToNumber(text);
  findOperators(text);
  splitStringToNumerals(text, operatorIndex);
  performMathOperation(firstNumeral, operator, secondNumeral)
  return [operator, operatorIndex, firstNumeral, secondNumeral, result];
}

var convertedNumber;
function transformTextToNumber(text) {
  convertedNumber = parseInt(text, 10);
  return convertedNumber;
}

var operator;
var operatorIndex;
var mathOperators = ['+', '-', '*', '/'];
function findOperators(text) {
  for (var i = 0; i < mathOperators.length; i++) {
    if (text.indexOf(mathOperators[i]) != -1) {
      operator = mathOperators[i];
      operatorIndex = text.indexOf(mathOperators[i]);
      return [operator, operatorIndex];
    } else {
      firstNumeral = transformTextToNumber(firstNumeral);
    }
  };
}

var firstNumeral;
var secondNumeral;
function splitStringToNumerals(text, i) {
  firstNumeral = text.substring(0,i);
  firstNumeral = transformTextToNumber(firstNumeral);
  secondNumeral = text.substring(i+1, text.length);
  secondNumeral = transformTextToNumber(secondNumeral);
  return [firstNumeral, secondNumeral];
}

var result;
function performMathOperation(firstNumeral, operator, secondNumeral) {
  if (operator = '+') {
    result = firstNumeral + secondNumeral;
  } else if (operator = '-') {
    result = firstNumeral - secondNumeral;
  } else if (operator = '*') {
    result = firstNumeral * secondNumeral;
  } else if (operator = '/') {
    result = firstNumeral / secondNumeral;
  } else {
    console.log("operator not found");
    result = "operator not found";
  }

  return result;
}