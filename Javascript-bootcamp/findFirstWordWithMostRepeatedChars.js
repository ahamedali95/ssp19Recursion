function findMaxRepeatCountInWord(word) {
  var letters = word.split("");
  var mostRepeated = 0;
  
  for (var i = 0; i < letters.length; i++) {
    var char = letters[i];
    var repeated = 0;
    
    for (var j = i + 1; j < letters.length; j++) {
      var char2 = letters[j];
      
      if (char === char2) {
        repeated++;
      }
    }
    
    if (repeated > mostRepeated) {
      mostRepeated = repeated;
      repeated = 0;
    } else {
      repeated = 0;
    }
  }
  return mostRepeated;
}


function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  text.split(" ").forEach(function(word) {
      var repeatCountForWord = findMaxRepeatCountInWord(word);
      
      if (repeatCountForWord > maxRepeatCountOverall) {
        maxRepeatCountOverall = repeatCountForWord;
        wordWithMaxRepeatCount = word;
      }
  });    
  
  return wordWithMaxRepeatCount;
}



console.log(findMaxRepeatCountInWord("arrbbbzzzz"));