function isIsogram(text) {
  var newText = text.toLowerCase();
  console.log(newText);

  for (var i = 0; i < newText.length; i++) {
    var char = newText[i];
    console.log
    
    for (var j = i + 1; j < newText.length; j++) {
      var char2 = newText[j];
      
      if (char === char2) {
        return false;
      }
    }
  }
  
  return true;
}

console.log(isIsogram('fleEcy'));

