// 1.
/* function cube(x) {
  return x * x * x;
}
// 2.
function fullname(first, last) {
  return first + " " + last;
}
// 3.
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}
// 4.
function sumCubes(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

*/

var cube = function(x) {
  return x * x * x;
}

var fullName = function(first, last) {
  return first + " " + last;
}

var power = function(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * power(base, exp - 1);
}

var sumCubes = function(numbers) {
  var total = 0;

  for (var i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }

  return total;
}

console.log(sumCubes([1,2,3]));


function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

function sumSquares(numbers) {
  var total = 0;
  
  each(numbers, function(number) {
    total += number * number;
  });

  return total;
}

/*function sumCubes(numbers) {
  var total = 0;
  
  each(numbers, function(number) {
    total = number * number * number;
  });

  return total;
}
*/

//Rewrite sumCubes using each:

function sumCubes1(numbers) {
  var total = 0;
  
  each(numbers, function(number) {
    total += number * number * number;
  });

  return total;
}

console.log(sumCubes1([1,2,3]));


//Write a function called product that calculates the 
//product of an array of numbers using a for loop; 
//then, refactor it to use each.

function product(numbers) {
  var product = 1;

  each(numbers, function(number) {
    product *= number;
  });

return product;
}

console.log(product([1,2,3]));

//Write a function called cubeAll that cubes each number 
//in an array, and returns an array of all the numbers 
//cubed using a for loop; then, refactor it to use each.

/*function cubeAll(numbers) {
  var cubed = [];

  for (var i = 0; i < numbers.length; i++) {
    cubed.push(cube(numbers[i]));
  }

  return cubed;
}
*/

function cubeAll(numbers) {
  var cubed = [];

  each(numbers, function(number) {
    cubed.push(cube(number));
  });

  return cubed;
}

console.log(cubeAll([1,2,3])); //[1,8,27]

//Write a function called odds that accepts an array as a 
//parameter and returns an array of just the odd numbers. If you wrote 
//it using each, great! If you used anything else, 
//refactor it to use a for loop.

function odds(array) {
  var odd = [];

  each(array, function(n) {
    if (n % 2 !== 0) {
      odd.push(n);
    }
  });

  return odd;
}

console.log(odds([1,2,3,4,5,6])); 

//Write a function sumByAllElementsMultipliedByFour that takes 
//an array as an argument and returns the sum of all 
//elements multiplied by four.

function sumByAllElementsMultipliedByFour(numbers) {
  var sum = 0;

  each(numbers, function(number) {
    sum += number;
  });

  return sum * 4;
}

console.log(sumByAllElementsMultipliedByFour([1,2,3]));

//Write a function sumBy that accepts two arguments: an array 
//of numbers and a function. The function will be invoked 
//upon each element in the array, and its result will be 
//used to compute the sum.

function sumBy(array, func) {
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    sum += func(array[i]);
  }

  return sum;
}

function square(num) {
  return num * num;
}

var numbers = [1, 2, 3, 4];

console.log(sumBy(numbers, square));

  //Note: you will have to create a function "square" that 
  //returns the square of an input number.

function cube(num) {
  return num * num * num;
}

console.log(sumBy(numbers, cube)); // => 100

  //Note: you will have to create a function "cube" that 
  //returns the cube of an input number.
console.log(sumBy(numbers, function(number) {
  return number * 4;
}));
// => 40

//How can you use sumBy to compute the sum of an 
//array of numbers (just the plain sum)?
console.log(sumBy(numbers, function(number) {
  return number;
}));

//Write a function productBy that works like sumBy, 
//but for products.



//Higher order function is a function which takes a function 
//an argument and/or returns a function as its result



var myList = [1, "hello", {name: "Pete"}, [1,2,3]];

for (var i = 0; i < myList.length; i++) {
  var element = myList[i];
  console.log(element);
}

myList.forEach(function(element, i) {
  console.log(element);
});

var countCalls = function(func) {
  var calls = 0;
  return function(arg1, arg2, arg3) {
    func(arg1, arg2, arg3)

    console.log("this function has been called " + calls + "times.");
  }
}

var myFunc = function() {
  return 1;
}

var countedFunc = countCalls(myFunc);

countedFunc();


//map and filter
//map take in an array, make a copy and transform each of the
//copies according to a "rule" function

var names = ["ahamed", "abbas", "jenny", "aba"];

function nameLengths(names) {
  var length;

  /*names.forEach(function(name) {
    length.push(name.length);
  }
  */

  length = names.map(function(name) {
    return name.length;
  });

  return length;
} 

function square(nums) {
  return nums.map(function(num)) {
    return num * num;
  });
}

//filter
//takes in an array and  returns an array of the elements 
//which passed some "test" function
//if the function returns true, the input goes into the resulting
//array

function positivesOnly(nums) {
  //var result = [];
  /*nums.forEach(function(num) {
    if (num > 0) {
      result.push(num)
    }
  });
*/
  var result = nums.filter(function(num)) {
    return num > 0;
  });

  return result;
}

function squareEven(nums) {

}


//reduce
//loop over every element in an array, and then return one
//THING -boolean, string, function, array, object, number

var sum = function(nums) {
  var total = 0;

  nums.forEach(function(num) {
    total += num;
  });

  return total;
}

var sum2 = function(nums) {
  var total = nums.reduce(Function(accumulator, curr) {
    return accumulator + curr;
  }, 0);

  return total;
}

var product = function(nums) {
  var total = nums.reduce(function(accumulator, curr) {
    return accumulator * curr;
  }, 1);

  return total;
}

var concatenate = function(strings) {
  return strings.reduce(function(string, substring) {
    return str + substring;
  } "");
}








