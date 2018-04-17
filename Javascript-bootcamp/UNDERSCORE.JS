
var _ = require('underscore');


var Tuts = [
			{name : 'NetTuts', niche : 'Web Development'}, 
			{name : 'WPTuts', niche : 'WordPress'}, 
			{name : 'PSDTuts', niche : 'PhotoShop'}, 
			{name : 'Ae', niche : 'After Effects'}
			];

var favoriteSports = [
					   {favoriteSport: "Hockey"},
					   {favoriteSport: "Baseball"},
					   {favoriteSport: "Soccer"},
					   {favoriteSport: "Cricket"}
					 ]

// _.each(Tuts, function(value){
// 	console.log(value);
// });

//Using pluck is as simply as passing in the target object
// or array as well as which property to pick out. 
var names = _.pluck(Tuts, "name");
console.log(names);

var niches = _.pluck(Tuts, "niche");
console.log(niches);

//map
var namesPlus = _.map(names, function(name) {
  return name + "+";
});
console.log(namesPlus);

//reduce
var reducedNames = "";
_.reduce(names, function(accumulator, currentName) {
  reducedNames += currentName + " ";
}, reducedNames);

console.log(reducedNames);

//filter
var filteredNames = _.filter(niches, function(niche) {
  return niche !== "PhotoShop";
});

console.log(filteredNames);

//_.reject(list, predicate, [context])
//Returns the values in list without the elements that the truth test (predicate) passes. 
var noTuts = _.reject(names, function(name) {
	return name.indexOf("Tuts") !== -1;
});
console.log(noTuts);

//all is useful if you need to check every value in a collection 
//passes a certain criteria.
var hasTuts = _.all(names, function(name) {
  return name.indexOf("Tuts") !== -1
});
console.log(hasTuts);

//some - Returns true if any of the values in the list pass the predicate truth test.
var someHasTuts = _.some(names, function(name) {
  return name.indexOf("Tuts") !== -1
});
console.log(someHasTuts);

//contains - Returns true if the value is present in the list.
var hasPhotoShopNiche = _.contains(niches, "PhotoShop");
console.log(hasPhotoShopNiche);

//each - Iterates over a list of elements, yielding each in turn to an iteratee function.
var obj = {};
_.each(niches, function(niche) { 
	if (obj[niche] === undefined) {
		obj[niche] = 1;
	} else {
		obj[niche]++;
	}
});

console.log(obj);

//.identity - Returns the same value that is used as the argument. 
//In math: f(x) = x
console.log("Tuts" === _.identity("Tuts"));

//_.first(array, [n]) - Returns the first element of an array. 
//Passing n will return the first n elements of the array. 
console.log(_.first(names, [3]));

//_.last(array, [n]) - Returns the last element of an array. 
//Passing n will return the last n elements of the array. 
console.log(_.last(names, [2]));

//_.indexOf(array, value, [isSorted]) - Returns the index at which value can be found in the array, 
//or -1 if value is not present in the array. 
console.log(_.indexOf(names, "PSDTuts"));

// _.uniq(array, [isSorted], [iteratee]) Alias: unique
// Produces a duplicate-free version of the array, using === to test object equality. 
// In particular only the first occurence of each value is kept. If you know 
// in advance that the array is sorted, passing true for isSorted will run a 
// much faster algorithm.
var itemsToBuy = ["candy", "clorox", "chocolate", "pancake mix", "strawberry jam", "candy"];
console.log(_.uniq(itemsToBuy));

// _.shuffle(list)
// Returns a shuffled copy of the list
console.log(_.shuffle(itemsToBuy));

// _.extend(destination, *sources)
// Shallowly copy all of the properties in the source objects over to the destination 
// object, and return the destination object. Any nested objects or arrays will 
// be copied by reference, not duplicated. It's in-order, so the last source will 
// override properties of the same name in previous arguments. 
console.log(_.extend({name: "Aaron"}, {age: 30, hobby: "cycling"}));

// _.defaults(object, *defaults)
// Fill in undefined properties in object with the first value present 
// in the following list of defaults objects. 
console.log(_.defaults({Icecream: "chocolate"}, {Icecream: "Vanilla", Calories: 320, Color: "white"}));

// _.once(function)
// Creates a version of the function that can only be called one time. Repeated calls to the modified 
// function will have no effect, returning the value from the original call.
function nameAndNiche(arr) {
   var str = "";

   _.each(arr, function(tutObj) {
   	  var tutName = tutObj.name;
   	  var tutNiche = tutObj.niche;

   	  str += `${tutName} has ${tutNiche} as his niche \n`
   });

   console.log(str);
}

var callOnce = _.once(nameAndNiche);
callOnce();
callOnce();


// _.delay(function, wait, *arguments)
// Much like setTimeout, invokes function after wait milliseconds. If you pass the optional 
// arguments, they will be forwarded on to the function when it is invoked. 

_.delay(nameAndNiche, 3000, Tuts)


