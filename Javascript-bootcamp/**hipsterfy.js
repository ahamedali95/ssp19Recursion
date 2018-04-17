


function hipsterfyWord(word)
{
  var vowels = "aeiou";
  var chars = word.split("");

  for(var i = chars.length - 1; i >= 0; i--)
  {
    var char = chars[i];
    if(vowels.indexOf(char) !== -1)
    {
      chars.splice(i, 1, "");
      break;
    }
    
  }
  return chars.join("");
}

console.log(hipsterfyWord('proper')); // => 'propr'
console.log(hipsterfyWord('tonic fridge'))//  => 'tonc'
console.log(hipsterfyWord('PANTHER')); //=> 'PANTHR'
console.log(hipsterfyWord('BACKWARDS'));// => 'BACKWRDS'