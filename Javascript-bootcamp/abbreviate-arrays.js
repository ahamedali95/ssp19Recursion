// Write a function `abbreviate(sentence)` that takes in a sentence string and
// returns a new sentence where words longer than 4 characters have their vowels
// removed. Assume the sentence has all lowercase characters.
// Feel free to use the array below in your solution:
//
// var vowels = ['a', 'e', 'i', 'o', 'u'];
//
// Examples:
//
// abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
// abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
// abbreviate('hello world'); // => 'hll wrld'
// abbreviate('how are you'); // => 'how are you'

/* function abbreviate(sentence)
{
	var splitSentence = sentence.split(" ");
	var abbreviate = "";
	for(var i = 0; i <= splitSentence.length - 1; i++)
	{
		if(splitSentence[i].length > 4)
		{
			if(splitSentence[i].includes("a") || splitSentence[i].includes("e") || splitSentence[i].includes("i") || splitSentence[i].includes("o") || splitSentence[i].includes("u"))
			{
				abbreviate += splitSentence[i].replace(/[aeiou]/ig,"") + " ";
			}
			else
			{
				abbreviate += splitSentence[i] + " ";
			}
		}
		else
		{
			abbreviate += splitSentence[i] + " ";
		}
	}
	return abbreviate;
}

console.log(abbreviate('programming is fantastic'));


*/


function removeVowels(word) 
{
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var newWord = '';

  for (var i = 0; i < word.length; i += 1) 
  {
    var char = word[i];
    if (vowels.indexOf(char) === -1)
    {
      newWord += char;
    }
  }

  return newWord;
}

function abbreviate(sentence) 
{
  var words = sentence.split(' ');
  var newWords = [];

  for (var i = 0; i < words.length; i += 1) 
  {
    var word = words[i];

    if (word.length > 4) 
    {
      newWords.push(removeVowels(word));
    } 
    else 
    {
      newWords.push(word);
    }
  }

  var newSen = newWords.join(' ');
  return newSen;
}

console.log(abbreviate('programming is fantastic'));