/*#### Next Prime ####
# Given an array of numbers, replace each prime number in the array with
# the next prime number, e.g. 7 is replaced by 11.
#
# Constraint: You may not use a library to find prime numbers.
#
# examples:
# next_prime([11,13,17]) #=> [13, 17, 19]
# next_prime([4,6,8,10]) #=> [4,6,8,10]
# next_prime([2,5,4,7]) #=> [3,7,4,11]
*/

//Initialize an empty array -> primes
//Iterate throught the array and store each number in a variable -> prime
//Have a for loop that would iterate from prime + 1 until we find 
//he next prime. Insert the next prime in to -> primes
 //use the isPrime function to test to see whether
//each number is a prime or not. 
//return primes.


function nextPrime(array) {
	var nextPrimes = [];

	for (var i = 0; i < array.length; i++) {
		var prime = array[i];
		nextPrimes.push(getNextPrime(prime));
	}

	return nextPrimes;
}

function getNextPrimes(num) {
	var i = num + 1;
	while (true) {
		if (isPrime(i)) {
			return i;
		}

		i += 1;
	}
}

function isPrime(num) {
	if (num < 2) {
		return false;
	}

	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}

	return true;
}

console.log(nextPrime([11,13,17])); // #=> [13, 17, 19]
console.log(nextPrime([4,6,8,10])); //#=> [4,6,8,10]
console.log(nextPrime([2,5,4,7])); //#=> [3,7,4,11]































function next_Prime1(arr) {						//[13,17,19]
	var nextPrimes = [];						

	for (var i = 0; i < arr.length; i++) {
		var prime = arr[i];
		var nextPrime = findNextPrime(prime);
		nextPrimes.push(nextPrime);
	}

	return nextPrimes;
}

function findNextPrime(num) {							//[11,13,17]  => //[13,17,19]
	var index = num + 1; 								
	var bool = true;
	while (bool) {    //loop continuation condition
		if (isPrime(index)) { 
			return index;
		}

		index += 1;
	}
}

function isPrime(num) {
	if (num < 2) {
		return false;
	}

	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}

	return true;
}
























function next_Prime(arr) {
	for (var i = 0; i < arr.length; i++) {
		var prime = arr[i];
		var nextPrime = getNextPrime(prime);
		arr.splice(i,1,nextPrime);
	}

	return arr;
}

function getNextPrime(num) {
	var i = num + 1;

	while (true) {
		if (isPrime(i)) {
			return i;
			break;
		}

		i += 1;
	}
}

function isPrime(num) {
	if (num < 2) {
		return false;
	}

	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}

	return true;
}

console.log(next_Prime1([11,13,17])); // #=> [13, 17, 19])
console.log(next_Prime1([4,6,8,10])); // #=> [4,6,8,10]
console.log(next_Prime1([2,5,4,7])); // #=> [3,7,4,11]