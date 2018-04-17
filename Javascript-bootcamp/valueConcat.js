/*******************************************************************************
Write a function valueConcat(array, obj) that takes in an array and object
The function should return a new array where each element is concatenated with
it's corresponding value from the object.

Examples:

valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'})
=> [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], {b: 2, c: 3})
=> [ 'a', 'b2', 'c3' ]
*******************************************************************************/

function valueConcat(array, obj)
{
  for(var i = 0; i <= array.length - 1; i++)
  {
    var word = array[i];
    console.log(word);
    if(obj[word] !== undefined)
    {
      var newWord = word + obj[word];
      array.splice(i, 1, newWord);
    }
  }
  return array;
}


console.log(valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'}));
//=> [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

console.log(valueConcat(['a', 'b', 'c'], {b: 2, c: 3}));
//=> [ 'a', 'b2', 'c3' ]