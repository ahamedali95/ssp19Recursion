/*******************************************************************************
Write a function isPassing(assessments) that takes in an array of assessment objects.
The function should return a true if the average assessment score is at least 70.
It should return false otherwise.

Examples:

var assessments1 = [
  {number: 1, score: 60},
  {number: 2, score: 90},
  {number: 3, score: 80},
  {number: 4, score: 100},
  {number: 5, score: 85}
];

isPassing(assessments1) => true


var assessments2 = [
  {number: 1, score: 60},
  {number: 2, score: 20},
  {number: 3, score: 45}
];

isPassing(assessments2) => false
*******************************************************************************/

function isPassing(assessments)
{
  var sum = 0;

  for(var i = 0; i <= assessments.length - 1; i++)
  {
    var obj = assessments[i];
    var score = obj["score"];
    sum += score;
    console.log(sum);
  }

  var average = sum/assessments.length;
  console.log(average);
  return average >= 70;
}


var assessments1 = [
  {number: 1, score: 60},
  {number: 2, score: 90},
  {number: 3, score: 80},
  {number: 4, score: 100},
  {number: 5, score: 85}
];

console.log(isPassing(assessments1));// => true