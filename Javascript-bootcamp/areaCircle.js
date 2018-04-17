// Write a function areaCircle(radius) that returns the area of a circle with the
// given radius. The area should be rounded down to the nearest whole number.
// Area of Circle = PI * radius * radius
//
// Examples
//
// areaCircle(5); // => 78
// areaCircle(3); // => 28

function areaCircle(radius) 
{
  var areaCircle = Math.PI * Math.pow(radius,2);
  console.log(areaCircle);
  return Math.round(areaCircle);
}


console.log(areaCircle(5)); // => 78
console.log(areaCircle(3)); // => 28