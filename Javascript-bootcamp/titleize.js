// Write a function `titleize(title, stopWords)` that takes in a string `title`
// and an array of strings `stopWords`. Return the `title` where every word that
// does not exist in the `stopWords` array is capitalized; all others lowercase.
//
// Hint: Decompose this problem into helper functions. Perhaps create these,
// - removePunctuation(word)
// - isStopWord(word, stopWords)
//
// 
//
// Examples:
//
// titleize("forest gump, the runner", ["the"])
// => "Forest Gump, the Runner"
//
// titleize("MASTER AND COMMANDER", ["and"])
// => "Master and Commander"
//
// titleize("i LOVE; lover of mine", ["love", "of"])
// => "I love; Lover of Mine"
//
// titleize("shall we dance?", ["dance"])
// => "Shall We dance?"

function titleize(title, stopWords)
{
	var lowercase = title.toLowerCase();
	var words = lowercase.split(" ");
	var title = [];

	for(var i = 0; i<= words.length - 1; i++)
	{
		var word = words[i];
		var newWord = removePunctuation(word);
		var isWordExist = match(newWord, stopWords);
		if(isWordExist === false)
		{
			var capitalizeWord = newWord[0].toUpperCase() + newWord.substring(1)
			title.push(capitalizeWord);

		}
		else
		{
			title.push(word);
		}

	}
	return title.join(" "); 
}

function match(word, stopWords)
{
	for(var i = 0; i<= stopWords.length - 1; i++)
	{
		if(word === stopWords[i])
		{
			return true;
		}
	}
	return false;
}

function removePunctuation(word)
{
	var lastChar = word[word.length - 1];
	var punctuation = [";", "!", ".", "?", ",", "-"];
	
	if(punctuation.indexOf(lastChar) !== -1)
	{
		return word.slice(0, word.length - 1);
	}
	else
	{
		return word;
	}
	
}



//console.log(titleize("shall we dance?", ["dance"]));
// => "Shall We dance?"


//console.log(titleize("forest gump, the runner", ["the"]));
// => "Forest Gump, the Runner"
//
console.log(titleize("MASTER AND COMMANDER", ["and"]));
// => "Master and Commander"
//
//console.log(titleize("i LOVE; lover of mine", ["love", "of"]));
// => "I love; Lover of Mine"