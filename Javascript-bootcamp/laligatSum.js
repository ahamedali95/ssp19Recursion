// Write a function laligatSum(n) that takes in a number and returns the laligatSum
// of that number. A number's laligat sum is the the sum of all the prime numbers less than or equal
// to that number.

function laligatSum(n)
{
	var sum = 0;
	for(var i = n; i >= 2; i--)
	{
		if(isPrime(i))
		{
			sum = sum + i;
		}
	}

	return sum;
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
console.log(laligatSum(10));