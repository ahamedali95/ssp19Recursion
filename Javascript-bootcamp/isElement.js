

function isElement(array, ele)
{
  for(var i = 0; i <= array.length - 1; i++)
  {
    var arrElement = array[i];
    if(arrElement === ele)
    {
      return true;
    }
  }
  return false;
}

console.log(isElement([1,2,3,4,5], 5)); // => true
console.log(isElement(["a", "b", "c"], "a"));//=> true
console.log(isElement(["a", "b", "c"], "d"));// => false