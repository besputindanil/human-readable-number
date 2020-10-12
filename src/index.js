module.exports = function toReadable (number) {
  const HUNDRED__WORD = 'hundred';
  const numberToWord = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'one hundred'
  };

  function fulfillFirstCondition(number) {
    if (number >= 0 && number < 20) {
      return numberToWord[number];
    } 
 };

  function fulfillSecondCondition(number) {
    if (number >= 20 && number <= 100) {
      const remainderTen = number % 10;
      if (remainderTen === 0) {
        return numberToWord[number];
      } else {
        return `${numberToWord[number - (remainderTen)]} ${fulfillFirstCondition(remainderTen)}`;
      }
    } else {
      return fulfillFirstCondition(number);
    }
  };

  function fulfillThirdCondition(number) {
    if (number > 100 && number < 1000) {
      const remainderHundred = number % 100;
      if (remainderHundred === 0) {
        return `${numberToWord[(number - (remainderHundred)) / 100]} ${HUNDRED__WORD}`;
      } else {
        return `${numberToWord[(number - (remainderHundred)) / 100]} ${HUNDRED__WORD} ${fulfillSecondCondition(remainderHundred)}`;
      }
    } else {
      return fulfillSecondCondition(number);
    }
  };

  const result = fulfillThirdCondition(number);
  return result;
}
