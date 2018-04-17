// inAllStrings
//
// Write a function `inAllStrings(longStrings, shortString)``
// Check if a `shortString` is inside of ALL of the strings in the `longStrings` array.
// The function should return `true` if the `substring` is inside of every string
// of the `longStrings` array.
//
// Examples:
//
// inAllStrings(["thisisaverylongstring", "thisisanotherverylongstring"], "sisa") => true
// inAllStrings(["thisisaverylongstring", "thisisanotherverylongstring"], "isan") => false
// inAllStrings(["gandalf", "aragorn", "sauron"], "sam") => false
// inAllStrings(["axe", "ajax", "axl rose"], "ax") => true

//iterate through longstring
//store currentstring in a variable
//check whether the shortstring is a subtring of currentstring. This is done by the prototype.indexOf()
//if it is not a substring, return false
//if it is a substring, return true but only after we check each string in longstring


function inAllStrings(longStrings, shortString) { //(["axe", "ajax", "axl rose"], "ax"))
  for (var i = 0; i < longStrings.length; i++) {
    var string = longStrings[i];                //"axl rose"

    if (string.indexOf(shortString) === -1) {   //0
      return false;
    }
  }

  return true;
}




















function inAllStrings(longStrings, shortString) {
    for (var i = 0; i < longStrings.length; i++) {
        var word = longStrings[i];
        
        if (word.includes(shortString) === false) { //ajax.indexOf('ax')
            return false;
        }
    }
    
    return true;
}

console.log(inAllStrings(["thisisaverylongstring", "thisisanotherverylongstring"], "sisa"));// => true