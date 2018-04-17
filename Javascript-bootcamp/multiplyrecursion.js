/*function multiply(a,b) {
	if (b === 0) {
		return 0;
	}

	return a + multiply(a, b - 1);
}

console.log(multiply());
*/

function convertDoubleSpaceToSingle(str) {
 console.log(str.split("  ").join(" "));
}

convertDoubleSpaceToSingle("my  name  is  boss");



function addToFront(arr, element) {
  return arr.push(element);

  
}

console.log(addToFront(["lol","pol","iol"], "iop"));

function computePower(num, exponent) {
  var result = num;
  
  for (var i = 0; i < exponent - 1; i++) {
    result *= num;;
  }
  
  return result;
}

console.log(computePower(2,0));


function countWords(str) {
  var obj = {};
  var words = str.split(" ");
  
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    
    if (obj[word] === undefined) {
      obj[word] = 1;
    } else {
      obj[word] += 1;
    }
  }
  
  return obj;
}

console.log(countWords("ask a bunch try a bunch get a bunch"));


function removeNumbersLargerThan(num, obj) {
  for (var key in obj) {
    if (num < obj[key]) {
      delete obj[key];
    }
  }
  
  return obj;
}

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}

console.log(removeNumbersLargerThan(5, obj));


function removeArrayValues(obj) {
  for (var key in obj) {
    if (Array.isArray(obj[key])) {
      delete obj[key];
    }
  }
  
  return obj;
}

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }


function removeNumberValues(obj) {
  for (var key in obj) {
    if (!isNaN(obj[key])) {
      delete obj[key];
    }
  }
  
  return obj;
}

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }

function addToFrontOfNew(arr, element) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
  	newArr.push(arr[i]);
  }

  newArr.unshift(element);
  
  return "original: " + arr;
  return "new: " + newArr;
}

var input = [1, 2];
addToFrontOfNew(input, 3);


function getAllElementsButNth(array, n) {
  array.splice(n, 1);

  return array;
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); 



function getIndexOf(char, str) {
  for (var i = 0; i < str.length; i++) {
    if (char === str[i]) {
      return true;
    }
  }
  
  return -1;
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2


function getElementsGreaterThan10AtProperty(obj, key) {
  if (obj[key] === undefined || !Array.isArray(obj[key])) {
    return [];
  }
  
  var arr = obj[key];
  var newArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
      console.log("hello");
    }
  }
  
  return newArr;
}

var obj = {
  key: "string"
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); 
console.log("jkfjdk",obj);


function calculateBillTotal(preTaxAndTipAmount) {
  return (preTaxAndTipAmount + (9.5 / 100) + (15 / 100));
}

console.log(calculateBillTotal(20));



function getStringLength(string) {
  var strLength = 0;

  while (string[strLength] !== undefined) {
  	strLength++;
  }
  
  return strLength;
}

console.log(getStringLength("AHAMED"));	





function findShortestWordAmongMixedElements(arr) { ["two", "three"]
  var arrWithWords = removeNonStrings(arr);
  console.log(arrWithWords);
  var shortestWord = ""; //"two"
  var shortestWordLen = null; //3
  
  for (var i = 0; i < arrWithWords.length; i++) {
    var currentWord = arrWithWords[i];
    
    if (currentWord.length < shortestWordLen || shortestWordLen === null) {
      shortestWordLen = currentWord.length;
      shortestWord = currentWord;
    }
  }
  
  return shortestWord;
}

function removeNonStrings(arr) {
  var newArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      newArr.push(arr[i]);
    }
  }
  
  return newArr;
}

 var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); 


console.log(1 < "3");


function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var index = katzDeliLine.indexOf(name);
  var position = index + 1;
  var message = "Welcome, " + name + ". You are number " + position + " in line."

  return message;
}

console.log(takeANumber(["Ada"],"Grace"));
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var personserving = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + personserving + ".";
  }
}

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





console.log(true || false);
