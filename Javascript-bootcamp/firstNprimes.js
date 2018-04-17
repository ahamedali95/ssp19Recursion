// Using the `isPrime` function you made, write a function `firstNPrimes(n)` that
// returns an array of the first `n` prime numbers.
//
// Examples:
// firstNPrimes(0); // => []
// firstNPrimes(1); // => [2]
// firstNPrimes(4); // => [2, 3, 5, 7]




function isPrime2(num)
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


function firstNPrimes2(num)
{
	var primes = [];
	var i = 2;
	while(primes.length - 1 <= num)
	{
		if(isPrime(i))
		{
			primes.push(i);
		}
		i = i + 1
	}

	return primes;

}














function isPrime(num)
{

	for(var i = 2; i < num; i++)
	{
		if(num % i === 0)
		{
			return false;
		}
	}

	return true;
}

function firstNPrimes(n)
{
	var primesArray = [];
	var i = 2;
	while(primesArray.length < n)
	{
		if(isPrime(i))
		{
			primesArray.push(i);
		}
		i = i + 1;
	}
	return primesArray;
}

console.log(firstNPrimes(4));