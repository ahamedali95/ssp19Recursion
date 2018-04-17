// Write a function `longestBigram(sentence)` that takes in a sentence string and returns
// the longest bigram in the sentence. A bigram is a pair of consecutive words.
// When returning the bigram, include the space between the words.
// Assume there will be no punctuation. In the case of a tie, return the earlier bigram.
//
// Examples:
//
// longestBigram('measure twice cut once'); // => 'measure twice'
// longestBigram("One must have a mind of winter"); // => 'must have'
// longestBigram("go home to eat"); // => 'go home'
// longestBigram("his last assessment is fun"); // => 'last assessment'

function longestBigram(sentence) {
	var words = sentence.split(" ");
	var longestBigram = 0;
	var bigram = []

	for (var i = 0; i < words.length - 1; i++) {
		var wordBefore = words[i];
		var wordAfter = words[i+1];
		var currentBiagram = wordBefore.length + wordAfter.length;

		if (currentBiagram > longestBigram) {
			longestBigram = currentBiagram;
			bigram.length = 0;
			bigram.push(wordBefore);
			bigram.push(wordAfter);
		} 
	}

	return bigram.join(" ");
}

console.log(longestBigram('measure twice cut once')); // => 'measure twice'
console.log(longestBigram("One must have a mind of winter")); // => 'must have'
console.log(longestBigram("go home to eat")); // => 'go home')
console.log(longestBigram("his last assessment is fun")); // => 'last assessment')