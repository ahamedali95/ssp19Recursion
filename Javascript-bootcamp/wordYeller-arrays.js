// Write a function wordYeller(sentence) that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// var sent = "Stop it now! Please, wont you stop?";
// var yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// var words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; => true

function wordYeller(sentence)
{
	var splitSentence = sentence.split(" ");
	var yelledSentence = "";
	for(var i = 0; i <= splitSentence.length - 1; i++)
	{
		if(!(isPunctuated(splitSentence[i])))
		{	
			yelledSentence += splitSentence[i] + "! ";
		}
		else
		{
			yelledSentence += splitSentence[i] + " ";
		}
	}

	return yelledSentence;
}

function isPunctuated(element)
{
	if(element.includes(".") || element.includes(",") || element.includes("!") || element.includes("?") || element.includes(":") || element.includes(";"))
	{
		return true;
	}
	else
	{
		return false;
	}


}


var sent = "Go to the store and grab the following: milk, bread, run, and cake";
console.log(wordYeller(sent));