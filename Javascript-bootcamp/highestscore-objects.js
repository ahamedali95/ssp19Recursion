/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

function highestScore(students)
{
  var maxScore = students[0].score;
  var stuName = null;
  var stuId = null;

  for(var i = 0; i <= students.length - 1; i++)
  {
    var student = students[i];
    var score = student.score;

    if(score >= maxScore)
    {
      maxScore = score;
      stuName = student.name;
      stuId = student.id;
    }
  }

  var stuInitial = getInitial(stuName);
  return stuInitial + stuId;
}

function getInitial(name)
{
  var names = name.split(" ")
  var initials = "";

  for(var i = 0; i <= names.length - 1; i++)
  {
    var name = names[i];
    initials += name[0];
  }
  return initials;
}


var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

console.log(highestScore(students)); //=> 'TD2'
