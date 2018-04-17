// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
// capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']

function capWords(words)
{
  var wordArray = [];
  for(var i = 0; i<= words.length - 1; i++)
  {
    wordArray[i] = (words[i].toUpperCase());
  }
  return wordArray;
}

console.log(capWords(['hello', 'boOtCaMp', 'PREP!']));