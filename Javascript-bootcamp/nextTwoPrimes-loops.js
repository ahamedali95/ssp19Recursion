// Write a function `nextTwoPrimes(num)` that takes in a number `num` and returns the
// next two prime numbers greater than `num`.
//
// Examples:
// nextTwoPrimes(2); // => [ 3, 5 ]
// nextTwoPrimes(3); // => [ 5, 7 ]
// nextTwoPrimes(7); // => [ 11, 13 ]
// nextTwoPrimes(8); // => [ 11, 13 ]
// nextTwoPrimes(20); // => [ 23, 29 ]
// nextTwoPrimes(97); // => [ 101, 103 ]


function isPrime(num)
{
  if(num < 2)
  {
    return false;
  }
  
  for(var i = 2; i < num; i++)
  {
  	if(num % i === 0)
  	{
  		return false;
  	}
  }
  
  return true;
}


function nextTwoPrimes(num)
{
	var primes = [];

	var i = num + 1;
	while(primes.length < 2)
	{
		if(isPrime(i))
		{
			primes.push(i);
		}
		i = i + 1;
	}
	return primes;
}


console.log(nextTwoPrimes(2)); // => [ 3, 5 ]
console.log(nextTwoPrimes(3)); // => [ 5, 7 ]
console.log(nextTwoPrimes(7)); // => [ 11, 13 ]
console.log(nextTwoPrimes(8)); // => [ 11, 13 ]c
console.log(nextTwoPrimes(20)); // => [ 23, 29 ]
console.log(nextTwoPrimes(97)); // => [ 101, 103 ]
