/*Write a function validatePhoneNumber(number) that receives a string containing a phone number. 
A valid phone number has the following format:
"917-901-9011"
3NUMBERS HYPHEN 3NUMBERS HYPHEN 4 NUMBERS
Your method should return false if the format is not the one mentioned above. 

INVALID FORMATS:
"093-ab9-2901"
"9178-750-0122"
"9-7-0415"
"9179019011"
*/


function validatePhoneNumber(number) {
  if (number.length === 12) {
    for (var i = 0; i < number.length; i++) {
      var currentNum = number[i]; 
      console.log(currentNum);
      
      if (checkAll(currentNum, i) === false) {
        return false;
      }
    }
    
    return true;
  }
  
  return false;
}

function checkForHyphen(char, idx) {
  return ((char === "-") && (idx === 3 || idx === 7));
}

function checkNum(num) {
  return Number(num) >= 0 && Number(num) <= 9;
}

function checkAll(char, i) {
  return (checkForHyphen(char, i) || checkNum(char)); // if any of them evaluates to true
}  // the func will true;

console.log(validatePhoneNumber("093-ab9-2901"));
console.log(validatePhoneNumber("9178-750-0122")); //13
console.log(validatePhoneNumber("9-7-0415")); //
console.log(validatePhoneNumber("917-901-9011")); //)