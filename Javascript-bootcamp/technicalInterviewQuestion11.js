/*# Given an array of numbers, return an array of all the products 
remaining when each element is removed from the array.
# You may wish to write a helper method: array_product.

# products_except_me([2, 3, 4]) => [12, 8, 6], where:
#   12 because you take out 2, leaving 3 * 4
#   8, because you take out 3, leaving 2 * 4
#   6, because you take out 4, leaving 2 * 3

# products_except_me([1, 2, 3, 5]) => [30, 15, 10, 6], where:
#   30 because you take out 1, leaving 2 * 3 * 5
#   15, because you take out 2, leaving 1 * 3 * 5
#   10, because you take out 3, leaving 1 * 2 * 5
#   6, because you take out 5, leaving 1 * 2 * 3
*/

//Iterate through each number of the array and store it in a variable -> num
//if the -> num exists at 0, then get all elements to the right and get the product.
//If the -> num exists at array.length - 1, then get all elements to the left and get the product.
//If the -> num is not found either at 0 or array.length - 1 then get elements from left and right and find the
//product.

function productsExceptMe(array) {
	var result = [];

	for (var i = 0; i < array.length; i++) {
		var num = array[i];

		if (i === 0) {
			result.push(rightProduct(i, array));
		} else if (i === array.length - 1) {
			result.push(leftProduct(i, array));
		} else {
			result.push(leftProduct(i, array) * rightProduct(i, array));
		}
	}

	return result;
}

function rightProduct(index, array) {
	if (array.length === 1) {
		return 0;
	}
	var product = 1;

	for (var i = index + 1; i < array.length; i++) {
		product *= array[i];
	}

	return product;
}

function leftProduct(index, array) {
	if (array.length === 1) {
		return 0;
	}
	var product = 1;

	for (var i = 0; i < index; i++) {
		product *= array[i];
	}

	return product;
}



console.log(productsExceptMe([10]));
console.log(productsExceptMe([1,2,3,5]));















//result = []
//iterate through the array and store each iteration which is a num in a variable called num
//use slicing to get the array on the left of num and right of num
//helper function to get the product of each array
//store each product in result;
//return result;



function products_except_me(array) {
	var result = [];

	for (var i = 0; i < array.length; i++) {
		var leftArray = array.slice(0, i);
		var rightArray = array.slice(i + 1);
		result.push(findProduct(leftArray) * findProduct(rightArray));
	}

	return result;
}

function findProduct(arr) {
	if (arr.length === 0) {
		return 1;
	}

	var product = arr[0];

	for (var i = 1; i < arr.length; i++) {
		var num = arr[i];
		product *= num;
	}

	return product;
}

console.log(products_except_me([1, 2, 3, 5]));
console.log(products_except_me([2, 3, 4]));