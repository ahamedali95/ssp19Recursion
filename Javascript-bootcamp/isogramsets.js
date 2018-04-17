function isIsogram(text) {
  var set = new Set();
  
  for (var i = 0; i < text.length; i++) {
    set.add(text[i].toLowerCase());
  }
  
  return set.size === text.length;
}



function isIsogram2(text) {
  var set = new Set();
  
  return set(text.toLowerCase().split("")).size === text.length;
}
var set = new Set();
console.log(set(["ahamed"]).size);

console.log(isIsogram("fleEcy"));