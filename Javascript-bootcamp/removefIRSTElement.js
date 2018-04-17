/*function shift1() {
	var text1 = ["ahamed", "abbas"];
	var result = text1.shift();
	console.log(text1);
	console.log(result);
}

console.log(shift1());
*/

function currentLine(katzDeliLine) {
  var people = "";
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length - 1) {
        people += i+1 + ". " + katzDeliLine[i];
      } else {
        people += i+1 + ". " + katzDeliLine[i] + ", ";
      }
    }
  }

  return "The line is currently: " + people;
}


console.log(currentLine(["Ada", "Grade"]));