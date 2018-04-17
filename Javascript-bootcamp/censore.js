// Write a function `censor(sentence, curseWords)` that censors the given sentence by
// replacing the vowels in curse words with "*". Assume no punctuation.
//
// Examples:
//
// var result1 = censor("Darn you Harold you son of a gun", ["darn", "gun"]);
// result1; //=> "D*rn you Harold you son of a g*n"
//
// var result2 = censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]);
// result2; //=> "Schn*k*ys I dont give a d*ddly sq**t"


function censor(sentence, curseWords) {
	var lowerCased = sentence.toLowerCase();
	var words = lowerCased.split(" ");
	var censoredSentence = [];

	for (var i = 0; i < words.length; i++) {
		var word = words[i];

		if (curseWords.indexOf(word) !== -1) {
			var censoredWord = replaceVowels(word);
			censoredSentence.push(censoredWord);
		} else {
			censoredSentence.push(word);
		}
	}

	return censoredSentence.join(" ");
}

function replaceVowels(word) {
	var censored = "";
	var vowels = "aeiou";

	for (var i = 0; i < word.length; i++) {
		var char = word[i];

		if (vowels.indexOf(char) !== -1) {
			censored += "*";
		} else {
			censored += char;
		}
	}

	return censored;
}




var result2 = censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]);
console.log(result2); //=> "Schn*k*ys I dont give a d*ddly sq**t"

var result1 = censor("Darn you Harold you son of a gun", ["darn", "gun"]);
console.log(result1); //=> "D*rn you Harold you son of a g*n"