

function dynamicFizzBuzz(max, num1, num2)
{
  var multiples = [];

  for(var i = 1; i <= max; i++)
  {
    if(((i % num1 === 0) || (i % num2 === 0)) && !((i % num1 === 0) && (i % num2 === 0)))
    {
      multiples.push(i);
    }
  }
  return multiples;
}


console.log(dynamicFizzBuzz(20, 5, 3));// => [3, 5, 6, 9, 10, 12, 18]
console.log(dynamicFizzBuzz(20, 4, 6));// => [4, 6, 8, 16, 18]