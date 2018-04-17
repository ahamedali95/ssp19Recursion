/*#### Aliquot Sequence ####
# A number's aliquot sum is the sum of all of its factors excluding itself.
#
# For example, the aliquot sum of 10 is: 1 + 2 + 5 = 8
#
# We can use the aliquot sum to define a special sequence, called the
# aliquot sequence. The aliquot sequence of a number begins with the
# number itself. The second number in the sequence is the first number's
# aliquot sum, the third number is the second number's aliquot sum, and
# so on.
#
# For example, the first 4 numbers in the aliquot sequence of 10 are: 10, 8, 7, 1
#
# Write a function that takes in two numbers, base and n, and returns the
# aliquot sequence of length n starting with base.
#
# Examples:
# aliquot_sequence(10, 4) # => [10, 8, 7, 1]
# aliquot_sequence(10, 2) # => [10, 8]
# aliquot_sequence(7, 4) # => [7, 1, 0, 0]*/


//Initialize an array -> sequence with base;
//iterate through sequence array and store each number in a variable -> num
//Find all the factors of num, excluding itself (helper function) and get the sum of those factors.
//push the sum of the factors to sequence.

function aliquotSequence(base, n) {
	var aliquotSequence = [base];

	for (var i = 0; i < n - 1; i++) {
		var num = aliquotSequence[i];
		var aliquotSum = factorsSum(num);
		aliquotSequence.push(aliquotSum);
	}

	return aliquotSequence;
}


function factorsSum(num) {
	var sum = 0;

	for (var i = 1; i < num; i++) {
		if (num % i === 0) {
			sum += i;
		}
	}

	return sum;
}

console.log(aliquotSequence(10,2));

















function aliquot_sequence(base, n) {   //(10, 4)
	var sequence = [base];				

	for (var i = 0; i < n - 1; i ++) {		
		var aliquotSum = sumOfFactors(sequence[i]);		
		sequence.push(aliquotSum);
	}

	return sequence;
}

function sumOfFactors(num) {		//10, 4 sequence = [10, 8, 7, 1] 
	var sum = 0; //0+1+0 = 1

	if (num === 0) {
		return sum;
	}

	for (var i = 1; i < 10; i ++) {
		if (num === i) {
			sum += 0;
		} else if (num % i === 0) {
			sum += i;
		}
	}

	return sum;
}

console.log(aliquot_sequence(10, 4));// # => [10, 8, 7, 1]
console.log(aliquot_sequence(10, 2));// # => [10, 8]
console.log(aliquot_sequence(7, 4)); // # => [7, 1, 0, 0]
