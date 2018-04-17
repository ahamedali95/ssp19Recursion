// Write a function nickname(name) that takes in a name string and returns a
// string representing their nickname.
// A nickname is the name up to the second vowel repeated twice. See the examples.
//
// Examples:
//
// nickname('manuel'); // => 'MANU-MANU'
// nickname('pikachu'); // => 'PIKA-PIKA'
// nickname('bootcamp'); // => 'BOO-BOO'
// nickname('bob'); // => 'BOB-BOB'

function nickname(name) {
	var vowels = "AEIOU"
	var count = 0;
	var newName = "";

	for (var i = 0; i < name.length; i++) {
		var char = name[i].toUpperCase();

		if ((vowels.indexOf(char) !== -1) && (count < 2)) {
			newName += char;
			count += 1;
		} 
		if ((vowels.indexOf(char) === -1) && (count < 2)) {
			newName += char;
		}
	}

	var nickname = newName + "-" + newName;
	return nickname;
}

console.log(nickname('manuel')); // => 'MANU-MANU'
console.log(nickname('pikachu')); // => 'PIKA-PIKA'
console.log(nickname('bootcamp')); // => 'BOO-BOO'
console.log(nickname("bob"));