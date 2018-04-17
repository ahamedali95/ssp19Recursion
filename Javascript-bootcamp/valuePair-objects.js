// Write a function `valuePair(obj1, obj2, key)` that takes in two objects and 
// a key (string). The function should return an array containing the corresponding values 
// of the objects for the given key.
//
// Examples:
//
// var object1 = {name: 'One', location: 'NY', age: 3};
// var object2 = {name: 'Two', location: 'SF'};
//
// valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
// valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]

function valuePair(obj1, obj2, key)
{
	var values = [];

	if((obj1[key] !== undefined) && (obj2[key] !== undefined))
	{
		var obj1Value = obj1[key];
		var obj2Value = obj2[key];

		values.push(obj1Value);
		values.push(obj2Value);
	}
	return values;
}

var object1 = {name: 'One', location: 'NY', age: 3};
var object2 = {name: 'Two', location: 'SF'};

console.log(valuePair(object1, object2, 'location')); // => [ 'NY', 'SF' ]
console.log(valuePair(object1, object2, 'name')); // => [ 'One', 'Two' ]