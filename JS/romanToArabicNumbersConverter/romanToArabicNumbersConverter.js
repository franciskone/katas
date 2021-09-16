function romanToArabicNumbersConverter(roman) {
  const values = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  const { total } = roman.split("").reduce(
    (acc, letter, i, array) => {
      const { total, tempVal } = acc;
      const currentValue = values[letter];

      if (tempVal === 0 || tempVal >= currentValue) {
        acc.tempVal = tempVal + currentValue;
        if (i === array.length - 1) {
          acc.total = total + acc.tempVal;
        }
      } else {
        acc.total = total + currentValue - tempVal;
      }

      return acc;
    },
    { total: 0, tempVal: 0 }
  );
  return total;
}

module.exports = romanToArabicNumbersConverter