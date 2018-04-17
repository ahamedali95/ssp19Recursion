function decorateClassListWithAges(classList) {
  var classListWithAges = [];
  
  for (var i = 0; i < classList.length; i++) {
    var obj = {name: classList[i], age: generateAge()};
    classListWithAges.push(obj);
  }
  
  return classListWithAges;
}

function generateAge() {
	//return Math.floor(Math.random()* (11-10+1)+min);
	return Math.floor(Math.random() * 2) + 10;
}

console.log(decorateClassListWithAges(["joe","class"]));