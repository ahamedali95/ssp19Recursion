function modulo(num1, num2) { //(-12,5)
  var quotient = Math.floor(num1 / num2);
  var product = quotient * num2; 
  var remainder = num1 - product; 
  
  return remainder;
}

console.log(modulo(5,-2));
console.log(modulo(-1,2));

//expect(modulo(-4, 2)).toBe(0);


