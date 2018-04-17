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

function inAllStrings(longStrings, shortString) {
    for (var i = 0; i < longStrings.length; i++) {
        var word = longStrings[i];
        
        if (word.indexOf(shortString) === -1) { //ajax.indexOf('ax')
            return false;
        }
    }
    
    return true;
}

// inAllStrings Solution ///////////////////////////////////////////////////////
function inAllStrings(longStrings, shortString) {
  for (var i = 0; i < longStrings.length; i++) {
    var longStr = longStrings[i];
    if (longStr.indexOf(shortString) === -1) {
      return false;
    }
  }

  return true;
}