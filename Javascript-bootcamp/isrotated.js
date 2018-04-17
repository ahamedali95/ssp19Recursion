/*
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

If you double the string, you'll be to trivially find another string 
inside it using regular String methods.

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    '
*/

function isRotated(str1, str2) {
  str1 = str1.repeat(2);

  return str1.indexOf(str2) !== -1;
}

var str1 =  'hello world'
var str2 =  'orldhello w'
console.log(isRotated(str1, str2));	

