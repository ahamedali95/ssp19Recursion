/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/

function variableNameify(words) 
{
  var lowerCased = lowerCase(words);
  var mixCased = lowerCased[0];
  
  for(var i = 1; i <= lowerCased.length - 1; i++)
  {
  	var word = lowerCased[i];
  	var newWord = word[0].toUpperCase() + word.slice(1);
  	mixCased += newWord;
  }
  return mixCased;
}

function lowerCase(words)
{
  for(var i = 0; i <= words.length - 1; i++)
  {
    var word = words[i];
    words.splice(i, 1, word.toLowerCase());
  }
  return words;
}

console.log(variableNameify(['is', 'prime']))// => 'isPrime'
console.log(variableNameify(['remove', 'last', 'vowel'])); //=> 'removeLastVowel'
console.log(variableNameify(['MaX', 'VALUE']));// => 'maxValue'