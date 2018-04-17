// repeatedChars
//
// Write a function `repeatedChars(word) `which takes a string
// and returns an array of all the characters in word that
// appear in a streak (i.e. more than once consecutively).
// This should be case-sensitive.
//
// Examples:
// repeatedChars("aaabaa") => ["a", "a"]
// repeatedChars("mississippi") => ["s", "s", "p"]
// repeatedChars("SSassSS") => ["S", "s", "S"]


//iterate throught the word string
//store each character as a variable
//

/*function repeatedChars3(word) {  //"aaabaa"
  var result = []; //[""]
  var count = 0; //3

  for (var i = 0; i < word.length - 1; i++) {
    var previousChar = word[i-1];
    var currentChar = word[i];        //a
    var nextChar = word[i+1];         //a

    
  }

  return result;
}
*/

console.log(repeatedChars4("aaabaa")); //=> ["a", "a"]
console.log(repeatedChars4("mississippi"));// => ["s", "s", "p"]
console.log(repeatedChars4("SSassSS"));// => ["S", "s", "S"]

 function repeatedChars4(word) {
  var repeats = []; //["a"]
   var count = 0; //2
  
  for (var i = 0; i < word.length - 1; i++){
   var char = word[i]; //a
   var nextchar = word[i + 1];  //a

    if (char === nextchar)
    {
       count += 1;
    } 
    else 
    {
       count = 0;
    }

    if (count === 1)
    {
       repeats.push(char);
    }
   }
   return repeats;
 }





















function repeatedChars(word) {
  var newArr = [];
  console.log(word);

  for (var i = 0; i < word.length - 1; i++) {
    var current = word[i];
    var next = word[i+1];
    var back = word[i-1];

    if (current === next && current !== back) {
      newArr.push(current);
    }
  }

  return newArr;
}


console.log(repeatedChars("aaabaa"));// => ["a", "a"]
console.log(repeatedChars("mississippi"));// => ["s", "s", "p"]
console.log(repeatedChars("SSassSS"));// => ["S", "s", "S"]













function repeatedChars(word) {
    var newArr = [];
    
    for (var i = 0; i < word.length - 1; i++) {
        var char1 = word[i];
        var char2 = word[i+1];
        
        if (char1 === char2) {
            newArr.push(char1);
        } 
    }
    
    return newArr;
}

// repeatedChars Solution //////////////////////////////////////////////////////
function repeatedChars(word) {
  var repeats = [];

  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1] && word[i] !== word[i - 1]) {
      repeats.push(word[i]);
    }
  }

  return repeats;
}
////////////////////////////////////////////////////////////////////////////////