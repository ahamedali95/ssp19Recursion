/*#### Pascal's Triangle ####
# This is an example of Pascal's Triangle:
#
#  depth
#    0   |      1
#    1   |     1 1
#    2   |    1 2 1
#    3   |   1 3 3 1
#    4   |  1 4 6 4 1
#
#
# Pascal's Triangle is a mathematical construct that follows a simple
# rule: each number in the triangle is the sum of the two numbers
# directly above-and-to-the-left and above-and-to-the-right of it.
#
# For example, to find the next row after [1,2,1]:
#
#         1       2       1
#
#     1       3       3       1
#     |       |       |       |
#  (0 + 1) (1 + 2) (2 + 1) (1 + 0)
#
#
# Write a function that will return Pascal's Triangle at the given
# depth. The triangle should be represented as an array of rows.
#
# pascals_triangle(0) => [[1]]
# pascals_triangle(2) => [[1], [1,1], [1,2,1]]
# pascals_triangle(4) => [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]
*/

//Handle easy case - depth = 0, return [[1]]
//If the depth = 1, I need [1] to find [1,1]
//if the depth = 2, I need [1,1] to find [1,2,1]
//To go from [1,1] to [1,2,1], we need the sum of 1+1 = 2 and attach a 1 at each side of the array => [1,2,1]. 
//Getting the sum of first num and the next num
//So i will initiate => triangle to [[1]]
//iterate through the traingle starting at index 0 and going until less than triangle.length
//get each row 
//initialize an empty array
//add 1 to the empty array
//iterate through row and get sum of the numbers that exists at the position i and i + 1 and push it to the array
//add 1 to the array.
//push the row to traingle.

//

function pascalsTriangle(n) {
	var triangle = [[1]];

	if (n === 0) {
		return [[1]]
	}

	for (var i = 0; i < n; i++) {
		var row = triangle[i];
		console.log(row);
		var nextRow = getNextRow(row); 
		triangle.push(nextRow);
	}


	return triangle;
}


function getNextRow(arr) {
	var row = [];
	row.push(1);

	for (var i = 0; i < arr.length - 1; i++) {
		var num1 = arr[i];
		var num2 = arr[i+1];

		var sum = num1 + num2;
		row.push(sum);
	}

	row.push(1);
	return row;
}


console.log(pascalsTriangle(1));



/*
function pascals_triangle(depth) {
	var triangle = [[1]];

	if (depth === 0) {
		return [[1]];
	}

	for (var i = 0; i < depth; i++) {
		var row = triangle[i];
		var nextRow = getNextRow(row);
		triangle.push(nextRow);
	}

	return triangle;
}


function getNextRow(row) {
	var result = [];
	result.push(1);

	for (var i = 0; i < row.length - 1; i++) {
		var firstNum = row[i];
		var nextNum = row[i+1];
		var sum = firstNum + nextNum;
		result.push(sum);

	}

	result.push(1);
	return result;
}
//console.log(pascals_triangle(10)); // => [[1]]
//console.log(pascals_triangle(2)); // => [[1], [1,1], [1,2,1]]
//console.log(pascals_triangle(5)); // => [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]
*/