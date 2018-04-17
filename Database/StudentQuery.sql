/* Write a SQL statement to retrieve the names of all senior students majoring in CS. */
SELECT * FROM students.STUDENT;
SELECT StudentNumber from students.STUDENT WHERE DepartmentName = "CS";

/*Write a SQL statement to retrieve the names of all courses taught by Professor Anderson in 2004 and 2005. */
SELECT course_name FROM students.COURSE
	JOIN students.SECTION ON students.COURSE.course_number = students.SECTION.CourseNo
    AND students.SECTION.Instructor = "Anderson"
    AND ((students.SECTION.year = "2005") OR (students.SECTION.year = "2004"));
    
/* (d) Retrieve the name and major departments of all students who do not have any grade A in
any of their courses. */

/*SELECT students.STUDENT.StudentNumber, students.STUDENT.name, students.STUDENT.DepartmentName FROM students.GRADE_REPORT
	INNER JOIN students.STUDENT ON students.GRADE_REPORT.StudentNo = students.STUDENT.StudentNumber
    WHERE ( (students.GRADE_REPORT.Grade = "B"  OR students.GRADE_REPORT.Grade = "C" ) AND  students.GRADE_REPORT.Grade != "A")  GROUP BY students.GRADE_REPORT.StudentNo;*/
    
    SELECT S.StudentNumber, S.name, S.DepartmentName 
		FROM students.STUDENT S
			WHERE NOT EXISTS(SELECT gr.StudentNo
														FROM students.GRADE_REPORT gr
															WHERE gr.StudentNo = S.StudentNumber
																AND gr.Grade = "A");
			
    
/*(e) Retrieve the name and major departments of all students who has at least one grade A in
any of their courses. */
SELECT students.STUDENT.StudentNumber, students.STUDENT.name, students.STUDENT.DepartmentName FROM students.GRADE_REPORT
	INNER JOIN students.STUDENT ON students.GRADE_REPORT.StudentNo = students.STUDENT.StudentNumber
    AND  students.GRADE_REPORT.Grade = "A" GROUP BY students.GRADE_REPORT.StudentNo;
    
    SHOW 