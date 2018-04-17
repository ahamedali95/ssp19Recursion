function magicNumbers(max)
{
  var magicalNumbers = [];
  for(var i = 1; i <= max; i++)
  {
      var element = i;
      if(((isDivisibleBy4(element)) || (isDivisibleBy6(element))) && !((isDivisibleBy4(element)) && (isDivisibleBy6(element))))
      {
        magicalNumbers.push(element);
      }
  }
  return magicalNumbers;
}

function isDivisibleBy4(num)
{
  return (num % 4 === 0);
}

function isDivisibleBy6(num)
{
  return (num % 6 === 0);
}

console.log(magicNumbers(20));