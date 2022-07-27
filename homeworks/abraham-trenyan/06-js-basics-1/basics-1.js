function opposite(number) {
    return number - number * 2;
  }
  function basicOp(operation, number1, number2) {
    switch (operation) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "*":
        return number1 * number2;
      case "/":
        return number1 / number2;
    }
  }
  function printArray(array) {
    let output = "";
    array.forEach((element) => (output += element + ","));
    output = output.slice(0, -1);
    return output;
  }
  function rentalCarCost(d) {
    if (d < 3) return d * 40;
    else if (d < 7) return d * 40 - 20;
    else return d * 40 - 50;
  }
  function getMiddle(s) {
    if (s.length % 2 == 0) {
      console.log(s[(s.length / 2 + 1, s.length / 2 + 2)]);
    } else {
      console.log(s[s.length / 2 + 1]);
    }
  }
  console.log(getMiddle("hola"));

  