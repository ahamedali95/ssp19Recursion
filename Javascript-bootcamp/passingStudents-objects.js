/******************************************************************************
Write a function passingStudents(students) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Example:
*******************************************************************************/

var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];




function passingStudents(students) {
  var stuNames = [];

  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    var grades = student["grades"];
    var average = getAvg(grades);

    if(average >= 70) {
      var stuName = student["name"];
      stuNames.push(stuName);
    }
  }

  return stuNames;
}

function getAvg(grades) {
  var totalScore = 0;

  for (var i = 0; i < grades.length; i++) {
    var grade = grades[i];
    var score = grade["score"];
    totalScore += score;
  }

  return totalScore/grades.length;
}

console.log(passingStudents(students)); // => [ 'Kush', 'Ned' ]
