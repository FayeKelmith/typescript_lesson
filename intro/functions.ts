const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

function multiply(num: number): number {
  return num * num;
}

function getValue(myVal: number): string | boolean {
  if (myVal > 10) {
    return true;
  }
  return "200 OK";
}
