// Write a function `firstLastCap(sentence)` that takes in a sentence and returns a new
// sentence where the first and last letters of each word is uppercase. All other characters
// should be lowercase.
//
// Examples:
//
// firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
// firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'


function firstLastCap(sentence)
{
	var splitSentence = sentence.split(" ");
	var newWords = [];
	for(var i = 0; i <= splitSentence.length - 1; i++)
	{
		var word = splitSentence[i];
		var newWord = word.toLowerCase();
		var firstCap = newWord[0].toUpperCase();
		var lastCap = newWord[newWord.length - 1].toUpperCase();
		newWord = firstCap + newWord.slice(1,-1) + lastCap;
		newWords.push(newWord);
	}

	return newWords.join(" ");

}

console.log(firstLastCap('hello BOOTCAMP PrEp'));