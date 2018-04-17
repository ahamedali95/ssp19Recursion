function hasSymmetry(array)
{
  var arr1 = [];
  var arr2 = [];
  var arrLength = array.length;

  if(isEven(arrLength))
  {
    for(var i = 0; i < arrLength/2; i++)
    {
      arr1.push(array[i]);
    }
    for(var i = arrLength - 1; i >= arrLength/2; i--)
    {
      arr2.push(array[i]);
    }
  }
  else
  {
    for(var i = 0; i <= arrLength/2; i++)  //['cat', 'dog', 'bird', 'dog', 'cat'] Length = 5/2 = 2
    {
      arr1.push(array[i]);
    }
    for(var i = arrLength - 1; i >= Math.floor(arrLength/2); i--)
    {
      arr2.push(array[i]);
    }
  }


  for(var i = 0; i <= arr1.length - 1; i++)
  {
    var ele1 = arr1[i];
    var ele2 = arr2[i];

    if(ele1 !== ele2)
    {
      return false;
    }
  }
  return true;
}


function isEven(num)
{
  return num % 2 === 0;
}


//console.log(hasSymmetry([1, 2, 3, 3, 2, 1]));// => true
//console.log(hasSymmetry([1, 2, 3, 3, 4, 1]));// => false
//console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']));// => true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']));// => false
