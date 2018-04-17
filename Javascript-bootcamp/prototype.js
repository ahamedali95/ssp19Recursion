
function Person(first, last, age, eye, nationality, favoriteFilms) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = nationality;
    this.favoriteFilms = favoriteFilms || [];
}

var myFather = new Person("John", "Doe", 50, "blue", "India");
var myMother = new Person("Sally", "Rally", 48, "green", "USA");

Person.prototype.fullName = function() {
	return this.firstName + " " + this.lastName;
}

Person.prototype.insert = function(item) {
	return this.favoriteFilms.push(item);
}



//Person.prototype.Nationality = "";

//console.log(myMother.nationality);

//console.log(myFather.firstName, myMother.lastName); //John Rally


// myMother.insert("Friday the 13th");
// myMother.insert("Ted");
// myMother.remove1();
// console.log(myMother);











//constructor method
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

//console.log(PNFormatter); //PhoneNumberFormatter { numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] }

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  
  string += this.parenthesize(this.getAreaCode()) + " ";
  string += this.getExchangeCode() + "-"
  string += this.getLineNumber();

  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  return this.slice(0, 3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return this.slice(3, 6)
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return this.slice(6, 10);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

var PNFormatter = new PhoneNumberFormatter([1,2,3,4,5,6,7,8,9,0]);

console.log(PNFormatter.render());

