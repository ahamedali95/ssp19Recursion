/*******************************************************************************
Write a function numsToWords(numString) that takes in a string representing a number.
The function should return a new string where each digit character is replaced with
it's "word" respresentation. Assume the input string only contains numeric characters.

Examples:

numsToWords('42') => 'FourTwo'
numsToWords('123') => 'OneTwoThree'
numsToWords('159598') => 'OneFiveNineFiveNineEight'
*******************************************************************************/

var words = {"1" : "One","2" : "Two","3" : "Three","4" : "Four","5" : "Five","6" : "Six","7" : "Seven",
"8" : "Eight","9" : "Nine","0" : "Zero"};

function numsToWords(numString) {
  var nums = numString.split("");
  var wordRep = "";

  for(var i = 0; i < nums.length; i++) {
    var num = nums[i];
    console.log("num: " + num);
    var word = getWord(num);
    wordRep += word;
  }

  return wordRep;
}

function getWord(n) {

  for (var num in words) {
    if (num === n) {
      return words[num];
    }
  }
}

console.log(numsToWords('42'));