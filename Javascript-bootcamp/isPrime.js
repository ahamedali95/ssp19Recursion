//isPrime Function

function isPrime(num)
{
	if(num < 2)
	{
		return false;
	}
	for(var i = 2; i < num; i++)
	{
		if(num % 2 === 0)
		{
			return false;

		}
	}

	return true;
}

console.log(isPrime(2));