var nums = [20,100,11,12,15,14];
function decorateClassListWithAges(classList) {
  var arr = [];
  classList.forEach(function(num) {
  	if (num > 10 && num < 15) {
  		arr.push(num);
  	}
  });

  return [{age: arr}];
}

function testDecoratesFirstStudentWithValidAge() {
  var classListWithAges = decorateClassListWithAges(nums);
  var checkAge = assertRange(classListWithAges[0].age, 10, 15, 
  	'check age is between 10 and 15');

  if (checkAge === "passed") {
  	console.log("PASSED");
  }
}

function assertRange(arr, range1, range2, message) {
  arr.forEach(function(num) {
  	if (!(num > range1 && num < range2)) {
  		return "FAILED";
  	}
  });

  return "passed";
}


// Execute your test suite
testDecoratesFirstStudentWithValidAge(); // <-- the test we wrote above
// testSomethingElse();
// testYetAnotherThing(); // etc

//console.log(decorateClassListWithAges(nums));