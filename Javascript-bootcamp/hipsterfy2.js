

function hipsterfy(sentence)
{
  var vowels = "aeiouAEIOU".split("");
  var words = sentence.split(" ");

  for(var i = 0; i <= words.length - 1; i++)
  {
    var word = words[i];

    for(var j = word.length - 1; j >= 0; j--)
    {
      var char = word[j];

      if(vowels.indexOf(char) !== -1)
      {
        var before = word.slice(0, j);
        var after = word.slice(j + 1);
        var newWord = before + after;
        words.splice(i, 1, newWord);
        break;
      }
    }
  }
    return words.join(" ");
}


console.log(hipsterfy("proper")); // => "propr"
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"