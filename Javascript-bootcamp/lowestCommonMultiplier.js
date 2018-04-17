////////////////////////////////////////////////////////////////////////////////
// Write a function lcm(num1, num2) that returns the lowest number which is a
// multiple of both num1 and num2.
//
// Examples:
//
// lcm(2, 3); // => 6
// lcm(6, 10); // => 30
// lcm(24, 26); // => 312
////////////////////////////////////////////////////////////////////////////////


function lcm(num1, num2)
{
	var lowest = 0;
	var i = 1;

	while(isTrue(i, num1, num2))
	{
		if(i % num1 === 0 && i % num2 === 0)
		{
			lowest = i;
			break;
		}
		i = i + 1;
	}
	return lowest;
	
}

function isTrue(i, num1, num2)
{
	return i <= num1 * num2;
}

console.log(lcm(24,26));
console.log(lcm(2,3));